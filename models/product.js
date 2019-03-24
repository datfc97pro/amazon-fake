const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const deepPopulate = require("mongoose-deep-populate")(mongoose);
const mongooseAlgolia = require("mongoose-algolia");

const ProductSchema = Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    image: String,
    title: String,
    description: String,
    price: Number,
    created: { type: Date, default: Date.now }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

ProductSchema.virtual("averageRating").get(function() {
  var rating = 0;
  if (this.reviews.length === 0) {
    rating = 0;
  } else {
    this.reviews.map(review => {
      rating = +review.rating;
    });

    rating = rating / this.reviews.length;
  }

  return rating;
});

ProductSchema.plugin(deepPopulate);
ProductSchema.plugin(mongooseAlgolia, {
  appId: process.env.ALGOLIAID,
  apiKey: process.env.ALGOLIAKEY,
  indexName: "amazon", //The name of the index in Algolia, you can also pass in a function
  selector:
    "-_id title image reviews description price owner created averageRating", //You can decide which field that are getting synced to Algolia (same as selector in mongoose)
  populate: {
    path: "owner reviews",
    select: "name rating"
  },
  defaults: {
    author: "unknown"
  },
  mappings: {
    title: function(value) {
      return `${value}`;
    }
  },
  virtuals: {
    averageRating: function(doc) {
      var rating = 0;
      if (doc.reviews.length === 0) {
        rating = 0;
      } else {
        doc.reviews.map(review => {
          rating = +review.rating;
        });

        rating = rating / doc.reviews.length;
      }

      return rating;
    }
  },
  // filter: function(doc) {
  //   return !doc.softdelete;
  // },
  debug: true
});

const Model = mongoose.model("Product", ProductSchema);
Model.SyncToAlgolia(); //Clears the Algolia index for this schema and synchronizes all documents to Algolia (based on the settings defined in your plugin settings)
Model.SetAlgoliaSettings({
  searchableAttributes: ["title"] //Sets the settings for this schema, see [Algolia's Index settings parameters](https://www.algolia.com/doc/api-client/javascript/settings#set-settings) for more info.
});

module.exports = Model;

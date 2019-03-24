const express = require("express");
const router = express.Router();
const algoliasearch = require("algoliasearch");
const client = algoliasearch(process.env.ALGOLIAID, process.env.ALGOLIAKEY);
const index = client.initIndex("amazon");

router.get("/", (req, res) => {
  if (req.query.query) {
    index.search(
      {
        query: req.query.query,
        page: req.query.page
      },
      (err, content) => {
        return res.json({
          success: true,
          message: "Here is your search",
          status: 200,
          content,
          search_result: req.query.query
        });
      }
    );
  }
});

module.exports = router;

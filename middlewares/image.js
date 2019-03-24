const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = new aws.S3({
  accessKeyId: process.env.KEYID,
  secretAccessKey: process.env.SECRETKEY
});

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg"
};

const fileFilter = (req, file, cb) => {
  const isValid = MIME_TYPE_MAP[file.mimetype];
  if (isValid) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type, only JPEG, PNG and JPG is allowed!"),
      false
    );
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: "amazon-fake",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    }
  })
});

module.exports = upload;

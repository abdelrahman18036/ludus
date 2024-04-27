const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const date = new Date()
      .toISOString()
      .replace(/:/g, "-")
      .replace(/\./g, "-");
    const cleanFileName = file.originalname
      .replace(/[^a-z0-9\.]/gi, "_")
      .substring(0, 50);
    cb(null, `${date}${cleanFileName}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload only images."), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

module.exports = upload;

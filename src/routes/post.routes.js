const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware")
const multer = require("multer")

router.post("/",authMiddleware,
    upload.single("image"),
    createPostController);

module.exports = router;

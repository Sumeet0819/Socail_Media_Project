const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware")
const multer = require("multer")

// configure multer (stores uploads to r:\Sheriyans-Coding-School\Socail_Media_Project\uploads)
const upload = multer();

const {createPostController} = require("../controllers/posts.controller")

router.post("/", authMiddleware,
    upload.single("image"),
    createPostController);

module.exports = router;

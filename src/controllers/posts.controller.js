const postModel = require("../models/post.model");
const generateCaption = require("../services/ai.service");
const uploadImageToStorage = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");

async function createPostController(req, res) {
  const file = req.file;
  console.log("File received in controller:", file);

  const base64Image = new Buffer.from(file.buffer).toString("base64");

  const caption = await generateCaption(base64Image);

  const result = await uploadImageToStorage(file.buffer, `${uuidv4()}`);

  
  const post = new postModel({
    caption: caption,
    userId: req.user._Id,
    imageUrl: result.url,
  });
 await post.save()
  res.status(201).json({
    message: "Post created successfully",
    post: post,
  });
}

module.exports = { createPostController };

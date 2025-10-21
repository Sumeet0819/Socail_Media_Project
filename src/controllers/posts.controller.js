const postModel = require("../models/post.model");
const generateCaption = require("../services/ai.service");

async function createPostController(req, res) {
  const file = req.file;
  console.log("File received in controller:", file);

  const base64Image = new Buffer.from(file.buffer).toString("base64");

  const caption = await generateCaption(base64Image);
    console.log("Generated caption:", caption);

    res.json({ caption });
}

module.exports = { createPostController };

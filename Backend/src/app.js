const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); //middleware to parse JSON request bodies

const upload = multer({ storage: multer.memoryStorage() }); //configure multer to store uploaded files in memory

app.post("/create-post", upload.single("image"), async (req, res) => {
  // the uploaded image file
  // two fields: image and caption

  const result = await uploadFile(req.file.buffer); //upload the image to ImageKit and get the URL

  const post = await postModel.create({
    image: result.url, //save the url and caption in the database
    caption: req.body.caption,
  });
  return res.status(201).json({
    message: "Post created successfully",
    post,
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  return res.status(200).json({
    message: "Posts fetched successfully",
    posts,
  });
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  await postModel.findByIdAndDelete(id);

  return res.status(200).json({
    message: "Post deleted successfully",
  });
});

module.exports = app;

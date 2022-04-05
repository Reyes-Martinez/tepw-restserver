const { response, request } = require("express");

const Post = require("../models/post");

const postGet = async (req = request, res = response) => {
  try {
    let posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    throw new Error(error);
  }
};

const postGetOne = async (req = request, res = response) => {
  try {
    const { id_post } = req.params;
    let posts = await Post.find({ id_post: id_post });
    res.json(posts);
  } catch (error) {
    throw new Error(error);
  }
};
const postPost = async (req, res = response) => {
  const { title, author, image, create_at, category } = req.body;
  const id_post = (await Post.count()) + 1;
  const post = new Post({
    id_post,
    title,
    author,
    image,
    create_at,
    category,
  });
  await post.save();
  res.send(post);
};

const postPut = async (req = request, res = response) => {
  const { id_post } = req.params;
  const { title, author, image, category } = req.body;
  const post = await Post.findOneAndUpdate(
    { id_post: id_post },
    {
      title,
      author,
      image,
      category,
    }
  );
  console.log(post);

  res.json(post);
};

const postDelete = async (req, res = response) => {
  const { id_post } = req.params;
  const post = await Post.findOneAndDelete({ id_post: id_post });
  res.json({ msg: `el post ${id_post} se elimino correctamente` });
};

module.exports = { postGet, postPut, postPost, postDelete, postGetOne };

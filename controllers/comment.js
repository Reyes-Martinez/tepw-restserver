const { response, request } = require("express");

const Comment = require("../models/comment");

const commentGet = async (req = request, res = response) => {
  const { post_id } = req.params;
  console.log(post_id);
  try {
    let comments = await Comment.find({ post_id: post_id });
    res.send(comments);
  } catch (error) {
    throw new Error(error);
  }
};

const commentPost = async (req, res = response) => {
  const { commenter, comment, create_at, post_id } = req.body;
  const id_comments = (await Comment.count()) + 1;
  const commentObj = new Comment({
    id_comments,
    commenter,
    comment,
    create_at,
    post_id,
  });
  await commentObj.save();
  res.send(commentObj);
};

const commentPut = async (req = request, res = response) => {
  const { id_comments } = req.params;
  const { commenter, comment, post_id } = req.body;
  const commentObj = await Comment.findOneAndUpdate(
    { id_comments: id_comments },
    {
      commenter,
      comment,
      post_id,
    }
  );
  res.json(commentObj);
};

const commentDelete = async (req, res = response) => {
  const { id_comments } = req.params;
  const comment = await Comment.findOneAndDelete({ id_comments: id_comments });
  res.json({ msg: `el comment ${id_comments} se elimino correctamente` });
};

module.exports = { commentGet, commentPut, commentPost, commentDelete };

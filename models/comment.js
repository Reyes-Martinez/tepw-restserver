const { Schema, model } = require("mongoose");

const CommentSchema = Schema({
  id_comments: {
    type: Number,
    required: true,
  },
  commenter: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  create_at: {
    type: Date,
    required: true,
  },
  post_id: {
    type: Number,
    required: true,
  },
});

module.exports = model("Comment", CommentSchema);

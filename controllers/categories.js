const { response, request } = require("express");
const { ObjectId } = require("mongodb");
const Category = require("../models/category");
const Post = require("../models/post");

const categoryGet = async (req = request, res = response) => {
  try {
    const posts = await Post.aggregate(
      [
        {
          $lookup: {
            from: "categories",
            localField: "category",
            foreignField: "_id",
            as: "Category",
          },
        },
        {
          $project: {
            _id: 0,
            title: 1,
            Category: 1,
          },
        },
      ],
      function (err, response) {
        //console.log(err, response)
        res.send(response);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const postCategoryByIDGet = async (req = request, res = response) => {
  try {
    const categories = await Category.aggregate(
      [
        {
          $match: {
            _id: new ObjectId(req.params.cat_id),
          },
        },
        {
          $lookup: {
            from: "posts",
            localField: "_id",
            foreignField: "category",
            as: "Posts",
          },
        },
        {
          $project: {
            name: 1,
            Posts: 1,
          },
        },
      ],
      (err, response) => {
        res.send(response);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = { categoryGet, postCategoryByIDGet };

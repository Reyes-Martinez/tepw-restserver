const { Schema, model } = require("mongoose");
const CategorySchema = Schema({
  category: {
    type: String,
    required: true,
  },
});

module.exports = model("Category", CategorySchema);

const { Router } = require("express");
const {
  categoryGet,
  postCategoryByIDGet,
  postCategoryByNameGet,
} = require("../controllers/categories");

const router = Router();

router.get("/list", categoryGet);
router.get("/posts/:cat_id", postCategoryByIDGet);

module.exports = router;

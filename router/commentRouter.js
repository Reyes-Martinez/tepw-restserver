const { Router } = require("express");
const {
  commentGet,
  commentPut,
  commentPost,
  commentDelete,
} = require("../controllers/comment");
const router = Router();

router.get("/list/:post_id", commentGet);
router.post("/add", commentPost);
router.put("/update/:id_comments", commentPut);
router.delete("/remove/:id_comments", commentDelete);
module.exports = router;

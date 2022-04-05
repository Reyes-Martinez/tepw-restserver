const { Router } = require("express");
//const authenticateJWT = require("../auth/authenticateJWT");
const {
  postGet,
  postPut,
  postPost,
  postDelete,
  postGetOne,
} = require("../controllers/post");
const router = Router();

router.get("/list/", postGet);
router.get("/one/:id_post", postGetOne);
router.post("/add", postPost);
router.put("/update/:id_post", postPut);
router.delete("/remove/:id_post", postDelete);
module.exports = router;

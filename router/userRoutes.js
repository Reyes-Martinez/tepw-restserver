const { Router } = require("express");
const {
  usersGet,
  oneUserGet,
  userPost,
  userUpdate,
  userLogin,
  userRegister,
  userDelete,
  userCount,
} = require("../controllers/user");
const router = Router();

router.get("/", usersGet);
router.get("/:id", oneUserGet);
router.post("/", userPost);
router.put("/:id", userUpdate);
router.post("/login", userLogin);
router.post("/register", userRegister);
router.delete("/:id", userDelete);
router.get("/get/count", userCount);

module.exports = router;

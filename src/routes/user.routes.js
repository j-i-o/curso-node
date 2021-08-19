const router = require("express").Router();
const {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller");
const { authJwt } = require("../middleware");

router.get("/", getUsers);
router.post("/", addUser);
router.delete("/:id", [authJwt.check], deleteUser);
router.put("/:id", [authJwt.check], updateUser);

module.exports = router;

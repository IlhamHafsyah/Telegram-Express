const router = require("express").Router();
const { register, login, logout } = require("../controller/auth");

router.post("/login", login);
router.post("/register", register);
router.patch("/status/:id", logout);

module.exports = router;

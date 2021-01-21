const router = require("express").Router();
const auth = require("./route/auth");

router.use("/auth", auth);

module.exports = router;

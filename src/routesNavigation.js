const router = require("express").Router();
const auth = require("./route/auth");
const profile = require("./route/profile");
const friend = require("./route/friend");
const room = require("./route/room");
const message = require("./route/message");

router.use("/auth", auth);
router.use("/profile", profile);
router.use("/friend", friend);
router.use("/room", room);
router.use("/message", message);

module.exports = router;

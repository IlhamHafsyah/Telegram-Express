const router = require("express").Router();
const { joinRoom, getRoom } = require("../controller/room");

router.post("/joinroom", joinRoom);
router.get("/", getRoom);

module.exports = router;

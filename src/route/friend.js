const router = require("express").Router();
const { addFriend, getFriendList } = require("../controller/friend");

router.post("/add", addFriend);
router.get("/:id", getFriendList);

module.exports = router;

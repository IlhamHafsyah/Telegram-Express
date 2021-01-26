const router = require("express").Router();
const {
  addFriend,
  getFriendList,
  deleteFriend,
} = require("../controller/friend");

router.post("/add", addFriend);
router.get("/:id", getFriendList);
router.delete("/", deleteFriend);

module.exports = router;

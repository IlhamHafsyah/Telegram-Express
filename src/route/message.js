const router = require("express").Router();
const {
  sendMessage,
  getMessage,
  searchMessage,
} = require("../controller/message");

router.post("/", sendMessage);
router.get("/", getMessage);
router.get("/search", searchMessage);

module.exports = router;

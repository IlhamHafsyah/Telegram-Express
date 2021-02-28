const router = require("express").Router();
const {
  sendMessage,
  getMessage,
  searchMessage,
  countNotif,
} = require("../controller/message");

router.post("/", sendMessage);
router.get("/", getMessage);
router.get("/search", searchMessage);
router.get("/countnotif", countNotif);

module.exports = router;

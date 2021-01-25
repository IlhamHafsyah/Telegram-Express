const router = require("express").Router();
const { editProfile, getProfile } = require("../controller/profile");
const uploadPhoto = require("../middleware/multerProfile");

router.get("/:id", getProfile);
router.patch("/edit/:id", uploadPhoto, editProfile);

module.exports = router;

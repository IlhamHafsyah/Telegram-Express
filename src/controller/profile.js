const helper = require("../helper/response");
const bcrypt = require("bcrypt");
const {
  editProfileModel,
  getUserModel,
  getPhotoModel,
} = require("../model/profile");

module.exports = {
  editProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const checkUser = await getUserModel(id);
      const checkingPhoto = await getPhotoModel(id);
      if (checkUser.length > 0) {
        const {
          username,
          // email,
          // password,
          phone_number,
          bio,
          location,
        } = req.body;
        // const salt = bcrypt.genSaltSync(10);
        // const encryptPassword = bcrypt.hashSync(password, salt);
        const setData = {
          username,
          // email,
          // password: encryptPassword,
          photo: req.file === undefined ? checkingPhoto : req.file.filename,
          phone_number,
          bio,
          location,
          updated_at: new Date(),
        };
        const result = await editProfileModel(setData, id);
        console.log(result);
        return helper.response(
          res,
          200,
          `Success update profile by id: ${id}`,
          result
        );
      } else {
        return helper.response(res, 404, `User by Id ${id} not found !`);
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getProfile: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await getUserModel(id);
      if (result.length > 0) {
        return helper.response(
          res,
          200,
          `Success get profile by id: ${id}`,
          result
        );
      } else {
        return helper.response(res, 404, `User by Id ${id} not found !`);
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
};

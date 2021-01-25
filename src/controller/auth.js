const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helper = require("../helper/response");
const { registerModel, loginModel } = require("../model/auth");

module.exports = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const encryptPass = bcrypt.hashSync(password, salt);
      const setData = {
        username,
        email,
        password: encryptPass,
        created_at: new Date(),
      };
      const result = await registerModel(setData);
      return helper.response(res, 200, "Registration Success !", result);
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkingData = await loginModel(email);
      if (checkingData.length > 0) {
        const checkingPassword = bcrypt.compareSync(
          password,
          checkingData[0].password
        );
        console.log(checkingPassword);
        if (checkingPassword) {
          const { user_id, username, email, status } = checkingData[0];
          const payload = {
            user_id,
            username,
            email,
            status,
          };
          const token = jwt.sign(payload, "PASS", { expiresIn: "3h" });
          const result = { ...payload, token };
          console.log(result);
          return helper.response(res, 200, "You are Loging in !", result);
        } else {
          return helper.response(res, 400, "Password Incorrect !");
        }
      } else {
        return helper.response(res, 400, "Email not registered !");
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
};

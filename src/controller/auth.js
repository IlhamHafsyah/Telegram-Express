const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helper = require("../helper/response");
const {
  registerModel,
  loginModel,
  getStatusModel,
  onStatusModel,
  logoutModel,
} = require("../model/auth");

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
        if (checkingPassword) {
          console.log(req.body.email);
          const onStatus = await onStatusModel(req.body.email);
          console.log(onStatus);
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
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await getStatusModel(id);
      if (result.length > 0) {
        return helper.response(res, 200, "Success get Status", result);
      } else {
        return helper.response(res, 400, "Not Found !");
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  logout: async (req, res) => {
    try {
      const { id } = req.params;
      const off = await logoutModel(id);
      return helper.response(res, 200, `Success update status`, off);
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
};

const connection = require("../config/mysql");

module.exports = {
  registerModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO auth SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            user_id: result.insertId,
            ...setData,
          };
          delete newResult.password;
          resolve(newResult);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  loginModel: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT user_id, username, email, password, status FROM auth WHERE email = ?",
        email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};

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
  onStatusModel: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE auth SET status = 'ON' WHERE email = ?",
        email,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  logoutModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE auth SET status = 'OFF' WHERE user_id = ?",
        id,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
  getStatusModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT status FROM auth WHERE user_id = ?`,
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};

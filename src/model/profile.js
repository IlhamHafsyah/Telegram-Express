const connection = require("../config/mysql");

module.exports = {
  getUserModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM auth WHERE user_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getPhotoModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT photo FROM auth WHERE user_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  editProfileModel: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE auth SET ? WHERE user_id = ?`,
        [setData, id],
        (error, result) => {
          console.log(result);
          if (!error) {
            const newResult = {
              user_id: id,
              ...setData,
            };
            resolve(newResult);
          } else {
            reject(new Error(error));
          }
        }
      );
    });
  },
};

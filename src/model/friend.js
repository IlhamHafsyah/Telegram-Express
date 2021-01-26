const connection = require("../config/mysql");

module.exports = {
  cekEmailModel: (email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM auth WHERE email = ?",
        email,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  addFriendModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO friend SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            user_id: result.insertId,
            ...setData,
          };
          resolve(newResult);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  getFriendListModel: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT auth.user_id, username, photo, friend_email FROM auth JOIN friend ON auth.email = friend.friend_email WHERE friend.user_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  deleteFriendModel: (user_id, friend_email) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM friend WHERE user_id = ? AND friend_email = ?",
        [user_id, friend_email],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
};

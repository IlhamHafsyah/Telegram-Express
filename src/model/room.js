const connection = require("../config/mysql");

module.exports = {
  checkingRoomModel: (user_a, user_b) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM room_chat WHERE user_a = ? AND user_b = ?",
        [user_a, user_b],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  getRoomModel: (user_a) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT room_id_uniq, username, status, photo, phone_number, bio, user_b, id_room FROM auth JOIN room_chat ON auth.user_id = room_chat.user_b WHERE user_a = ?",
        [user_a],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  joinRoomModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO room_chat SET ?",
        setData,
        (error, result) => {
          if (!error) {
            const newResult = {
              room_id_uniq: result.insertId,
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
  joinRoomModels: (setDatas) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO room_chat SET ?",
        setDatas,
        (error, result) => {
          if (!error) {
            const newResult = {
              room_id_uniq: result.insertId,
              ...setDatas,
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

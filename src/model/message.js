const connection = require("../config/mysql");
const message = require("../controller/message");

module.exports = {
  sendMessageModel: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO chat SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            chat_id: result.insertId,
            ...setData,
          };
          resolve(newResult);
        } else {
          reject(new Error(error));
        }
      });
    });
  },
  getMessageModel: (id_room) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT username, sender_id, receiver_id, message, chat.created_at FROM chat JOIN auth ON chat.sender_id = auth.user_id WHERE id_room = ?",
        [id_room],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  searchMessageModel: (message, receiver_id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT message, sender_id, created_at FROM chat WHERE receiver_id = ${receiver_id} AND message LIKE '%${message}%'`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      );
    });
  },
  countNotifModel: (rec, send) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) AS total FROM chat WHERE receiver_id = ${rec} AND sender_id = ${send} AND read_status = 'OFF'`,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(error);
          }
        }
      );
    });
  },
  patchReadStatusModel: (room, rec) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE chat SET read_status = 'ON' WHERE id_room = ? AND receiver_id = ?",
        [room, rec],
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
};

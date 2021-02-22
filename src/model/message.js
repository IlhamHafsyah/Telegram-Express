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
        "SELECT username, sender_id, message FROM chat JOIN auth ON chat.sender_id = auth.user_id WHERE id_room = ?",
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
};

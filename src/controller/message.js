const helper = require("../helper/response");
const {
  sendMessageModel,
  getMessageModel,
  searchMessageModel,
  countNotifModel,
  patchReadStatusModel,
} = require("../model/message");

module.exports = {
  sendMessage: async (req, res) => {
    try {
      const { id_room, message, sender_id, receiver_id } = req.body;
      const setData = {
        id_room,
        message,
        sender_id,
        receiver_id,
        created_at: new Date(),
      };
      const result = await sendMessageModel(setData);
      return helper.response(res, 200, `Let's send a message`, result);
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getMessage: async (req, res) => {
    try {
      const { id_room, receiver_id } = req.query;
      const result = await getMessageModel(id_room);
      await patchReadStatusModel(id_room, receiver_id);
      if (result.length > 0) {
        return helper.response(res, 200, "Success get Message", result);
      } else {
        return helper.response(
          res,
          400,
          "Message not found! let's send a message to your friend"
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  searchMessage: async (req, res) => {
    try {
      const { message, receiver_id } = req.body;
      const result = await searchMessageModel(message, receiver_id);
      if (result.length > 0) {
        return helper.response(res, 200, "Success search Message", result);
      } else {
        return helper.response(res, 400, `message: '${message}' not found !`);
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  countNotif: async (req, res) => {
    try {
      const { receiver_id, sender_id } = req.query;
      const result = await countNotifModel(receiver_id, sender_id);
      if (result[0].total === 0) {
        return helper.response(
          res,
          404,
          "There are no new notifications for you"
        );
      } else {
        return helper.response(res, 200, "You have new notification !", result);
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
};

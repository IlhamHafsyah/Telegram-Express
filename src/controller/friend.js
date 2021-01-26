const helper = require("../helper/response");
const {
  cekEmailModel,
  addFriendModel,
  getFriendListModel,
  deleteFriendModel,
} = require("../model/friend");

module.exports = {
  addFriend: async (req, res) => {
    try {
      // const { id } = req.params;
      const { user_id, friend_email } = req.body;
      const setData = {
        user_id,
        friend_email,
      };
      const checkingEmail = await cekEmailModel(friend_email);
      if (checkingEmail.length > 0) {
        const result = await addFriendModel(setData);
        return helper.response(
          res,
          200,
          `Success add Friend with email ${friend_email}`,
          result
        );
      } else {
        return helper.response(
          res,
          400,
          `User with email ${friend_email} not found !`,
          result
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getFriendList: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await getFriendListModel(id);
      if (result.length > 0) {
        return helper.response(
          res,
          200,
          `Success get friend list of user id : ${id}`,
          result
        );
      } else {
        return helper.response(
          res,
          400,
          `There is no friend for you, please add friend first !`
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 404, `Bad Request`, error);
    }
  },
  deleteFriend: async (req, res) => {
    try {
      const { user_id, friend_email } = req.query;
      console.log(user_id);
      console.log(friend_email);
      const result = await deleteFriendModel(user_id, friend_email);
      if (result.length == null) {
        return helper.response(
          res,
          200,
          `Success delete friend list of user email : ${friend_email}`
        );
      } else {
        return helper.response(
          res,
          400,
          `Friend with user email : ${friend_email} not found!`
        );
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 404, `Bad Request`, error);
    }
  },
};

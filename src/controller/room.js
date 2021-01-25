const helper = require("../helper/response");
const {
  checkingRoomModel,
  joinRoomModel,
  joinRoomModels,
  getRoomModel,
} = require("../model/room");

module.exports = {
  joinRoom: async (req, res) => {
    try {
      const { user_a, user_b } = req.body;
      function randomNumber(min, max) {
        const r = Math.random() * (max - min) + min;
        return Math.floor(r);
      }
      let randomId = randomNumber(0, 9999);
      const setData = {
        id_room: randomId,
        user_a,
        user_b,
        created_at: new Date(),
      };
      const setDatas = {
        id_room: randomId,
        user_a: req.body.user_b,
        user_b: req.body.user_a,
        created_at: new Date(),
      };
      const checkingRoom = await checkingRoomModel(user_a, user_b);
      if (checkingRoom.length > 0) {
        return helper.response(res, 400, "Room already created !");
      } else {
        const result = await joinRoomModel(setData);
        const results = await joinRoomModels(setDatas);
        console.log(results);
        return helper.response(res, 200, "Room created !", result);
      }
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad Request", error);
    }
  },
  getRoom: async (req, res) => {
    try {
      const { user_a } = req.query;
      const result = await getRoomModel(user_a);
      if (result.length > 0) {
        return helper.response(res, 200, "Success get room", result);
      } else {
        return helper.response(
          res,
          400,
          "Room not found !, please select room first"
        );
      }
    } catch (error) {
      return helper.response(res, 400, "Bad Request", error);
    }
  },
};

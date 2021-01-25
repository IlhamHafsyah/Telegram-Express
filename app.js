const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routerNavigation = require("./src/routesNavigation");
require("dotenv").config();

const socket = require("socket.io");

const app = express();
app.use(cors());

const http = require("http");
const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("connect");
  //global = ke semua user
  //private = ke 1 user
  //broadcast = ke banyak orang, tapi dipilih, dan kita tidak dapat pesannya
  //room = ruangan pesan yg bisa diakses user
  socket.on("globalMessage", (data) => {
    // console.log(data);
    io.emit("chatMessage", data);
  });
  socket.on("privateMessage", (data) => {
    socket.emit("chatMessage", data);
  });
  socket.on("broadcastMessage", (data) => {
    socket.broadcast.emit("chatMessage", data);
  });
  socket.on("joinRoom", (data) => {
    // console.log(data);
    socket.join(data.room);
    socket.broadcast.emit("chatMessage", {
      username: "BOT",
      message: `${data.username} Joined Chat !`,
    });
  });
  socket.on("roomMessage", (data) => {
    // console.log(data);
    io.to(data.room).emit("chatMessage", data);
  });
  socket.on("typing", (data) => {
    socket.broadcast.to(data.room).emit("typingMessage", data);
  });
  socket.on("changeRoom", (data) => {
    // console.log(data);
    socket.leave(data.oldroom);
    socket.broadcast.emit("chatMessage", {
      username: "BOT",
      message: `${data.username} left Chat !`,
    });
    socket.join(data.room);
  });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("upload"));

app.use("/", routerNavigation);

server.listen(process.env.PORT, () => {
  console.log(`Listening on Port ${process.env.PORT}`);
});

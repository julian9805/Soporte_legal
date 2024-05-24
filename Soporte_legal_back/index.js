const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const userRouter = require("./src/api/routes/user.routes");
const {connect} = require("./src/utils/db");

const PORT = process.env.PORT;
const server = express();
connect();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use("/users", userRouter);

server.listen(PORT, ()=> console.log(`escuchando en el puerto: http://localhost:${PORT}`) );


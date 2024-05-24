const express = require("express");
const { login, register, getUsers, getUserById, putUsers } = require("../controllers/user.controllers");
const userRouter = express.Router();


userRouter.post('/login', login);
userRouter.post('/register', register);
userRouter.get('/allusers', getUsers);
userRouter.get('/id', getUserById);
userRouter.put('/modify/:id', putUsers);

module.exports = userRouter;
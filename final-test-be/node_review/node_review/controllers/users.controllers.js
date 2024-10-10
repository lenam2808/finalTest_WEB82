import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { createUser, getUser } from "../models/users.models.js";
dotenv.config();
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await getUser({ username });
    if (user.length) throw new Error("User name is existed");
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    const newUser = {
      username,
      password: hash,
    };
    const createNewUser = await createUser(newUser);
    res.status(200).send({
      message: "Register successful",
      user: createNewUser,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

// const userAdmin = {
//   id: 1,
//   username: "Admin",
//   role: "ADMIN",
// };

export const login = async (req, res) => {
  const {username, password} = req.body;
  try {
    const listUser = await getUser();
  const crrUser = listUser.find((item) => item.username === username);
  const comparedPassword = bcrypt.compareSync(password, crrUser.password);
  if(!comparedPassword) {
    res.status(401).send({
      message: "Email or password is invalid!",
    });
  } else {
    const userAdmin = listUser.find((item) => item.username === "admin");
    // console.log(userAdmin)
    const token = jwt.sign(userAdmin.toJSON(), process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    // let tokenAuth = req.headers.authorization?.split(' ')[1] || ''
    // console.log(tokenAuth)
    res.status(200).send({
      data: token,
      message: "login successful",
      // tokenAuth
    });
  }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}

export const getAllUser = async (req, res) => {
  try {
    const listUser = await getUser();
    res.status(200).send({
      listUser,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

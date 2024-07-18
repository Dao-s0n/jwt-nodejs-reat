import mysql from "mysql2";
import bcrypt from "bcryptjs";
import bluebird from "bluebird";
import db from "../models/index";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});

const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  let hashPass = bcrypt.hashSync(password, salt);
  return hashPass;
};

const createNewUser = async (email, password, username) => {
  let hash = hashPassword(password);
  try {
    await db.User.create({
      username: username,
      password: hash,
      email: email,
    });
  } catch (e) {
    console.log(e);
  }
};

const getUserList = async () => {
  let users = [];
  users = await db.User.findAll();
  return users;
};

const deleteUser = async (id) => {
  await db.User.destroy({
    where: {
      id: id,
    },
  });
};

const getUserById = async (id) => {
  let users = {};
};

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
};

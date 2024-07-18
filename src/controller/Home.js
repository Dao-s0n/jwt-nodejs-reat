import userService from "../service/userService";

const home = (req, res) => {
  return res.render("Home.ejs");
};
const handleUserPage = async (req, res) => {
  const userList = await userService.getUserList();
  return res.render("User.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let userName = req.body.userName;

  userService.createNewUser(email, password, userName);

  return res.redirect("/user");
};
const handleDeleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  return res.redirect("/user");
};
const updateUser = async (req, res) => {
  let id = req.params.id;
  let user = await userService.getUserById(id);
  let userData = {};
  userData = user;
  return res.render("update-user.ejs");
};
module.exports = {
  home,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUser,
  updateUser,
};

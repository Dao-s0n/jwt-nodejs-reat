const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("jwt", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("ok");
  } catch (err) {
    console.log("err1", err);
  }
};
export default connection;

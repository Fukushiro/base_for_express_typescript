require("dotenv").config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "dev.sqlite3",
  },
};

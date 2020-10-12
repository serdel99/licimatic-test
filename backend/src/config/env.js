require("dotenv").config();

module.exports = {
  DB_CONNECT_STRING:
    process.env.DB_CONNECT_STRING || "mongodb://localhost:27017/myapp",
  PORT: process.env.PORT || 3000,
};

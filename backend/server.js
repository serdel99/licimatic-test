const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const debug = require("debug")("app");
const apiRoutes = require("./src/routes");
const { DB_CONNECT_STRING, PORT } = require("./src/config/env");

mongoose.connect(DB_CONNECT_STRING, {
  useNewUrlParser: "true",
});

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  debug("Mongoose is connected");
});

app.use(helmet());
app.use(bodyParser.json());
app.use("/v1/", apiRoutes);
app.listen(PORT, () => {
  debug("Start");
});

process.on("exit", function () {
  mongoose.connection.close();
});

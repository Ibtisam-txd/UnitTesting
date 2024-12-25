const express = require("express");
const cors = require("cors");

const ActivityRouter = require("./routes/activity.route");
const AuthRouter = require("./routes/auth.route");

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", ActivityRouter);

app.use("/api/auth", AuthRouter);

module.exports = app;

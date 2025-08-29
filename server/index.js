const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes/index");
require("dotenv").config();
const errorMiddleware = require("./middlewares/error-middleware");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "static")));
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    app.listen(PORT, () => console.log("Server started on PORT = " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();

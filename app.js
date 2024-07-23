const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const analyticsRouter = require("./routes/analytics");
const positionRouter = require("./routes/position");
const orderRouter = require("./routes/order");
const categoryRouter = require("./routes/category");

//to generate JS object from json
app.use(bodyParser.json());
// for encoding
app.use(bodyParser.urlencoded({ extended: true }));
// for logs
app.use(morgan('dev'))
// cors policy
app.use(cors())


app.get("/", (req, res) => {
  res.status(200).json({ message: "Okey" });
});

//auth calls
app.use("/api/auth", authRoutes);
//analytics calls
app.use("/api/analytics", analyticsRouter);
// position calls
app.use("/api/position", positionRouter);
// category calls
app.use("/api/order", orderRouter);
// order calls
app.use("/api/category", categoryRouter);

module.exports = app;

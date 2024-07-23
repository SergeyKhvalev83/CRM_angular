const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const analyticsRouter = require("./routes/analytics");
const positionRouter = require("./routes/position");
const orderRouter = require("./routes/order");
const categoryRouter = require("./routes/category");


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

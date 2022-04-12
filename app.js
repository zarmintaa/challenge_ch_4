const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const userRoutes = require("./routes/UserGame");
const userBiodataRoutes = require("./routes/UserGameBiodata");
const userHistoryRoutes = require("./routes/UserGameHistory");

const port = 6000;

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  next();
});

// /api/v1/user/...
app.use("/api/v1/user", userRoutes);
// /api/v1/user/biodata/...
app.use("/api/v1/user/biodata", userBiodataRoutes);
// /api/v1/user/history/...
app.use("/api/v1/user/history", userHistoryRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  res.status(error.status).json({ message: error.message });
});

app.listen(port, () => console.log(`App running on port ${port}`));

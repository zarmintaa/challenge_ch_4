const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const userRoutes = require("./routes/UserGame");
const userBiodataRoutes = require("./routes/UserGameBiodata");
const userHistoryRoutes = require("./routes/UserGameHistory");

const port = 4000;

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

// /api/v1/user/all
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to User Game API",
    endpoint: [
      "/api/v1/user/all",
      "/api/v1/user/:id",
      "/api/v1/user/create",
      "/api/v1/user/:id/update",
      "/api/v1/user/:id/delete",
      "/api/v1/user/biodata/all",
      "/api/v1/user/biodata/:id",
      "/api/v1/user/biodata/create",
      "/api/v1/user/biodata/:id/update",
      "/api/v1/user/biodata/:id/delete",
      "/api/v1/user/history/all",
      "/api/v1/user/history/:id",
      "/api/v1/user/history/create",
      "/api/v1/user/history/:id/update",
      "/api/v1/user/history/:id/delete",
    ],
  });
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/user/biodata", userBiodataRoutes);
app.use("/api/v1/user/history", userHistoryRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  res.status(error.status).json({ message: error.message });
});

app.listen(port, () => console.log(`App running on port ${port}`));

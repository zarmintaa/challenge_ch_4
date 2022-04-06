const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { user_game } = require("./models");
const { user_game_biodata } = require("./models");

const port = 3000;

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

app.get("/users", (req, res, next) => {
  user_game
    .findAll()
    .then((users) => {
      res.status(200).json({ message: "Success", users });
    })
    .catch((error) =>
      req.status(402).json({ message: "Error mengambil data user", error })
    );
});

app.post("/user", (req, res, next) => {
  user_game
    .create({
      email: req.body.email,
      password: req.body.password,
    })
    .then((user) => {
      res.status(201).json({ message: "Berhasil menambah user", user });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal menambah user", error })
    );
});

app.get("/user/:id", (req, res, next) => {
  user_game
    .findByPk(req.params.id)
    .then((user) => {
      res.status(200).json({ message: "Berhasil menambah user", user });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal mengambil user", error })
    );
});

app.put("/user/:id", (req, res, next) => {
  user_game
    .update(
      {
        email: req.body.email,
        passowrd: req.body.password,
      },
      { where: { id: req.params.id } }
    )
    .then((user) => {
      res.status(201).json({ message: "Berhasil mengupdate user", user });
    })
    .catch((error) => {
      res.status(401).json({ message: "Gagal mengupdate user", error });
    });
});

app.delete("/user/:id", (req, res, next) => {
  user_game
    .destroy({ where: { id: req.params.id } })
    .then((user) => {
      res.status(201).json({ message: "Sukses menghapus data", user });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal menghapus data", error })
    );
});

// user biodata

app.get("/biodata", (req, res, next) => {
  user_game_biodata
    .findAll()
    .then((user) => {
      res
        .status(200)
        .json({ message: "Berhasil mengambil biodata user", user });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal mengambil biodata user", error })
    );
});

app.get("/biodata/:id", (req, res, next) => {
  user_game_biodata
    .findByPk(req.params.id)
    .then((user) => {
      res
        .status(200)
        .json({ message: "Berhasil mengambil biodata user", user });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal mengambil biodata user", error })
    );
});

app.post("/biodata", (req, res, next) => {
  user_game_biodata
    .create({
      nama: req.body.nama,
      bio: req.body.bio,
      gender: req.body.gender,
    })
    .then((biodata) => {
      res
        .status(201)
        .json({ message: "Berhasil menambah biodata user", biodata });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal menambah biodata user", error })
    );
});

app.put("/biodata/:id", (req, res, next) => {
  user_game_biodata
    .update({
      nama: req.body.nama,
      bio: req.body.bio,
      gender: req.body.gender,
    })
    .then((biodata) => {
      res.status(201).json({
        message: "Success mengupdate biodata",
        biodata,
      });
    })
    .catch((error) =>
      res.status(401).json({ message: "Error mengupdate biodata", error })
    );
});

app.delete("/biodata/:id", (req, res, next) => {
  user_game_biodata
    .destroy({ where: { id: req.params.id } })
    .then((result) =>
      res.status(201).json({ message: "Berhasil menghapus data", result })
    )
    .catch((error) =>
      res.status(401).json({ message: "Gagal menghapus data", error })
    );
});

app.listen(port, () => console.log(`App running on port ${port}`));

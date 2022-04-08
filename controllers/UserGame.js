const { user_game } = require("../models");
const bycript = require("bcryptjs");

exports.getAllUserGame = (req, res, next) => {
  user_game
    .findAll()
    .then((users) => {
      res.status(200).json({ message: "Success", users });
    })
    .catch((error) =>
      req.status(402).json({ message: "Error mengambil data user", error })
    );
};

exports.createUser = (req, res, next) => {
  const { email, password } = req.body;
  bycript
    .hash(password, 12)
    .then((hashed) => {
      user_game.create({ email, password: hashed });
    })
    .then((result) => {
      res.status(201).json({ message: "Success", data: { email, password } });
    })
    .catch((error) =>
      res.status(402).json({ message: "Error create user game", error })
    );
};

exports.getSingleUser = (req, res, next) => {
  user_game
    .findByPk(req.params.id)
    .then((user) => {
      res.status(200).json({ message: "Berhasil mengambil user", user });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal mengambil user", error })
    );
};

exports.updateUser = (req, res, next) => {
  const { email, password } = req.body;
  bycript
    .hash(password, 12)
    .then((hashedPassword) => {
      user_game.update(
        { email, password: hashedPassword },
        { where: { id: req.params.id } }
      );
    })
    .then((result) => {
      res
        .status(201)
        .json({
          message: "Berhasil mengupdate user",
          data: { email, password },
        });
    })
    .catch((error) => {
      res.status(401).json({ message: "Gagal mengupdate user", error });
    });
};

exports.deleteUser = (req, res, next) => {
  user_game
    .destroy({ where: { id: req.params.id } })
    .then((user) => {
      res.status(201).json({ message: "Sukses menghapus data", user });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal menghapus data", error })
    );
};

const { user_game_history } = require("../models");

exports.getAllHistory = (req, res, next) => {
  user_game_history
    .findAll()
    .then((history) => {
      console.log(history);
      res
        .status(200)
        .json({ message: "Berhasil mengambil history user", history });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal mengambil history user", error })
    );
};

exports.getSingleHistory = (req, res, next) => {
  user_game_history
    .findByPk(req.params.id)
    .then((history) => {
      res
        .status(200)
        .json({ message: "Berhasil mengambil history user", history });
    })
    .catch((error) =>
      res.status(402).json({ message: "Gagal mengambil history user", error })
    );
};

exports.createHistory = (req, res, next) => {
  const { skor } = req.body;
  console.log({
    skor,
  });
  user_game_history
    .create({
      login,
      logout,
      skor,
    })
    .then((history) => {
      res
        .status(201)
        .json({ message: "Berhasil menambah history user", history });
    })
    .catch((error) =>
      res.status(401).json({ message: "Gagal menambah history user", error })
    );
};

exports.updateHistory = (req, res, next) => {
  const { skor } = req.body;
  user_game_history
    .update(
      {
        skor,
      },
      { where: { id: req.params.id } }
    )
    .then((biodata) => {
      res.status(201).json({
        message: "Success mengupdate biodata",
        biodata,
      });
    })
    .catch((error) =>
      res.status(401).json({ message: "Error mengupdate biodata", error })
    );
};

exports.deleteHistory = (req, res, next) => {
  user_game_history
    .destroy({ where: { id: req.params.id } })
    .then((result) =>
      res.status(201).json({ message: "Berhasil menghapus data", result })
    )
    .catch((error) =>
      res.status(401).json({ message: "Gagal menghapus data", error })
    );
};

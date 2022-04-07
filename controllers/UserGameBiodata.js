const { user_game_biodata } = require("../models");

exports.getAllBiodata = (req, res, next) => {
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
};

exports.createBiodata = (req, res, next) => {
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
};

exports.getSingleBiodata = (req, res, next) => {
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
};

exports.updateBiodata = (req, res, next) => {
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
};

exports.deleteBiodata = (req, res, next) => {
  user_game_biodata
    .destroy({ where: { id: req.params.id } })
    .then((result) =>
      res.status(201).json({ message: "Berhasil menghapus data", result })
    )
    .catch((error) =>
      res.status(401).json({ message: "Gagal menghapus data", error })
    );
};

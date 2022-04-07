const express = require("express");
const router = express.Router();

const UserGame = require("../controllers/UserGame");

router.get("/all", UserGame.getAllUserGame);

router.get("/:id", UserGame.getSingleUser);

router.post("/create", UserGame.createUser);

router.put("/:id", UserGame.updateUser);

router.delete("/:id", UserGame.deleteUser);

module.exports = router;

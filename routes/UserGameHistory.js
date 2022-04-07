const express = require("express");
const router = express.Router();

const HistoryController = require("../controllers/UserGameHistory");

router.get("/all", HistoryController.getAllHistory);

router.get("/:id", HistoryController.getSingleHistory);

router.post("/create", HistoryController.createHistory);

router.put("/:id", HistoryController.updateHistory);

router.delete("/:id", HistoryController.deleteHistory);

module.exports = router;

const express = require("express");
const router = express.Router();

const BiodataController = require("../controllers/UserGameBiodata");

router.get("/all", BiodataController.getAllBiodata);

router.get("/:id", BiodataController.getSingleBiodata);

router.post("/create", BiodataController.createBiodata);

router.put("/:id", BiodataController.updateBiodata);

router.delete("/:id", BiodataController.deleteBiodata);

module.exports = router;

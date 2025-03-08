const express = require("express");
const foodScanner = require("../controllers/scannerControllers");
const getFoodInfo = require("../controllers/scannerControllers");
const router = express.Router();

router.get("/:barcode", getFoodInfo);

module.exports = router;
const express = require("express");
const { calculateBMI } = require("../../backend/controllers/calculatorController");
const router = express.Router();

router.post("/bmi", calculateBMI);

module.exports = router;
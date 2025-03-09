const express = require("express");
const setMealPlan = require("../controllers/mealControllers");
const router = express.Router();


router.post("/meal-plan", setMealPlan);


module.exports = router;
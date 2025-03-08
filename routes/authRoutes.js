const express = require("express");
const {userRegister, setUserProvince, setUserName, setUserWeightGoal, setUserWeeklyGoal, setUserDiet, setUserActLevel, setUserGenderAndBirth, setUserMeasurements, getUserTerms, getUserProfile} = require("../controllers/authControllers");

const router = express.Router();

router.post("/login", (req, res) =>{
    console.log("User is logging in...")
});
router.post("/register", userRegister);
router.patch("/register/name/:id", setUserName);
router.get("/profile/:id", getUserProfile);
router.patch("/register/province/:id", setUserProvince);
router.patch("/register/weightGoal/:id", setUserWeightGoal);
router.patch("/register/weeklyGoal/:id", setUserWeeklyGoal);
router.patch("/register/diet/:id", setUserDiet);
router.patch("/register/actLevel/:id", setUserActLevel);
router.patch("/register/gender&birth/:id", setUserGenderAndBirth);
router.patch("/register/measurements/:id", setUserMeasurements);
router.patch("/register/terms/:id", getUserTerms);

module.exports = router;
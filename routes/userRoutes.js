const express = require("express");
const {getUserProfile} = require("../controllers/userControllers");
const router = express.Router();

router.get("/profile/:id", getUserProfile);
module.exports = router;
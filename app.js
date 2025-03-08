const express = require("express");
const connectionDb = require("./config/dbConnection");
const app = express();
require("dotenv").config();
const PORT = 5002;
connectionDb();
app.use(express.json());
//User data's
// app.use("/api/user");
// //Scanner
app.use("/api/scanner", require("./routes/scannerRoutes"));
// //Calculator Feature
app.use("/api/calculator", require("./routes/calculatorRoutes"));
//User Authentication 
app.use("/api/auth", require("./routes/authRoutes"));
// //Meal Planner
// app.use("/api/meals");

app.listen(PORT, ()=> console.log(`Port in running on port ${PORT}`));

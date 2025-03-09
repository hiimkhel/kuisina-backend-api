const mongoose = require("mongoose");

//Schema for meals 
const mealSchema = new mongoose.Schema({
    name: String,
    calories: Number,
    imageUrl: String
});

//Schema for user's meal for each day of the week
const dayMealSchema = new mongoose.Schema({
    day: String, //Day of the Week
    breakfast:mealSchema,
    lunch: mealSchema,
    dinner: mealSchema
});
//Schema for each user's meal plan
const mealPlanSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, ref:  "User", required: true
    },
    meals: [dayMealSchema]
});


module.exports = mongoose.model("MealPlan", mealPlanSchema);


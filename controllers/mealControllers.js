const MealPlanModel = require("../models/mealPlanModel");

const setMealPlan = async (req, res) =>{
    const {userId, day, mealType, meal} = req.body;

    try{
        //variable for mealPlanSchema
        let mealPlan = await MealPlanModel.findOne({user: userId});

        if(!mealPlan){
            mealPlan = new MealPlanModel({user: userId, meals: []});
        }
        //Check if the day user wants to input the meal is already have value
        let dayMeal = mealPlan.meals.find(m => m.day === day);
        //if the day has no value, create an entry
        if(!dayMeal){
            dayMeal = {day, breakfast: null,lunch: null, dinner: null };
            mealPlan.meals.push(dayMeal);
        }

         // **Fix: Update the mealPlan.meals array correctly**
        mealPlan.meals = mealPlan.meals.map(m =>
            m.day === day ? { ...m, [mealType]: meal } : m
        );
        await mealPlan.save();
        res.status(200).json(mealPlan);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

module.exports = setMealPlan;
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String, 
        default: null
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    province:{
        type: String,
        default: null
    },
    weightGoal:{
        type: String,
        default: null
    },
    weeklyGoal:{
        type: Number,
        default: null
    },
    dietModification:{
        type: String,
        default: null
    },
    activityLevel:{
        type: String,
        default: null
    },
    gender: { 
        type: String, enum: ["Male", "Female", "Other"],
        default: null
    },
    dateOfBirth: { // Stored in ISO format
         type: Date, 
         default: null 
    }, 
    age:{
        type: Number,
        default: null
    },
    weight:{
        type: Number, //in kg
        default: null
    },
    height:{
        type: String,  //in cm
        default: null
    },
    dataConsent: {
         type: Boolean,  // User agrees to data collection
         default: null
    }, 
    mealPlans :[{
        type:mongoose.Schema.Types.ObjectId,
        ref: "MealPlan" 
    }]
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);
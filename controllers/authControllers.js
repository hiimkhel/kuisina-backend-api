const User = require("../models/userModel");
const bcrypt = require("bcryptjs");


const userRegister = async (req, res) =>{
    const { email, password} = req.body;
    
    if( !email || !password) return res.status(400).json({message: "All fields are mandatory!"});
    const userAvailable = await User.findOne({email});
    if(userAvailable) return res.status(400).json({message: "User is already registered!"});
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password: ", hashedPassword);

        const newUser = await User.create({
            email,
            password
        });
        res.status(201).json(newUser);
    }
    catch(err){
        req.status(400).json({message: err.message});
    }
};
const setUserName = async (req,res) =>{
    const {name} = req.body;
    try{
        if(!name)
            return res.status(400).json({message: "Field required!"});
        await User.findByIdAndUpdate(req.params.id,{name});

        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};




const setUserProvince = async (req,res) =>{
    const {province} = req.body;
    try{
        if(!province)
            return res.status(400).json({message: "Field required!"});
        await User.findByIdAndUpdate(req.params.id,{province});

        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};
const setUserWeightGoal = async (req,res) =>{
    const {weightGoal} = req.body;
    try{
        if(!weightGoal)
            return res.status(400).json({message: "Field required!"});
        await User.findByIdAndUpdate(req.params.id,{weightGoal});

        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};
const setUserWeeklyGoal = async (req,res) =>{
    const {weeklyGoal} = req.body;
    try{
        if(!weeklyGoal)
            return res.status(400).json({message: "Field required!"});
        await User.findByIdAndUpdate(req.params.id,{weeklyGoal});

        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};

const setUserDiet = async (req,res) =>{
    const {dietModification} = req.body;
    try{
        if(!dietModification)
            return res.status(400).json({message: "Field required!"});
        await User.findByIdAndUpdate(req.params.id,{dietModification});

        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};

const setUserActLevel = async (req,res) =>{
    const {activityLevel} = req.body;
    try{
        if(!activityLevel)
            return res.status(400).json({message: "Field required!"});
        await User.findByIdAndUpdate(req.params.id,{activityLevel});

        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};
const setUserGenderAndBirth = async (req,res) =>{
    const {gender, dateOfBirth} = req.body;
    try{
        if(!gender || !dateOfBirth)
            return res.status(400).json({message: "Field required!"});
        await User.findByIdAndUpdate(req.params.id,{gender, dateOfBirth});

        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};

const setUserMeasurements = async (req,res) =>{
    const {height, weight} = req.body;
    try{
        if(!height || !weight)
            return res.status(400).json({message: "Field required!"});
        await User.findByIdAndUpdate(req.params.id,{height, weight});

        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};


const getUserTerms = async (req,res) =>{
    const {dataConsent} = req.body;
    try{
        if(!dataConsent)
            return res.status(400).json({message: "Field required!"});
        await User.findByIdAndUpdate(req.params.id,{dataConsent});

        res.status(200).json(req.body);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};





module.exports = {userRegister, setUserProvince, setUserName,
    setUserWeightGoal, setUserWeeklyGoal, setUserActLevel,
    setUserDiet, setUserActLevel, setUserGenderAndBirth, setUserMeasurements,
    getUserTerms
};
const calculateBmi = async (req, res) => {
    const { weight, height } = req.body;

    if (!weight || !height) {
        return res.status(400).json({ message: "All fields are required!" });
    }
    console.error("error to")
    const heightInMeters = Number(height) / 100; // Convert height from cm to meters
    console.log(`Converted height to meters: ${heightInMeters}`);

    const bmi = Number((weight / (heightInMeters ** 2)).toFixed(2)); // Correct BMI formula
    console.log(`Calculated BMI: ${bmi}`);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    res.status(200).json({ bmi, category });
};

module.exports = calculateBmi;

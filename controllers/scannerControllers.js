const axios = require("axios");

const foodScanner = async(req, res) =>{
    try{
    const {barcode} = req.params;
    const apiUrl = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;

    const response = await axios.get(apiUrl);

    const product = response.data.product;

    if(!product) {return res.status(400).json({message: "Product not found!"});}
    
        const foodData = {
            name: product.product_name || "Unknown",
            calories: product.nutriments?.energy_kcal || "N/A",
            protein: product.nutriments?.proteins || "N/A",
            fat: product.nutriments?.fat || "N/A",
            carbohydrates: product.nutriments?.carbohydrates || "N/A",
            image: product.image_url || null
        }
        res.json(foodData);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
    

}
module.exports = foodScanner;
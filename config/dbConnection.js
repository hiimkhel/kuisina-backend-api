const mongoose = require("mongoose");

const connectionDb = async (err) =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        )
    }catch(err){
        process.exit(1);
        console.log(err);
    }
    
}
module.exports = connectionDb;
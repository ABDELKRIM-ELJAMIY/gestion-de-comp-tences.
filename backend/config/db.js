const mongoose = require('mongoose')
require('dotenv').config();
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`data base connected en ${process.env.MONGO_URL}`)
    }
    catch (error) {
        console.log("err de la conexion de data base ")
        
    }
}
module.exports = connectDB;
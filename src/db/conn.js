require('dotenv').config()
const mongoose = require("mongoose")

async function main(params) {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected!")
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
module.exports = main



const mongoose = require("mongoose")

async function main(params) {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(
            "mongodb+srv://Cickruss:7JeuCcZIt2BT7J4f@cluster0.zie2z5d.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("Database connected!")
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}
module.exports = main



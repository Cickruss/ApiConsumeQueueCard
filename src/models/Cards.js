const mongoose = require('mongoose')

const { Schema } = mongoose


const cardSchema = new Schema({
    agency: {
        type: Number,
    },
    account: {
        type: Number,
    },
    cpf: {
        type: Number,
    },
    dateOfBirth: {
        type: Date,
    },
    fullName: {
        type: String,
    },
    nameForCard: {
        type: String,
    },
    flag: {
        type: String,
    },
    type: {
        type: String,
    },
    expirationDate: {
        type: Number,
    }

}, { timestamps: true })

const Card = mongoose.model("Card", cardSchema)
module.exports = { Card, cardSchema }
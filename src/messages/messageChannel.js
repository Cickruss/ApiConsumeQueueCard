require('dotenv').config()
const {connect} = require('amqplib')
const { Card: CardModel } = require('../models/Cards')

const conn = require("../db/conn")
conn()

const createMessageChannel = async () => {

    try {
        const connection = await connect(process.env.AMQP_SERVER)
        console.log("Rabbit Connected");
        const channel = await connection.createChannel()
        await channel.assertQueue(process.env.QUEUE_NAME)
        console.log("Queue created");
        
        channel.consume(process.env.QUEUE_NAME, async msg => {
            const inviteObj = JSON.parse(msg.content.toString())
            console.log('Message received')
            console.log(inviteObj)

            const response = await CardModel.create(inviteObj)
            console.log("Json send to Database!");
    
        })

    } catch (error) {
        console.log('Error while trying to connect to RabbitMQ')
        console.log(error)
        return null
    }
}



module.exports = createMessageChannel
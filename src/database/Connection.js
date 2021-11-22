const mongoose = require('mongoose')
require('dotenv')
const mongoURL = process.env.MONGODB_URI
async function connect() {
    return mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Conected to MongoDB Atlas")
    }).catch((err) => {
        console.log(`Error connecting with mongoDB: ${err}`)
    })
}

module.exports = connect;
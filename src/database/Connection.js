const mongoose = require('mongoose');
require("dotenv").config();



class Connection {
    constructor() {
        this.dataBaseConnectionMongoDB();
    }

    dataBaseConnectionMongoDB() {
      this.mongoDBConnection = mongoose.connect(process.env.MONGODB_URI, { 
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
      })
      .then(() =>{
          console.log('Conected to MongoDB Atlas');
      })
      .catch((error) =>{
          console.log(`Error connecting with mongoDB: ${error}`);
      })
    }


}
module.exports = new Connection();
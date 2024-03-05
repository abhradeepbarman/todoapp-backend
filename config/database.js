const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful"))
    .catch((error) => {
        console.log("DB connection issue")
        console.error(error.message);
        
        //What is this  --> abnormal termination of program
        process.exit(1)
    })
}

module.exports = dbConnect;
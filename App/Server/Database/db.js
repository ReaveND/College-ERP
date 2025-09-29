const mongoose = require('mongoose');

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database conneced successfully!!");
    } catch (error) {
        console.log("Error while connecting to Database", error);
        process.exit(1);
    }
}

module.exports = Connection;
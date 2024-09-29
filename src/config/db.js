const mongoose = require("mongoose");

const mongodbUrl = "mongodb+srv://vermasaiyam9:p1MiV0ZnPDmthLm9@cluster0.isovh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
    return mongoose.connect(mongodbUrl);
}

module.exports = connectDB;
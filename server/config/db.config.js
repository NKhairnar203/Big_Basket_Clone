const mongoose = require("mongoose");

const DbUrl = process.env.MONGO_URI;
const connection = mongoose.connect(DbUrl);
 
module.exports = connection;
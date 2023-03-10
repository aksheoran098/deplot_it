const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDatabase = async () => {
    try {
      const conn = await mongoose.connect(process.env.DB_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

module.exports = connectDatabase;
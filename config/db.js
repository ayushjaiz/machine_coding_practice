const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected successfully");
  } catch (e) {
    console.log("DB connection error:", e);
  }
};

module.exports = {
  connectToDb,
};

const mongoose = require("mongoose");

module.exports = () => {
  const DB = "mongodb://127.0.0.1:27017/Blogs"; // Use the correct connection string

  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(DB, connectionParams); // Use the DB variable here
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  }
};

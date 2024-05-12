const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log(`MongoDB connected at ${mongoURI}`))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

mongoose.connection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection is disconnected");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB has reconnected");
});

process.on("SIGINT", function () {
  mongoose.connection.close(() => {
    console.log("MongoDB connection disconnected through app termination");
    process.exit(0);
  });
});

module.exports = mongoose.connection;

import mongoose from "mongoose";
import config from "./config";

mongoose.connection.on("disconnect", () => {
  const errorMessage = "MongoDB is disconnected";
  console.log(errorMessage);
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB is reconnected");
});

const connectWithRetry = () => {
  return mongoose
    .connect(config.MONGO_DB)
    .then(() => {
      console.log("DB connected");
    })
    .catch(async (err) => {
      await mongoose.disconnect();
      console.log(`DB Connection Error: ${err.message}`);
      setTimeout(connectWithRetry, 5000);
    });
};

export default connectWithRetry;
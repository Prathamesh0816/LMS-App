import mongoose from "mongoose";

//Connect To The MongoDB Database

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Connected To Database")
  )
  await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
};
export default connectDB
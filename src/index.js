// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/index.js";

// import express from "express";
// const app = express()(
//   // professional way to connect database (using iffe)

//   async () => {
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.on("error", (error) => {
//         console.log("ERRR:", error);
//         throw error;
//       });
//       app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//       });
//     } catch (error) {
//       console.error("ERROR", error);
//       throw err;
//     }
//   }
// )();

connectDB();

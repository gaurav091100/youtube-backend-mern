import 'dotenv/config';
import connectDB from './db/index.js';
import express from "express";

const app = express();
const PORT = process.env.PORT || 8000

connectDB().then(() => {
  app.on("error", (error) => {
    console.log("ERROR ", error);
    throw error;
  })
  app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT ${PORT}`)
  })
}).catch((error) => {
  console.error(`MONGO DB CONNECTION FAILED !! ${error}`);
  throw error;
})


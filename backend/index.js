import { config } from "dotenv";
import express, { json } from "express";
import { connect } from "mongoose";

config();

const app = express();
app.use(json());

connect(process.env.MONGODB_URI)
.then((result)=>console.log("connected to mongoDB"))
.catch((error)=>console.log(`failed to connect to mongoDB due ${error}`))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`the server is active at ${PORT}`)
})


const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
const dbConnect=require("../emicalback/config/db")
const userRouter=require("./src/Users/user.router")
const emiRouter=require("./src/EmiCalculate/emi.router")
require('dotenv').config();

const app=express();

const port=process.env.PORT || 8080
const Database=process.env.DATABASE

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/user",userRouter)
app.use("/calculateEMI",emiRouter)


app.listen(port,async ()=>{
    await dbConnect();
})

const express=require('express')
const dotenv=require("dotenv")
dotenv.config({ path: './config.env' })
const app=express();
const coursedetails=require("./router/CourseDetails")
const courselist=require("./router/CourseSmall")
require("./db/conn")
app.get("/",async(req,res)=>{
    res.status(200).json({
        message:"Welcome Shukla Boi"
    })
})

app.use('/v0',coursedetails)
app.use("/v0",courselist)

app.listen(3000,()=>{
    console.log("App runing at port 30000")
})
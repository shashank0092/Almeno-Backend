const express=require('express')
const dotenv=require("dotenv")
const cors=require("cors")


dotenv.config({ path: './config.env' })


const app=express();
app.use(express.json())
app.use(cors({
    origin:'*'
}))


const coursedetails=require("./router/CourseDetails")
const courselist=require("./router/CourseSmall")
const createstudent=require("./router/createStudent")
const enrollcourse=require("./router/EnrollCourse")

require("./db/conn")


app.get("/",async(req,res)=>{
    res.status(200).json({
        message:"Welcome Shukla Boi"
    })
})

app.use('/v0',coursedetails)
app.use("/v0",courselist)
app.use("/v0",createstudent,enrollcourse)


app.listen(3000,()=>{
    console.log("App runing at port 30000")
})
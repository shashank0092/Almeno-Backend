const express = require("express")
const courseinfo = require("../models/coursedetails")
const router = express.Router()
const bodyParser = require('body-parser');
const student = require("../middleware/Student")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.post("/searchcourse", student, async (req, res) => {

    const{courseName,instructorName}=req.body;

    if(courseName==null ||courseName==undefined || instructorName==null||instructorName==undefined){
        return res.json({message:"Please Enter Coursename or Instructor Name"}).status(201)
    }

    try {


        if(courseName==""){
            const serchResult=await courseinfo.find({"instructor":RegExp(instructorName,"i")})
            return res.json({data:serchResult,message:"Search Sucessfull"}).status(200)
        }
        else{
            const serchResult=await courseinfo.find({"name":RegExp(courseName,"i")})
            return res.json({data:serchResult,message:"Search Sucessfull"}).status(200)
        }

        
            
        
    }
    catch (err) {
        console.log("Error while fetching dummy data->", err)
    }
})
module.exports = router;
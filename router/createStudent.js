const express=require("express")
const studnetdetails=require("../models/studentdetails")
const router=express.Router()
const bodyParser = require('body-parser');
const student=require("../middleware/Student")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.post("/createstudent",student,async(req,res)=>{

    const {name,email,picture}=req.body;
    
   
    try{
        
        
        const student=await studnetdetails.create({name,email,picture});
        
        if(!student){
            res.status(204).json({message:"Student data not stored"})
        }
        else{
            res.status(200).json({message:"Stundet Data Stored Succesfully",data:student})
        }
    }
    catch(err){
        console.log("Error while fetching dummy data->",err)
    }
})
module.exports = router;
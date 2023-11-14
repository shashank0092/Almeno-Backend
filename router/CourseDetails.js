const express=require("express")
const courseinfo=require("../models/coursedetails")
const router=express.Router()
const bodyParser = require('body-parser');
const student=require("../middleware/Student")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get("/courseinfo",student,async(req,res)=>{

    const {id}=req.query
   
    try{
        
     
        const coursedeatils=await courseinfo.find({"cid":id});
      
        if(!coursedeatils){
            res.status(204).json({message:"Course Details Data Is Not Avliable Now"})
        }
        else{
            res.status(200).json({message:"Course Details",data:coursedeatils})
        }
    }
    catch(err){
        console.log("Error while fetching dummy data->",err)
    }
})
module.exports = router;
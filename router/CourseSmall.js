const express=require("express")
const courseinfo=require("../models/coursedetails")
const router=express.Router()
const bodyParser = require('body-parser');
const student=require("../middleware/Student")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get("/courselist",student,async(req,res)=>{

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;
   
    try{
        
     
        const courselist=await courseinfo.find({},{name:1,instructor:1,description:1,thumbnail:1,cid:1}).skip(skip).limit(limit)
       


        if(!courselist){
            res.status(204).json({message:"courselist Data Is Not Avliable Now"})
        }
        else{
            res.status(200).json({message:"courselist",data:courselist})
        }
    }
    catch(err){
        console.log("Error while fetching dummy data->",err)
    }
})
module.exports = router;
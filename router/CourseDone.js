const express = require("express")
const coursedetails = require("../models/coursedetails")
const router = express.Router()
const bodyParser = require('body-parser');
const student = require("../middleware/Student")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.post("/coursedone", student, async (req, res) => {

    const { sid,cid } = req.body;

    if (sid == null || sid == undefined) {
        return res.json({ message: "Please Give Student Id" })
    }

    if(cid==null||cid==undefined){
        return res.json({message:'Please Give Student ID'})
    }


    try {


        const completedcourse = await coursedetails.findOneAndUpdate({"cid":cid,"studnets.id":sid},{$set:{"studnets.$.completed":true}},{new:true});
        
        if(completedcourse){
            res.status(200).json({message:"Succesfully Completed Course",data:completedcourse})
        }
        else{
            res.status(201).json({message:"You Are not Enrolled In this course"})
        }


    }
    catch (err) {
        console.log("Error while fetching dummy data->", err)
    }
})
module.exports = router;
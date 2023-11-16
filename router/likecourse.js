const express = require("express")
const courseinfo = require("../models/coursedetails")
const router = express.Router()
const bodyParser = require('body-parser');
const student = require("../middleware/Student")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.post("/likecourse", student, async (req, res) => {

    const { cid } = req.body
    
    if(cid==null||cid==undefined){
        return res.json({message:"Please give a vaild course id"})
    }
    try {

        
       
            const coursedeatils = await courseinfo.findOneAndUpdate({ "cid": cid },{$inc:{"likes":1}},{new:true});


            if (!coursedeatils) {
                res.status(204).json({ message: "Course Details Data Is Not Avliable Now" })
            }
            else {
                res.status(200).json({ message: "Course Details", data: coursedeatils })
            }
        
    }
    catch (err) {
        console.log("Error while fetching dummy data->", err)
    }
})
module.exports = router;
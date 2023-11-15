const express = require("express")
const courseinfo = require("../models/coursedetails")
const router = express.Router()
const bodyParser = require('body-parser');
const student = require("../middleware/Student")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get("/courseinfo", student, async (req, res) => {

    const { cid } = req.query
    console.log(cid, "this is id")
    try {

        if (cid == undefined) {
            return res.status(204).json({ message: "Please Provide Id of course" })
        }

        else {
            const coursedeatils = await courseinfo.find({ "cid": cid });


            if (!coursedeatils) {
                res.status(204).json({ message: "Course Details Data Is Not Avliable Now" })
            }
            else {
                res.status(200).json({ message: "Course Details", data: coursedeatils })
            }
        }
    }
    catch (err) {
        console.log("Error while fetching dummy data->", err)
    }
})
module.exports = router;
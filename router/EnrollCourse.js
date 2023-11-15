const express = require("express")
const coursedetails = require("../models/coursedetails")
const router = express.Router()
const bodyParser = require('body-parser');
const student = require("../middleware/Student")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.post("/enrollcourse", student, async (req, res) => {

    const { sid, cid } = req.body;

    try {


        const student = await coursedetails.find({ "cid": cid });
        console.log(student[0]?.studnets)

        var enrolled = 0;
        student[0]?.studnets.map((student) => {
            if (student.id == sid) {
                enrolled = 1;
                return;
            }
        })

        console.log(enrolled, "this is value booi")

        if (enrolled) {
            res.json({ message: "You Already Enrolled This course" })
        }
        else {
            const newStudent = {
                id: sid,
            }
            const updated = await coursedetails.updateOne({ "cid": cid }, { $push: { studnets: newStudent } })
            console.log(updated, "this is updated data")
            res.json({ message: "Succesfully Enrolled In Course", data: updated })
        }


    }
    catch (err) {
        console.log("Error while fetching dummy data->", err)
    }
})
module.exports = router;
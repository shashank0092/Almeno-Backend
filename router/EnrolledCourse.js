const express = require("express")
const coursedetails = require("../models/coursedetails")
const router = express.Router()
const bodyParser = require('body-parser');
const student = require("../middleware/Student")

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get("/enrolledcourse", student, async (req, res) => {

    const { sid } = req.body;

    if (sid == null || sid == undefined) {
        return res.json({ message: "Please Give Student Id" })
    }

    try {


        const courses = await coursedetails.find({});
        const enrolledCourse = courses.flatMap((course) => {


            return course?.studnets?.map((studentList) => {
                if (sid == studentList?.id) {
                    return course;
                }
                return null
            })
        }).filter((course) => course !== null)

        return res.status(200).json({
            message: "Find Enrolled Courses",
            data: enrolledCourse
        })


    }
    catch (err) {
        console.log("Error while fetching dummy data->", err)
    }
})
module.exports = router;
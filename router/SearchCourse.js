

router.use(bodyParser.json())


router.get("/searchcourse", student, async (req, res) => {

    const {coursename,instructorname} = req.query;

    
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
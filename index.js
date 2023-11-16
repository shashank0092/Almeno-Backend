const express = require('express')
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
const Pusher = require('pusher');

const pusher = new Pusher({
    appId: '1709429',
    key: '7c2a444602df56ebc9c8',
    secret: '9fbfaad52444873a6950',
    cluster: 'ap2',
    encrypted: true,
});

dotenv.config({ path: './config.env' })


const app = express();
app.use(express.json())
app.use(cors({
    origin: '*'
}))



const coursedetails = require("./router/CourseDetails")
const courselist = require("./router/CourseSmall")
const createstudent = require("./router/createStudent")
const enrollcourse = require("./router/EnrollCourse")
const enrolledcourses = require("./router/EnrolledCourse")
const coursedone = require("./router/CourseDone")
const likecourse = require("./router/likecourse")

require("./db/conn")

const db = mongoose.connection
db.once("open", () => {
    console.log("SHUKLA BOI")
    const courseCollection = db.collection('coursedeatils')
    const changeStream = courseCollection.watch()

    changeStream.on("change", async(change) => {
        

        if (change.operationType == "update") {
            const courseId = change.documentKey._id;
            console.log(courseId, "this is changed course id");
            const updatedDocument = await courseCollection.findOne({ _id: courseId });

            // Access the cid field from the document
            const cid = updatedDocument?.cid;
            console.log(cid, "this is cid");
            
            const updatedFields = change.updateDescription.updatedFields;
            console.log(updatedFields,"this is shukla boi")
            pusher.trigger('incrementlike', 'incremented',
                {
                    message:updatedFields,
                    cid:cid
                }
            )

        }
        else{
            console.log('Error Trigring In Pusher')
        }
    })
})

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Welcome Shukla Boi"
    })
})

app.use('/v0', coursedetails)
app.use("/v0", courselist)
app.use("/v0", createstudent, enrollcourse)
app.use("/v0", enrolledcourses)
app.use("/v0", coursedone)
app.use("/v0", likecourse)



app.listen(3000, () => {
    console.log('Node server running on port 3000');
});




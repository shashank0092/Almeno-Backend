const mongoose=require("mongoose")

const CourseDetailSchema=new mongoose.Schema({
    cid:{
        type:String,
        
    },
    name:{
        type:String
    },
    instructor:{
        type:String
    },
    description:{
        type:String
    },
    enrollmentStatus:{
        type:String
    },
    thumbnail:{
        type:String
    },
    duration:{
        type:String
    },
    schedule:{
        type:String
    },
    location:{
        type:String
    },
    prerequisites:{
        type:[String]
    },
    syllabus: [{
        week: {
            type: Number,
            required: true,
        },
        topic: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    }],
    studnets:[{
        id:{
            type:String
        },
        progress:{
            type:Number,
            default:0
        },
        completed:{
            type:Boolean,
            default:false
        }
    }],
    likes:{
        type:String
    }
})

const CourseDetails=mongoose.model('coursedeatils',CourseDetailSchema)
module.exports=CourseDetails;
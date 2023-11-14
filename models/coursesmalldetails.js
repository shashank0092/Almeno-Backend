const mongoose=require("mongoose")

const CourseSmallSchema=new mongoose.Schema({
    
    name:{
        type:String
    },
    instructor:{
        type:String
    },
    description:{
        type:String
    },

    thumbnail:{
        type:String
    },

    
})

const CourseSmall=mongoose.model('coursesmalldetails',CourseSmallSchema)
module.exports=CourseSmall;
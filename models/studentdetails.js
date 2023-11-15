const mongoose=require("mongoose")

const StudentDetailsSchema=new mongoose.Schema({
    
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    picture:{
        type:String
    },

    

    
})

const StudentDetails=mongoose.model('studnetdetails',StudentDetailsSchema)
module.exports=StudentDetails;
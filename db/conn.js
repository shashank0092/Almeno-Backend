const mongoose=require("mongoose")


 const connect=async()=>{

   const DB=process.env.DB
    try{
        mongoose.connect(DB)
        console.log("connected to datbase sucessfully")
      

    }
    catch(err){
        console.log("During Connection got an error->",err)
    }
}

connect()
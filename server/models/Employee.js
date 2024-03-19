
const mongoose=require("mongoose")

const EmployeeSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const mongooseModel=mongoose.model("employess",EmployeeSchema)

module.exports=mongooseModel
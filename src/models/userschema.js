
const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
           if(!validator.isEmail(value)){
            throw new Error("Invalid E-mail")
           } 
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    feedback:{
        type:String,
        required:false,
        minLength:3
    }



})
const User = mongoose.model("User",userSchema)
module.exports =  User

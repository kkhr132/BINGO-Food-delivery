import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    mobile:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["user","owner","deliveryboy"],
        required:true
    },
    resetOtp: {
        type: String
    },
    otpExpires: {
        type: Number
    },
    isOtpVerified: {
        type: Boolean,
        default: false
    }
    
},{timestamps:true})

const User=mongoose.model("User",userSchema)
export default User;
import mongoose from "mongoose"
const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6,
        max:32,

    },
    email:{
        type:String,
        required:true,
        unique:true,


    },
    password:{
        type:String,
        required:true,
        unique:true,

    },
    date:{
        type:Date,
        default:Date.now,
    }
})
export default mongoose.model("/user",userSchema);
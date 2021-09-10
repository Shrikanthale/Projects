import Mongoose  from "mongoose";
const Schema = Mongoose.Schema

const studentSchema = new Schema({
    Name:{
        type:String,
        require:true
    },
    Lastname:{
        type:String,
        require:true
    }
},{timestamps:true})

export const Student = Mongoose.model('student',studentSchema)
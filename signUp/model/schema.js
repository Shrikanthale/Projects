import Mongoose from 'mongoose'
const Schema = Mongoose.Schema

const userSchema = new Schema({
    userId:{
        type :String,
        require:true
    },

    password : {
        type : String,
        require:true
    }

},{timestamps:true})

export const User = Mongoose.model('user',userSchema)
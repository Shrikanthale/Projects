import mongoose from 'mongoose'
const Schema = mongoose.Schema

const foodSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    // image:{
    //     type:String,
    //     require:true 
    // },
    price:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
},{timestamps:true})

export const Food = mongoose.model('food',foodSchema)
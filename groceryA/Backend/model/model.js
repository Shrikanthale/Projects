const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PostSchema=new Schema({
    itemName:{
        type:String,
        require:true
    },
    isPurchased:{ 
        type:String,
        require:true
    },
})

module.exports={
    Post:mongoose.model("grocery",PostSchema),
}
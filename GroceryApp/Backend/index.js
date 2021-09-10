const express = require("express");
const mongoose = require('mongoose');
const bodyparser= require('body-parser');
const cors=require('cors');


const app=express();
app.use(bodyparser.json());
app.use(cors());



mongoose.connect('mongodb+srv://kanthale:kanthale1@cluster0.pcywb.mongodb.net/groceryApp?retryWrites=true&w=majority')

app.get('/',(req,res)=>{
    res.send({project:"Grocery App"});
});

app.use('/grocery',require("./routes/route"))

const PORT=process.env.PORT || 8008;
app.listen(PORT); 
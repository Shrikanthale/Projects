import express from 'express'
import bodyParser from 'body-parser'
import foodRoutder from "./routes/food.js"
import mongoose from 'mongoose'

var dbURL = 'mongodb+srv://kanthale:kanthale1@cluster0.pcywb.mongodb.net/FoodDelivery?retryWrites=true&w=majority'
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})

.then(
    (result)=>{
        console.log("conecting to database")
        server.listen(PORT)
        console.log("server startes")
    }
)
.catch(
    (err)=>{
        console.log(err)
    }
)

const server = express()
const PORT = 3001

server.use(bodyParser.json())

var foodpage = (req,res)=>{
    res.send("welcome")
}
server.use("/food",foodRoutder)
server.get("/",foodpage)

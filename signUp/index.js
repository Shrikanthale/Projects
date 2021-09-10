import express from 'express'
import bodyParser from "body-parser";
import userRouter from './routes/signup.js'
import Mongoose  from 'mongoose'
// import dotenv from 'dotenv'
// import cors from 'cors'

// dotenv.config()

var dbURL = 'mongodb+srv://kanthale:kanthale1@cluster0.pcywb.mongodb.net/Sighnup?retryWrites=true&w=majority'

Mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})

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
const server =express()
const PORT = 8007
server.use(bodyParser.json())
// server.use(cors)
var signuppage = (req,res) => {
    res.send("welcome to sighn up page")
}
server.use("/signUp",userRouter)

server.get("/",signuppage)

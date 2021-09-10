import express from 'express'
import bodyParser from 'body-Parser'
import Mongoose  from 'mongoose'
import userStudent from './Routes/stu.js'

var dbURL = 'mongodb+srv://kanthale:kanthale1@cluster0.pcywb.mongodb.net/StudentForm?retryWrites=true&w=majority'
Mongoose.connect(dbURL,{useNewUrlParser:true , useUnifiedTopology:true})
.then(
    (result)=>{
        console.log("connecting DB")
        server.listen(PORT)
        console.log("Sucessfully connect")
    }
)
.catch(
    (err)=>{
        res.send(err)
    }
)
const server = express()
const PORT = 8008
server.use(bodyParser.json())

var page = (req,res) => {
    res.send("Welcome")
}
server.use("/student",userStudent)
server.get("/",page)

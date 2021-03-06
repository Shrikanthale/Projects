import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import groceryroutes from './routes/app.js'
import dotenv from 'dotenv'
import cors from 'cors'
//import axios from 'axios'

dotenv.config()
var url = 'mongodb+srv://kanthale:kanthale1@cluster0.pcywb.mongodb.net/roombooking?retryWrites=true&w=majority'
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})

.then(
    (result) => {
        console.log("conecting to db...")
        server.listen(PORT)
        console.log("server started")
    }
)
.catch(
    (err) => {
        res.send(err)
    }
)

const server = express()
const PORT = 1010
server.use(bodyParser.json())

var deatails = (req,res) => res.send("welcome....")
server.use("/grocery",groceryroutes)
server.get('/',deatails)
server.use(cors())

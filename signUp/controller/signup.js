import { User } from '../model/schema.js'

let users = []

export const getUser = (req,res) => {
    console.log("getuser");
   // res.send(users)
   User.find()
   .then(
       (result)=>{
           res.send(result)
       }
   )
   .catch(
       (err)=>{
           res.send(err)
       }
   )
}

export const createUser= (req,res) => {
    console.log("CreateUsers")
    const user = new User({
        userId : req.body.userId,
        password : req.body.password
    })
    user.save()
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
}

export const getUserById = (req,res) => {
    console.log("getuserbyId")
    User.findById(req.params.id)
    .then(
        (result) => {
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
}

export const getUserDelete = (req,res) => {
    console.log("getDelete")
    User.findByIdAndDelete(req.params.id)
    .then(
        (result)=>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
}
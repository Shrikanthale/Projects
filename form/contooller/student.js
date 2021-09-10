import {Student} from '../models/schema.js'
let students = []

export const getStudent = (req,res) =>{
    //res.send(students)
    console.log("getSudent")
    Student.find()
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

export const createStudent = (req,res) => {
    console.log("createStudent")
   //res.send("ok")
   //students.push(req.body)
   const student = new Student({
    Name:req.body.Name,
    Lastname:req.body.Lastname 
   })
   student.save()
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
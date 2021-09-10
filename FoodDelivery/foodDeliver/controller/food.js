import {Food} from '../models/food.js'
let foods=[]

export const getFood = (req,res)=>{
    console.log("getfood")
    //res.send(foods)
    Food.find()
    .then(
        (result) =>{
            res.send(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}

export const createFood = (req,res) => {
    console.log("create food")
    // foods.push(req.body)
    // res.send("okay")
    const food = new Food({
        name :req.body.name,
        price : req.body.price,
        description : req.body.description
    })
    food.save()
    .then(
        (result)=>{
            res.send({"result":"sucessfull"})
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}

export const deleteFood=(req,res)=>{
    console.log("deleteFood")
    Food.findByIdAndRemove(req.params.id)
    .then(
        (result)=>{
            res.send({"result":"sucessful"})
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}
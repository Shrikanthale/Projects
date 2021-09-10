import express from 'express'
import {getFood,createFood,deleteFood} from '../controller/food.js'
const router = express.Router()

router.get("/getAll",getFood)
router.post("/add",createFood)
router.delete("/deleteFoodItem/:id",deleteFood)

export default router
import express from 'express'
import {getStudent,createStudent} from '../contooller/student.js'

const router = express.Router()

router.get("/getAll",getStudent)
router.post("/add",createStudent)

export default router



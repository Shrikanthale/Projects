
import express from 'express'
import {getUser,createUser,getUserById,getUserDelete} from '../controller/signup.js'
//import axios from 'axios'
const router = express.Router()

router.get("/getAll",getUser)
router.post("/add",createUser)
router.get("/:id",getUserById)
router.delete("/:id",getUserDelete)

export default router
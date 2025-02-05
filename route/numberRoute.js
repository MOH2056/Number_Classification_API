import express from "express"
import number from "../controller/numberPropertiesController.js"
const router = express.Router()

router.get('/', number )

export default router
import controllers from "../controllers/controllers.js";
import express from 'express'

const router = express.Router()

router.get('/', controllers.AllData)
router.get('/emp/:id', controllers.IdData)
router.get('/update/:id', controllers.UpdateEmpData)
router.post('/update/:id', controllers.saveData);


export default router
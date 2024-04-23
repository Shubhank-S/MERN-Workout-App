import express from 'express'
import { createWorkoutsController } from '../controllers/WorkoutsControllers.js';

const router = express.Router()

router.post('/',createWorkoutsController)

export default router;
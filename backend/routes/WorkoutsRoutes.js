import express from 'express'
import { WorkoutsController } from '../controllers/WorkoutsControllers.js';

const router = express.Router()

router.get('/',WorkoutsController)

export default router;
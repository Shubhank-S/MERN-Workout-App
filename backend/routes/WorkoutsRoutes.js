import express from 'express'
import { createWorkoutsController, getWorkoutsController } from '../controllers/WorkoutsControllers.js';

const router = express.Router()

// POST || Create a workout

router.post('/create-workout',createWorkoutsController)

// GET || Get all workouts

router.get('/get-workouts',getWorkoutsController)

export default router;
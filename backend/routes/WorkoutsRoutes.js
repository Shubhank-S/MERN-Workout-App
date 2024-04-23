import express from 'express'
import { createWorkoutsController, getWorkoutController, getWorkoutsController, updateWorkoutController } from '../controllers/WorkoutsControllers.js';

const router = express.Router()

// POST || Create a Workout

router.post('/create-workout', createWorkoutsController)

// GET || Get All Workouts

router.get('/get-workouts', getWorkoutsController)

// GET || Get Single Workout

router.get('/get-workout/:id', getWorkoutController)

// Patch || Update Single Workout

router.patch('/update-workout/:id', updateWorkoutController)

export default router;
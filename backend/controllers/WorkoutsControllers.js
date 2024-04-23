import mongoose from "mongoose"
import WorkoutsModel from "../models/WorkoutsModel.js"

export const createWorkoutsController = async(req,resp)=>{
    try {
       const {title,load,reps} = req.body
     const workout =await WorkoutsModel.create({title,load,reps})
     resp.json({
        success:true,
        message:"Workout created",
        workout
     }).status(200)
   } catch (error) {
    resp.json({
        success:false,
        message:"Error in creating a Workout",
        error
    }).status(400)
    console.log(error)
   }
}

export const getWorkoutsController=async(req,resp)=>{
  try {
    const getWorkout = await WorkoutsModel.find()
    resp.json({
        success:true,
        message:"All Workouts fetched from the database",
        getWorkout
    }).status(200)
  } catch (error) {
    resp.json({
        success:false,
        message:"Error in getting all Workouts",
        error
    }).status(400)
  }
}

export const getWorkoutController= async(req,resp)=>{
    try {
        const {id} = req.params

       if(!mongoose.Types.ObjectId.isValid(id)){
         return resp.json({error:"No Such type of Workout"}).status(404)
       }

      const getSingleWorkout = await WorkoutsModel.findById(id)

      if(!getSingleWorkout){
        return resp.json({error:"No Such Workout found"})
      }
      resp.json({
          success:true,
          message:"Workout fetched from the database",
          getSingleWorkout
      }).status(200)
    } catch (error) {
      resp.json({
          success:false,
          message:"Error in getting a Workout",
          error
      }).status(400)
    }
  }

  export const updateWorkoutController=async(req,resp)=>{
    try {
      const {id} = req.params

      if(!mongoose.Types.ObjectId.isValid(id)){
        return resp.json({error:"No Such type of Workout"}).status(404)
      }

      const updateSingleWorkout = await WorkoutsModel.findByIdAndUpdate({_id:id},{
        ...req.body
      })

      if(!updateSingleWorkout){
        return resp.json({error:"No Such Workout found"})
      }
      resp.json({
          success:true,
          message:"Workout updated in the database",
          updateSingleWorkout
      }).status(200)
    } catch (error) {
      resp.json({
          success:false,
          message:"Error in Updating a Workout",
          error
      }).status(400)
    }
  }
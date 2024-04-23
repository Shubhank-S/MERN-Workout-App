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
        message:"Workout fetched from the database",
        getWorkout
    }).status(200)
  } catch (error) {
    resp.json({
        success:false,
        message:"Error in getting a Workout",
        error
    }).status(400)
  }
}
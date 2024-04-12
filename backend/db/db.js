import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
     const connectionString = await mongoose.connect(process.env.MONGODB_URL)
     console.log(`Connected to MongoDB`)
    } catch (error) {
       console.log(`Error in MongoDB connection:${error}`)
    }
}

export default connectDB;
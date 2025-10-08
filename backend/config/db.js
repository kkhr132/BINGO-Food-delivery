import mongoose from "mongoose"

const connectDb=async() =>{
    const mongoUrl = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/bingo"
    try{
        if(!mongoUrl){
            throw new Error("MONGODB_URL is not set")
        }
        await mongoose.connect(mongoUrl)
        console.log("✅ Database connected successfully")
    } catch(error){
        console.log("❌ Database connection error:", error.message)
        console.log("💡 Make sure MongoDB is running locally or the Atlas URI is correct")
        // Re-throw so server startup can fail fast
        throw error
    }
}

export default connectDb
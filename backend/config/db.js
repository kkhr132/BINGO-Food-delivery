import mongoose from "mongoose"

const connectDb=async() =>{
    try{
        const mongoUrl = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/bingo"
        await mongoose.connect(mongoUrl)
        console.log("✅ Database connected successfully")
    } catch(error){
        console.log("❌ Database connection error:", error.message)
        console.log("💡 Make sure MongoDB is running or use MongoDB Atlas")
    }
}

export default connectDb
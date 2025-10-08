import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.routes.js"
import cors from "cors"

const app=express()
const port=process.env.PORT || 5000

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)

// Start server only after successful DB connection
const startServer = async () => {
    try {
        await connectDb()
        app.listen(port, ()=> {
            console.log(`Server started at ${port}`)
        })
    } catch (error) {
        console.log("❌ Failed to start server due to DB error")
        process.exit(1)
    }
}

startServer()


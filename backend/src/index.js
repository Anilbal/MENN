import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app=express()
dotenv.config()

// PORT
const port=process.env.PORT || 8000

// middleware
app.use(express.json())
app.use(cors())


// routes
app.use("/",(req,res)=>{
    res.send("Hello world!!!")
})
// Server running
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
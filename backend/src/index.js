import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 8000

connectDB().then(()=>{
    app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))
}).catch((error)=>{
    console.error("MongoDB connection error", error);
    process.exit(1)
})

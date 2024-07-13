import mongoose from "mongoose";

export const connectDB=async()=> {
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.czj1ddl.mongodb.net/food-del').then(()=>{console.log("DB CONNECTED")})
}
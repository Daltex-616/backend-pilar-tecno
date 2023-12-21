import mongoose, { mongo } from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION as string)
        console.log("coneccion a mongo realizada")
    } catch (error) {
        console.log(error)
        throw error
    }
}
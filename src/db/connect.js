import mongoose from "mongoose";

async function dbConnect() {
   

    try {
        // const db = await mongoose.connect(process.env.MONGODB_URI || "")
        const db = await mongoose.connect("mongodb+srv://ayushsharma769287:admin@cluster0.9qupizd.mongodb.net/vizackblog")
        console.log("Connected to MongoDB");
        
    } catch (error) {
        
        console.log("Error connecting to MongoDB", error);
        process.exit(1)
    }
} 

export default dbConnect;
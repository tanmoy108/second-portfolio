import mongoose from "mongoose";
export async function connect(){
    try {
        mongoose.connect(process.env.URL)
        const connection = mongoose.connection;
        connection.on("connected",()=>{
            console.log("connected")
        })
        connection.on("error",(err)=>{
            console.log("connection error" + err)
            process.exit()
        })
    } catch (error) {
        console.log("connection error" + err)
    }
}
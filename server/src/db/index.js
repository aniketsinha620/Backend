import mongoose from "mongoose"
import DB_NAME from "../constants.js"


const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("connection done succesfully", connectionInstance)
    }
    catch (error) {
        console.log("connection failed problem in db index.js file ", error)
        process.exit(1)
    }
}

export default connectDB;
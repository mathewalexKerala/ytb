import mongoose from "mongoose";

import {DB_NAME} from '../constants.js'

const connectDB = async () => {
    try {
    const connnectionInstance =     await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`\n Mongodb connected ! DB Host ${connnectionInstance.connection.host} \n `);
    
    } catch (error) {
        console.log( `Mongodb connection error`,error)
        process.exit(1)
    }
}

export default connectDB
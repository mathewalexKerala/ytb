import {app} from './app.js'
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
dotenv.config({
    path:"./src/.env"
})

const PORT =process.env.PORT || 8004
connectDB().then(() => {
    app.listen(PORT,()=> {
        console.log(`server is running on port : ${PORT}`)
    })
}).catch((error)=>{
console.log(`Server is running on port ${PORT}`)
})

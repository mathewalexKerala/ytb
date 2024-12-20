import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import dotenv from 'dotenv'

dotenv.config({
    path:"./src/.env"
})

cloudinary.config({

    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
    console.log("reached upload on cloudinary",localFilePath)
    try {
    if(!localFilePath) return null

    const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    console.log("File uploaded on cloudinary . File src:" + response)

   
     fs.unlinkSync(localFilePath)
   

    return response
    }catch (error) {
        console.log(error)
     const filedete =   fs.unlinkSync(localFilePath)
     console.log(filedete,'file deleted')
        return null
    }
}

const deleteFromCloudinary = async (publicId) => {
    try {
 const result = await  cloudinary.uploader.destroy(publicId)
 console.log("Deleted from cloudinary public Id",publicId)
    } catch (error) {
        console.log("Error deleting from cloudinary",error)
        return null
    }
 }


export {uploadOnCloudinary,deleteFromCloudinary}
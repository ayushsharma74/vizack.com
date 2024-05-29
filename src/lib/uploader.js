import {v2 as cloudinary} from "cloudinary"


const cloudinaryUploader = async (localPath) => {
    cloudinary.config({ 
        cloud_name: "ayushsharma", 
        api_key: "838424447111743", 
        api_secret: "bqWfv0IO24aqAQE9RlgU4cGb7nI"
    });
    try {
        const res = await cloudinary.uploader.upload(localPath,{
            resource_type: "auto"
        })
        console.log("File Successfully Uploaded To Cloudinary : ", res.url);
        return res.url
    } catch (error) {
        console.log(error);
        return error
    }
}

export {cloudinaryUploader}
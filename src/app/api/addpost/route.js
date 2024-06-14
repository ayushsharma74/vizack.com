import dbConnect from "@/db/connect";
import Post from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";
import { cloudinaryUploader } from "@/lib/uploader";
import {v2 as cloudinary} from 'cloudinary';

// Initialize Cloudinary configuration


export async function POST(req) {

    const date = new Date()
    const month = String(date.getDay())
    const day = String(date.getDate())
    const year = String(date.getFullYear())
    
    
  try {
    await dbConnect();
    cloudinary.config({ 
        cloud_name: "ayushsharma", 
        api_key: "838424447111743", 
        api_secret: "bqWfv0IO24aqAQE9RlgU4cGb7nI"
    });
    const data = await req.formData();
    const html = data.get("html");
    const title = data.get("title");
    const slug = data.get("slug");
    const description = data.get("description");
    const featImage = data.get("featImage");
    const category = data.get("category");

    console.log(data,html,title,description,featImage,slug);

    const arrayBuffer = await featImage.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload image to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }).end(buffer);
    });

    // Create a new post
    const newPost = await Post.create({
      html,
      title,
      slug,
      description,
      featImage: uploadResult.secure_url,
      publishDate: `${day}.${month}.${year}`,
      category
    });

    console.log(newPost);

    return NextResponse.json({ data: newPost }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

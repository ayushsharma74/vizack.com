
import dbConnect from "@/db/connect";
import Post from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";
import { cloudinaryUploader } from "@/lib/uploader";


export async function POST(NextRequest){
    try {
        console.log("here");
        await dbConnect()
        // const { html,title,slug,description,image } = await NextRequest.json()
        const data = await NextRequest.formData();
        const html = data.get("html");
        const title = data.get("title");
        const slug = data.get("slug");
        const description = data.get("description");
        const featImage = data.get("featImage");
        console.log(featImage);

        console.log(image);
        const arrayBuffer = await featImage.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: 'auto' }, function (error, result) {
                if (!error && result) {
                    console.log(result);
                    resolve(NextResponse.json({ result }, { status: 200 }));
                } else {
                    console.log(error);
                    reject(NextResponse.json({ error }, { status: 400 }));
                }
            }).end(buffer);
        });
        const newPost = await Post.create({
            html,
            title,
            slug,
            description,
            featImage
        })

        console.log(newPost);
        
        return NextResponse.json({data: newPost },{status: 200} )
    } catch (error) {
        return NextResponse.json({message: "Error" },{status: 500} )
    }
}
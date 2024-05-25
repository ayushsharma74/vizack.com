
import dbConnect from "@/db/connect";
import Post from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";


export async function POST( NextRequest){
    try {
        console.log("here");
        await dbConnect()
        const { html,title,slug,description } = await NextRequest.json()
        
        const newPost = await Post.create({
            html,
            title,
            slug,
            description
        })

        console.log(newPost);
        
        return NextResponse.json({data: newPost },{status: 200} )
    } catch (error) {
        return NextResponse.json({message: "Error" },{status: 500} )
    }
}
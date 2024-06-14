export const dynamic = "force-dynamic"

import dbConnect from "@/db/connect";
import Post from "@/models/post.model";
import { NextRequest, NextResponse } from "next/server";


export async function GET(NextRequest){
    try {
        console.log("at get posts");
        await dbConnect()
        
        const posts = await Post.find({})
        
        return NextResponse.json({data: posts },{status: 200} )
    } catch (error) {
        return NextResponse.json({message: "Error" },{status: 500} )
    }
}
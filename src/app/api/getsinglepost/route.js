
import dbConnect from "@/db/connect";
import Post from "@/models/post.model";
// import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request) {
    try {
        console.log("at get single post");
        await dbConnect()

        const searchParams = request.nextUrl.searchParams
        const slug = searchParams.toString().split('=')[1];
        console.log("Param",slug);

        const post = await Post.findOne({slug})
        console.log(post);
        return NextResponse.json({ data: post }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }
}
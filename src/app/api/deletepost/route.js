import Post from "@/models/post.model"


export async function POST(req){
    const {id} = await req.json()
    await Post.findByIdAndDelete(id)
    return Response.json({message: "Post deleted"})
}
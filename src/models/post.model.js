import mongoose , {Schema} from "mongoose";


const postSchema = new Schema({
    html: {
        type: String
    },
    title: {
        type: String
    },
    description:{
        type: String
    },
    slug: {
        type: String
    },
    featImage: {
        type: String
    }
})

const Post = (mongoose.models.Post) || mongoose.model("Post", postSchema)

export default Post
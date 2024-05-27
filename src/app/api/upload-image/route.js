import formidable from "formidable";
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from "next/server";

export const config = {
    api: {
        bodyParser: false
    }
}

export async function POST(req) {
    try {
        cloudinary.config({ 
            cloud_name: "ayushsharma", 
            api_key: "838424447111743", 
            api_secret: "bqWfv0IO24aqAQE9RlgU4cGb7nI"
        });

        const file = await req.formData();
        const fileObj = file.get("file");
        const arrayBuffer = await fileObj.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        let res = {};

        cloudinary.uploader.upload_stream({ resource_type: 'auto' }, function (error, result) {
            if (!error && result) {
                console.log(result);
                res = result; // Assigning result to res
                return NextResponse.json({ result }, { status: 200 }); // Sending response inside callback
            } else {
                console.log(error);
                return NextResponse.json({ error }, { status: 400 }); // Sending error response inside callback
            }
        }).end(buffer);
    } catch (error) {
        console.error('Error uploading file to Cloudinary:', error);
        return NextResponse.json({ error: 'Error uploading file to Cloudinary' }, { status: 500 }); // Sending error response
    }
}

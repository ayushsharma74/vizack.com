import path from "path";
import fs from "fs"

export default async function rejectBlog(req, res) {
    // console.log("REQ: ",req)
    let { name  } = req.searchParams
    name = path.join(process.cwd(), "src", "app", "blogs", "src", "app", "employee", "blogs", "blog", name)
    fs.rmdir(name, { recursive: true }, (err) => {
        if (err) {
            console.error('Error removing directory:', err);
            res.status(500).json({ error: 'Unable Process the Request' });
            return;
        }
        console.log('Directory removed successfully.');
    });
}   
import { Octokit } from "@octokit/rest"


export default async function getBlogContent(route) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });
    const owner = "ayushsharma74";
    const repo = "vizack-blogs";
    let path = `Blogs/${route}`;
    if (route == "blogs.json") {
        path = route;
    }

    try {
        const response = await octokit.repos.getContent({ owner, repo, path });

        if (!Array.isArray(response.data) && response.data.content) {

            let content = Buffer.from(response.data.content, "base64").toString("utf-8");

            return content;

        } else {
            console.warn({ Error: "File path is not valid" });
        }
    } catch (error) {
        console.error("Error reading file:", error.message);
    }
}
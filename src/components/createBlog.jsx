import { Octokit } from "@octokit/rest"

export default async function CreateBlogs(data, publisher, title) {

    const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    });
    const owner = "ayushsharma74";
    const repo = "vizack-blogs";
    const path = `Blogs/${publisher}/pending/${title}/page.jsx`;
    try {
        await octokit.repos.createOrUpdateFileContents({
        owner: owner,
        repo: repo,
        path: path,
        message: "Create new directory",
        content: Buffer.from(data).toString("base64"),
        committer: {
            name: "Gajendrasuman",
            email: "Gajendrasuman868@gmail.com"
          }
        });
        return {msg: "Success"}
    } catch (error) {
        return {msg: "Failed: " + error.message}
    }
}
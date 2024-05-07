import { Octokit } from "@octokit/rest";
export default async function RejectBlog(id, user, publisher, blog) {
    let status = 0
    if(user == "Admin"){
        let route = `Blogs/${publisher}/pending/${blog}/userData.json`
        await getData(route).then(async ({ message, data, sha }) => {
            if (message == "success") {
                let userData = JSON.parse(data);
                if (userData.data.blog.id === id) {
                    await deleteFile(route, sha).then(async (data) => {
                        if (data == "Success") {
                            route = `Blogs/${publisher}/pending/${blog}/page.jsx`
                            await getData(route).then(async ({ sha }) => {
                                await deleteFile(route, sha).then((data) => { 
                                    if (data == "Success") {
                                        status = 1;
                                    }
                                })
                            })
                        }
                    })
                }
            }
        })
    }
    if (status === 1) {
        return {message: "Success", reason: "Records Deleted"}
    }
    else {
        return { message: "Failed", reason: "Process Intrupted" }
    }
    
}

async function deleteFile(route, sha) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });
    const owner = "ayushsharma74";
    const repo = "vizack-blogs";
    try {
        await octokit.repos.deleteFile({
            owner,
            repo,
            path: route,
            message: "Delete File",
            sha: sha
        });
        return "Success";
    }
    catch (error) {
        return error.message.toString();
    }
}


async function getData(route) {

    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });
    const owner = "ayushsharma74";
    const repo = "vizack-blogs";
    const path = route;
    try {
        const response = await octokit.repos.getContent({ owner, repo, path });
        let data = Buffer.from(response.data.content, "base64").toString("utf-8");
        return { message: "success", data: data, sha: response.data.sha }
    } catch (error) {
        return { message: "fail", data: error.message }
    }
}
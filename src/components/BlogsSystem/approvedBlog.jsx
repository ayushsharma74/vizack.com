import { Octokit } from "@octokit/rest";

export default async function Approve(id, user, publisher, blog) {
    publisher = publisher.replaceAll(" ", "")
    let status = 0
    if (user == "Admin") {
    let route = `Blogs/${publisher}/pending/${blog}/userData.json`
    await getdata(route).then(async ({message, data, sha}) => {

        if (message == "success") {
            let userData = JSON.parse(data);
            
            if (userData.data.blog.id === id) {
                route = "blogs.json"
                await getdata(route).then(async ({ message, data, sha }) => { 
                    if (message === "success") {
                        let newData = JSON.parse(data)
                        newData.push(userData)
                        
                        await createFile(route, JSON.stringify(newData), sha).then(async (data) => {
                            if (data == "Success") {
                                route = `Blogs/${publisher}/pending/${blog}/page.jsx`
                                await getdata(route).then(async ({ data, sha }) => {
                                    route = `Blogs/Approved/${blog}/page.jsx`
                                    await createFile(route, data, sha).then(async (data) => {
                                        if (data == "Success") {
                                            route = `Blogs/${publisher}/pending/${blog}/page.jsx`
                                            await getdata(route).then(async ({sha }) => {
                                                route = `Blogs/${publisher}/pending/${blog}/page.jsx`
                                                await deleteFile(route, sha).then(async (data) => {
                                                    if (data == "Success") {
                                                        route = `Blogs/${publisher}/pending/${blog}/userData.json`
                                                        await getdata(route).then(async ({ sha }) => {
                                                            await deleteFile(route, sha).then(async (data) => {
                                                                if (data == "Success") {
                                                                    status = 1;
                                                                    return { message: "Success", reason: data }
                                                                }
                                                            }).catch((error) => {
                                                                return { message: "Failed", reason: error.message }
                                                            })
                                                        })
                                                    } else {
                                                        return { message: "Failed", reason: data }
                                                    }
                                                }).catch((error) => {
                                                    return { message: "Failed", reason: error.message }
                                                })
                                            })
                                        } else {
                                            return { message: "Failed", reason: data}
                                        }
                                    }).catch((error) => {
                                        return { message: "Failed", reason: error.message }
                                    })
                                }).catch((error) => {
                                    return { message: "Failed", reason: error.message }
                                })
                            }
                            else {
                                return {message: "Failed", reason: data}
                            }
                        }).catch((error) => {
                            return { message: "Failed", reason: error.message }
                        })
                    }
                    else {
                        return { message: "Failed", reason: "Data File Not Found" }
                    }
                }).catch(() => {
                    return { message: "Failed", reason: "Data File Not Found" }
                })
            }
            else {
                return { message: "Failed", reason: "Blog not Found" }
            }
        }
        else {
            return {message: "Failed", reason: data.data}
        }
    }).catch((error) => {
        return { message: "Failed", reason: error.message }
    })
}
else {
    // return { message: "Failed", reason: `ID: ${id}\nUSER: ${user}\n Publisher: ${publisher}\n Blog Name: ${blog}` }
    return { message: "Failed", reason: "Invalid User" }
    }
    
    if (status == 1) {
        return { message: "Success", reason: `Blog Approved` }
    }
    return { message: "Failed", reason: `Process Intrupted` }
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


async function createFile(route, data, sha) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });
    const owner = "ayushsharma74";
    const repo = "vizack-blogs";
    const path = route;
    try {
        await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: path,
            message: "Move Directory",
            content: Buffer.from(data).toString("base64"),
            sha: sha
        });
        return "Success";
    }
    catch (error) {
        return error.message.toString();
    }
}



async function getdata(route) {
    
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
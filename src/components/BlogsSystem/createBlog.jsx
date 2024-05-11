import { Octokit } from "@octokit/rest";
import cryptoRandomString from "crypto-random-string";

export default async function CreateBlogs(content, publisher, title, dscr, ctgr, bnr, time, reqType) {
    let name = title
    name = name.includes(":") ? name.replaceAll(" ", "").replaceAll("-", "").split(":")[1].toLowerCase() : name.replaceAll(" ", "").replaceAll("-", "").toLowerCase();

    const userData = {
        name: publisher,
        data: {
            blog: {
                name: title,
                description: dscr,
                category: ctgr,
                time: time,
                image: bnr,
                route: `blogs/${name}`
            }
        }
    };
    const owner = "ayushsharma74";
    const repo = "vizack-blogs";
    const basePath = `Blogs/${publisher.replaceAll(" ", "")}/pending/${name}`;
    if (reqType == "Preview") {
        try {
            const octokit = new Octokit({
                auth: process.env.GITHUB_TOKEN,
            });
    
    
            let { data: { sha } } = await octokit.repos.getContent({
                owner,
                repo,
                path: `${basePath}/page.jsx`
            })
            if (sha) {
                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: `${basePath}/page.jsx`,
                    message: "Create new directory",
                    content: Buffer.from(content).toString("base64"),
                    sha
                });
            }
            else {
                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: `${basePath}/page.jsx`,
                    message: "Create new directory",
                    content: Buffer.from(data).toString("base64")
                });
            }
    
            let { data } = await octokit.repos.getContent({
                owner,
                repo,
                path: `${basePath}/userData.json`
           })
            if (data.sha) {
                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: `${basePath}/userData.json`,
                    message: "Create new directory",
                    content: Buffer.from(JSON.stringify(userData)).toString("base64"),
                    sha: data.sha
                });            
            }
            else {
                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: `${basePath}/userData.json`,
                    message: "Create new directory",
                    content: Buffer.from(JSON.stringify(userData)).toString("base64")
                });
            }
            return { message: "Success" };
        } catch (error) {
            if (error.status == 404 && error.request.method == "GET") {
                if (error.request.url.includes("page.jsx")) {
                    let res = createNewPage(content,"page.jsx");
                    if (res == "Success") {
                        return createNewPage(JSON.stringify(userData), basePath + "/userData.json");
                    }
                    else {
                        return { message: "Error: " + error.message }
                    }
                }
                else if (error.request.url.includes("userData.json")) {
                    return createNewPage(JSON.stringify(userData), basePath + "/userData.json");
                }
            }
            else {
                return {message: "Error: " + error.message}
            }
        } 
    }

    else if (reqType == "Submit") {
        let id = cryptoRandomString({ length: 16, type: 'url-safe' });
        userData.data.blog.id = id
        try {
            const octokit = new Octokit({
                auth: process.env.GITHUB_TOKEN,
            });


            let { data: { sha } } = await octokit.repos.getContent({
                owner,
                repo,
                path: `${basePath}/page.jsx`
            })
            if (sha) {
                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: `${basePath}/page.jsx`,
                    message: "Create new directory",
                    content: Buffer.from(content).toString("base64"),
                    sha
                });
            }
            else {
                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: `${basePath}/page.jsx`,
                    message: "Create new directory",
                    content: Buffer.from(data).toString("base64")
                });
            }

            let { data } = await octokit.repos.getContent({
                owner,
                repo,
                path: `${basePath}/userData.json`
            })
            if (data.sha) {
                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: `${basePath}/userData.json`,
                    message: "Create new directory",
                    content: Buffer.from(JSON.stringify(userData)).toString("base64"),
                    sha: data.sha
                });
            }
            else {
                await octokit.repos.createOrUpdateFileContents({
                    owner,
                    repo,
                    path: `${basePath}/userData.json`,
                    message: "Create new directory",
                    content: Buffer.from(JSON.stringify(userData)).toString("base64")
                });
            }
            return { message: "Success", id: id };
        } catch (error) {
            if (error.status == 404 && error.request.method == "GET") {
                if (error.request.url.includes("page.jsx")) {
                    let res = createNewPage(content, basePath + "/page.jsx");
                    if (res == "Success") {
                        return { message: createNewPage(JSON.stringify(userData), basePath + "/userData.json"), id: id };
                    }
                    else {
                        return { message: "Error: " + error.message }
                    }
                }
                else if (error.request.url.includes("userData.json")) {

                    return { message: createNewPage(JSON.stringify(userData), basePath + "/userData.json"), id: id };
                }
            }
            else {
                return { message: "Error: " + error.message }
            }
        } 
        
    }
}

async function createNewPage(data, path) {
    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });

    const owner = "ayushsharma74";
    const repo = "vizack-blogs";
    try {
        await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: path,
            message: "Create new directory",
            content: Buffer.from(data).toString("base64")
        });
        return "Success";
    }
    catch (error) {
        return error.message.toString();
    }
}
"use client"

import { useState } from "react";

export default function BlogPage({params}) {
    const [data, setData] = useState("404 Page Not Found")
    // Octokit Authorization
    const git_token = "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";
    const { Octokit } = require("@octokit/rest");
    const octokit = new Octokit({
    auth: git_token,
    });

    // Read File Content
    async function readFileFromRepo(owner, repo, path) {
        try {
            const response = await octokit.repos.getContent({
            owner,
            repo,
            path,
            });
        
            // Ensure the response is a file and not a directory
            if (Array.isArray(response.data) || !response.data.content) {
            throw new Error("Specified path is not a file");
            }
        
            // Decode base64 content
            let content = Buffer.from(response.data.content, "base64").toString();
            content = JSON.parse(content)
            return content;
        } catch (error) {
            console.error("Error reading file:", error.message);
            throw error;
        }
        }
        
        // Example usage:
        const owner = "Gajendrasuman";
        const repo = "vizack-blogs";
        const path = "blogs.json";
        
        readFileFromRepo(owner, repo, path)
        .then(content => {
            setData(content)
            console.log("File content:", content);
        })
        .catch(error => {
            console.error("Error:", error);
        });

    return (
        <main>
        </main>
    );
}

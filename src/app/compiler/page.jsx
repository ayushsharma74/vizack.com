"use client"
import { useState } from "react"
import React from "react"
import axios from 'axios';
import { toast } from "react-toastify";
// import { AxiosRequestConfig } from "axios";


export default function Compiler() {


    // preloaded Content
    const cmd = `/*    Commands   */
title(Blog Title)
par(Paragraph)
mainimage(Image Address, Image Alt)
image(Image Address, Image Alt)
    `
    const [name, setName] = useState('Untitled')
    const [content, setContent] = useState(cmd)
    const [contentHistory, setContentHistory] = useState([cmd]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateContent = (e) => {
        setContent(e.target.value)
        const typingTimeout = setTimeout(() => {
            saveContentToHistory();
        }, 500);
    }



    // File Upload
    const upload = () => {
        const file = document.querySelector("main ul input")
        file.click()
        file.addEventListener("change", (e) => {
            const files = e.target.files[0];
            const fileName = files.name.substring(0, files.name.lastIndexOf('.'));
            setName(fileName)
            const reader = new FileReader();
            reader.onload = function (event) {
                const fileData = event.target.result;
                setContent(fileData)
                setContentHistory([fileData]);
                setHistoryIndex(0);
            };
            reader.readAsText(files);
        })
    }

    // File Download
    const downloadFile = () => {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = name + ".vz";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

    const saveContentToHistory = () => {
        setContentHistory([...contentHistory.slice(0, historyIndex + 1), content]);
        setHistoryIndex(historyIndex + 1);
    };

    const undo = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setContent(contentHistory[historyIndex - 1]);
        }
    };

    const redo = () => {
        if (historyIndex < contentHistory.length - 1) {
            setHistoryIndex(historyIndex + 1);
            setContent(contentHistory[historyIndex + 1]);
        }
    };

    const copy = () => {
        const textarea = document.querySelector("main textarea");
        const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
        if (selectedText !== "") {
            navigator.clipboard.writeText(selectedText)
        }
    };

    const paste = () => {
        navigator.clipboard.readText()
            .then((text) => {
                const textarea = document.querySelector("main textarea");
                textarea.value = textarea.value.substring(0, textarea.selectionStart) + text + textarea.value.substring(textarea.selectionEnd);
                // Optionally, you might want to update the state if you are using React
                setContent(textarea.value)
                saveContentToHistory()
            })
            .catch((error) => {
                console.error('Error pasting text:', error);
            });
    };

    let pageData = ''
    let title = []
    let data2 = ""
    const header = {
        banner: "",
        image: "",
        name: "",
        about: "",
        facebook: "",
        linkedin: "",
        twitter: "",
        instagram: "",
        date: "",
    }
    let Banner;
    const PageBuilder = () => {
        let code = document.querySelector("main textarea");
        code = code.value
        code = code.split("\n")
        code.forEach(element => {
            if (element.includes('banner(')) {
                let key = element.split('banner(')
                key = key[1].split(')');
                key = key[0]
                header.banner = key
            }
            else if (element.includes('publisher.image(')) {
                let key = element.split('publisher.image(')
                key = key[1].split(')');
                key = key[0]
                header.image = key
            }
            else if (element.includes('publisher.name(')) {
                let key = element.split('publisher.name(')
                key = key[1].split(')');
                key = key[0]
                header.name = key
            }
            else if (element.includes('publisher.about(')) {
                let key = element.split('publisher.about(')
                key = key[1].split(')');
                key = key[0]
                header.about = key
                data2 += `\<AboutPublisher img={"${header.image}"} name={"${header.name}"} about="${header.about}" facebook="${header.facebook}" twitter="${header.twitter}" instagram="${header.instagram}" linkedin="${header.instagram}" />`;
            }
            else if (element.includes('publisher.facebook(')) {
                let key = element.split('publisher.facebook(')
                key = key[1].split(')');
                key = key[0]
                header.facebook = key
            }
            else if (element.includes('publisher.linkedin(')) {
                let key = element.split('publisher.linkedin(')
                key = key[1].split(')');
                key = key[0]
                header.linkedin = key
            }
            else if (element.includes('publisher.instagram(')) {
                let key = element.split('publisher.instagram(')
                key = key[1].split(')');
                key = key[0]
                header.instagram = key
            }
            else if (element.includes('publisher.twitter(')) {
                let key = element.split('publisher.twitter(')
                key = key[1].split(')');
                key = key[0]
                header.twitter = key
            }
            else if (element.includes('publisher.date(')) {
                let key = element.split('publisher.date(')
                key = key[1].split(')');
                key = key[0]
                header.date = key
            }
            else if (element.includes('title(')) {
                let key = element.split('title(')
                key = key[1].split(')');
                key = key[0]
                title.push(key)
                if (title.length > 1) {
                    data2 += `\n<Title Title={"${key}"} />`
                }
            }
            else if (element.includes('par(')) {
                let key = element.split('par(')
                key = key[1].split(')');
                key = key[0]
                data2 += `\n<Par p={"${key}"} />`;
            }
            else if (element.includes('note(')) {
                let key = element.split('note(')
                key = key[1].split(')');
                let keys = key[0].lastIndexOf(",")
                let key0 = key[0].substring(0, keys)
                let key1 = key[0].substring(keys + 1)

                if (key.length == 1) {
                    data2 += `\n<Note p={"${key0}"} Title={""} />`;
                }
                else {
                    data2 += `\n<Note p={"${key0}"} Title={"${key1}"} />`;
                }
            }
            else if (element.includes('image(')) {
                let key = element.split('image(')
                key = key[1].split(')');
                key = key[0].split(",")
                if (key.length == 1) {
                    data2 += `\n<Images img={"${key[0]}"} alt={""} />`;
                }
                else {
                    data2 += `\n<Images img={"${key[0]}"} alt={"${key[1]}"} />`;
                }
            }
            else if (element.includes('sub(')) {
                let key = element.split('sub(')
                key = key[1].split(')');
                key = key[0]
                data2 += `\n<SubTitle Title={"${key}"} />`;
            }
            else if (element.includes('tags(')) {
                let key = element.split('tags(')
                key = key[1].split(')');
                key = key[0].split(",")
                data2 += `\n<div className="tags flex flex-wrap justify-between my-8 border-t-[1px] border-b-[1px] border-[#E2E2E2]">
                            <div className="tags flex gap-2 items-center">
                                <h1 className="text-dark text-xl font-semibold">Tags: </h1>
                                <div className="flex flex-wrap gap-6 px-4 flex-auto py-6">`
                key.forEach(k => {
                    data2 += `\n<Tag name={"${k}"} />`;
                });
                data2 += `\n</div>
                            </div>
                            <div className="share">
                                <div className="tags flex gap-2 items-center">
                                    <h1 className="text-dark text-xl font-semibold">Share: </h1>
                                    <div className="flex flex-wrap gap-2 px-4 flex-auto py-6">
                                        <Link rel="noopener noreferrer" href={"https://www.facebook.com/sharer/sharer.php?u=https://vizackcom.vercel.app/blogs/${title[0].split(":")[0].replaceAll(" ", "")}/"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Facebook</Link>
                                        <Link rel="noopener noreferrer" href={"https://twitter.com/intent/tweet?url=https://vizackcom.vercel.app/blogs/${title[0].split(":")[0].replaceAll(" ", "")}/&text=${title[0].split(":")[0].replaceAll(" ", "%20")}"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >X</Link>
                                        <Link rel="noopener noreferrer" href={"https://www.linkedin.com/shareArticle?url=https://vizackcom.vercel.app/blogs/${title[0].split(":")[0].replaceAll(" ", "")}/&title=${title[0].split(":")[0].replaceAll(" ", "%20")}"} target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Linkedin</Link>
                                        <Link rel="noopener noreferrer" href={"whatsapp://send?text=https://vizackenterprises.com/blogs/${title[0].split(":")[0].replaceAll(" ", "")}/"} data-action="share/whatsapp/share" target="_blank" className="hover:text-[#ff6900] transition-colors duration-300" >Whatsapp</Link>
                                    </div>
                                </div>
                            </div>
                        </div>\n
                    `;
            }
            
        })
        Banner = `\n<TopHeader banner={"${header.banner}"} bannerAlt={"${title[0]}"} publisher={"${header.image}"} publisherName={"${header.name}"} date={"${header.date}"}  />\n<div className="parg px-4 py-6 mb-4">`;
        const blogTitle = `\n<Title Title={"${title[0]}"} />\n`;
        pageData += Banner + blogTitle + data2;
        let titles = title[0].split(":")[0]
        return {name: titles, data: pageData, publisher: header.name}
    }

    const [rands, setRands] = useState("Nothing is Triggered");

    function preview() {
        const git_token = "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";
        const { Octokit } = require("@octokit/rest");
        const octokit = new Octokit({
        auth: git_token,
        });
        // Read File Content
        // async function readFileFromRepo(owner, repo, path) {
        //     try {
        //       const response = await octokit.repos.getContent({
        //         owner,
        //         repo,
        //         path,
        //       });
          
        //       // Ensure the response is a file and not a directory
        //       if (Array.isArray(response.data) || !response.data.content) {
        //         throw new Error("Specified path is not a file");
        //       }
          
        //       // Decode base64 content
        //       const content = Buffer.from(response.data.content, "base64").toString();
          
        //       return content;
        //     } catch (error) {
        //       console.error("Error reading file:", error.message);
        //       throw error;
        //     }
        //   }
          
        //   // Example usage:
        //   const owner = "Gajendrasuman";
        //   const repo = "UniSys";
        //   const path = "index.html";
          
        //   readFileFromRepo(owner, repo, path)
        //     .then(content => {
        //         setRands(content)
        //       console.log("File content:", content);
        //     })
        //     .catch(error => {
        //       console.error("Error:", error);
        //     });


        // Create Directory
        // async function createDirectory() {
        // try {
        //     await octokit.repos.({
        //     owner: "Gajendrasuman",
        //     repo: "ViZack-Enterprises",
        //     path: "src/app/blog/GSTECH",
        //     message: "Create new directory",
        //     content: Buffer.from("HEllo GSTECH").toString("base64"), // empty content
        //     });
        //     console.log("New directory created successfully!");
        // } catch (error) {
        //     console.error("Error creating directory:", error.message);
        // }
        // }

        // createDirectory();

        // const build = PageBuilder()
        // async function saveData() {
        //     const urls = `https://vi-zack-enterprises.vercel.app/api/saveData`;
        //     await axios({
        //         url: urls,
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         params: { filename: build.name, content: build.data, reqType: "Preview" }, 
        //     }).then((res) => {
        //         toast.success('Page Build Successfully', {
        //             position: "bottom-right",
        //             pauseOnHover: true,
        //             theme: "dark"
        //         });
                
        //         // window.open(`/blogs/Temp/${build.name.replaceAll(" ", "").toLowerCase()}`, '_blank');
                
        //     }).catch((err) => {
        //         toast.error('Page Build  Failed', {
        //             position: "bottom-right",
        //             pauseOnHover: true,
        //             theme: "dark"
        //         });
        //         console.log("Error: ", err);
        //     });
        // }
        // saveData()
    }
    
    // function submit() {
    //     const build = PageBuilder()
    //     async function saveData() {

    //         const urls = `https://vi-zack-enterprises.vercel.app/api/saveData`;
    //         await axios({
    //             method: 'post',
    //             url: urls,
    //             headers: {
    //                 'Content-Type': 'application/json', // Set the Content-Type header
    //             },
    //             params: { filename: build.name, content: build.data, reqType: "Submit" },
    //         }).then((res) => {
    //             toast.success('Page Build Successfully', {
    //                 position: "bottom-right",
    //                 pauseOnHover: true,
    //                 theme: "dark"
    //             });
    //             async function handleSubmit() {
    //                 let url = `${process.env.API_URL}/blogs/src/app/employee/blogs/blog/${build.name.replaceAll(" ", "").toLowerCase()}`
    //                 const response = await fetch("https://api.web3forms.com/submit", {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                         Accept: "application/json",
    //                     },
    //                     body: JSON.stringify({
    //                         access_key: "e0097a3b-ef4b-416a-aea2-796a645d8714",
    //                         name: build.publisher,
    //                         email: "gajendrasuman868@gmail.com",
    //                         message: url,
    //                     }),
    //                 }).then(() => {
    //                     toast.success('Approval Sent Successfully', {
    //                         position: "bottom-right",
    //                         pauseOnHover: true,
    //                         theme: "dark"
    //                     });
    //                 }).catch((error) => {
    //                     toast.error('Failed to Send Mail. Try to Contact later.', {
    //                         position: "bottom-right",
    //                         pauseOnHover: true,
    //                         theme: "dark"
    //                     });
    //                 })
    //             }
    //             handleSubmit()                

    //         }).catch((error) => {
    //             toast.error('Page Build  Failed', {
    //                 position: "bottom-right",
    //                 pauseOnHover: true,
    //                 theme: "dark"
    //             });
    //             console.log("Error: ", error);
    //         });
    //     }
    //     saveData()
    // }
    return (
        <main className="px-6 py-8 w-full">
            <div className="menu border-2 h-12 w-full flex items-center justify-between gap-10">
                <div className="flex items-center gap-4">
                    <h1 className="IcoFont text-2xl flex items-center h-full gap-2 px-2"><span><object type="image/svg+xml" data={"/assets/logo/editor.svg"} width="40" height="40"></object></span> <span className="text-default">VZ</span> Editor &nbsp;&nbsp;|</h1>
                    <h3 className="text-xl text-default-gray">Blogs/<input type="text" onChange={updateName} className="fileName outline-none bg-note-bg px-2 shadow-md py-1 text-blog rounded-sm w-36" value={name} /></h3>
                </div>
                <ul className="w-fit flex gap-4 text-xl mr-4">
                    <input type="file" accept=".vz" className="hidden" />
                    <li><i onClick={upload} className="hover:before:content-['Upload']  hover:text-default text-default-gray cursor-pointer icofont-upload"></i></li>
                    <li><i onClick={downloadFile} className="hover:before:content-['Download']  hover:text-default text-default-gray cursor-pointer icofont-download-alt"></i></li>
                    <li><i lassName="hover:before:content-['New']  hover:text-default text-default-gray cursor-pointer icofont-file-file"></i></li>
                    <li><i onClick={undo} className="hover:before:content-['Undo']  hover:text-default text-default-gray cursor-pointer icofont-undo"></i></li>
                    <li><i onClick={redo} className="hover:before:content-['Redo']  hover:text-default text-default-gray cursor-pointer icofont-redo"></i></li>
                    <li><i onClick={copy} className="hover:before:content-['Copy']  hover:text-default text-default-gray cursor-pointer icofont-ui-copy"></i></li>
                    <li><i onClick={paste} className="hover:before:content-['Paste']  hover:text-default text-default-gray cursor-pointer icofont-file-alt"></i></li>
                    <li><i onClick={preview} className="hover:before:content-['Preview']  hover:text-default text-default-gray cursor-pointer icofont-presentation-alt"></i></li>
                    <li><i onClick={preview} className="hover:before:content-['Submit']  hover:text-default text-default-gray cursor-pointer icofont-read-book"></i></li>
                </ul>
            </div>
            <div className="editor w-full min-h-96 border-2 ">
                <textarea rows={20} className="w-full outline-none resize-none bg-note-bg" onChange={updateContent} value={content}>
                   
                </textarea>
            </div>

            <div className="w-full min-h-64 border">
                {<div dangerouslySetInnerHTML={{ __html: rands }} />}
            </div>
        </main>
    )
}


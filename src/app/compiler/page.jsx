"use client"
import { useState,  useEffect } from "react"
import React from "react"
import CreateBlogs from "@/components/BlogsSystem/createBlog";
import { Toaster, toast } from "react-hot-toast";
// import { AxiosRequestConfig } from "axios";


export default function Compiler() {

    // preloaded Content
    const cmd = `/*    Commands   */
category(Category)
publisher(Name)
title(Blog Title)
heading(Heading)
par(Paragraph)
banner(Banner Image Link)
image-<size>(Image Address, Image Alt)
    `
    const [name, setName] = useState('Untitled')
    const [content, setContent] = useState(cmd)
    const [contentHistory, setContentHistory] = useState([cmd]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [banner, setBanner] = useState({
        title: "",
        publisher: "Admin",
        category: ""
    })
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
    let time =  new Date();
    time = `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`
    let pageData =""
    let dscr = 0, img = 0;

    const PageBuilder = () => {
        let code = document.querySelector("main textarea");
        code = code.value
        code = code.split("\n")
        code.forEach(element => {
            if (element.includes('title(')) {
                let key = element.split('title(')
                key = key[1].split(')');
                key = key[0]
                banner.title = key;
            }
            else if (element.includes('par(')) {
                let key = element.split('par(')
                key = key[1].split(')');
                key = key[0]
                if(dscr == 0){dscr = key}
                pageData += `\npar-${key}\n`
            }


            else if (element.includes('heading(')) {
                let key = element.split('heading(')
                key = key[1].split(')');
                key = key[0]
                pageData += `\nhead-${key}\n`
            }
            else if (element.includes('publisher(')) {
                let key = element.split('publisher(')
                key = key[1].split(')');
                key = key[0]
                banner.publisher = key;
            }
            else if (element.includes('category(')) {
                let key = element.split('category(')
                key = key[1].split(')');
                key = key[0]
                banner.category = key;
                
            }
            else if (element.includes('banner(')) {
                let key = element.split('banner(')
                key = key[1].split(')');
                key = key[0]
                if (img == 0) { img = key }
            }
            else if (element.includes('image-')) {
                let key = element.split('image-')
                key = key[1].split('(');
                let num = parseInt(key[0])
                key = key[1].split(')');
                key = key[0].split(",")

                if(num <= 100){
                    pageData += `\nlink-${key[0]} alt-${key[1]} size-${num}\n`
                }
                else{
                    pageData += `\nlink-${key[0]} alt-${key[1]} size-full\n`
                }
            }
        })
        
        if (img == 0) { img = "" }
        if (dscr == 0) { dscr = "" }
        return {name: banner.title, data: pageData, publisher: banner.publisher, description: dscr, category: banner.category, banner: img, time: time}
    }
    
    const preview = async () => {
        const build = PageBuilder()
        let newTab;
        let createORUpdateBlogs = await CreateBlogs(build.data, build.publisher, build.name, build.description, build.category, build.banner, build.time, "Preview");
        
        if (createORUpdateBlogs.message == "Success" || createORUpdateBlogs == "Success") {
            let name = build.name;
            name = name.includes(":") ? name.replaceAll(" ", "").replaceAll("-", "").split(":")[1].toLowerCase() : name.replaceAll(" ", "").replaceAll("-", "").toLowerCase();
            newTab = window.open(`/blogs/preview/${build.publisher.replaceAll(" ", "")}/${build.category}/${name}`, '_blank');
            if (newTab) {
                toast.success("Preview Window Launched", {
                    position: "bottom-right",
                    duration: 3000,
                })
            } else {
                toast.warn("Pop-up window has been blocked by the Browser", {
                    position: "bottom-right",
                    duration: 3000
                })
            }
        }
    }


    const submit = async () => {
        const build = PageBuilder()
        await CreateBlogs(build.data, build.publisher, build.name, build.description, build.category, build.banner, build.time, "Submit").then(async (response) => {
            console.log(response)
            if (response.message == "Success") {
                let name = build.name;
                name = name.includes(":") ? name.replaceAll(" ", "").replaceAll("-", "").split(":")[1].toLowerCase() : name.replaceAll(" ", "").replaceAll("-", "").toLowerCase();
                const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: "e0097a3b-ef4b-416a-aea2-796a645d8714",
                        name: build.publisher,
                        message: `http://localhost:3000//blogs/submit/Admin/${response.id}/${build.publisher.replaceAll(" ", "")}/${build.category.replaceAll(" ", "%20")}/${name}`,
                    }),
                });
                const result = await res.json();
                if (result.success) {
                    downloadFile()
                    toast.success("Blog Submited Successfully", {
                        position: "bottom-right",
                        duration: 3000,
                    });
                } 
            }
            
        }).catch((error) => {
            console.log(error)
            toast.error("Blog Submission Failed", {
                position: "bottom-right",
                duration: 3000,
            });
        })

    }

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
                    <li><i onClick={submit} className="hover:before:content-['Submit']  hover:text-default text-default-gray cursor-pointer icofont-read-book"></i></li>
                </ul>
            </div>
            <div className="editor w-full min-h-96 border-2 ">
                <textarea rows={20} className="w-full outline-none resize-none bg-note-bg" onChange={updateContent} value={content}>
                   
                </textarea>
            </div>
            <Toaster />

            <div className="w-full min-h-64 border">
            </div>
        </main>
    )
}


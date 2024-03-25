import fs from 'fs';
import path from 'path';

export default async function Handler(req, res) {
    let { filename, content, reqType } = req.searchParams;
    filename = filename.replaceAll("&apos;", "'").toLowerCase();
    filename = filename.replaceAll(" ", "")

    let page1 = '"use client";\n \
    import Image from "next/image";\n \
    import Link from "next/link";\n \
    import Upperbanner from "@/components/Upperbanner";\n \
    import { Banner, PublisherImage, PublisherName, PublisherPublished, Title, Par, Note, Images, SubTitle, Tag, AboutPublisher, TopHeader } from "@/components/blogPage";\n \
    const img = {\n \
        img1: ["/assets/background/blogs/stock.png", "How can I grow my stocks?", "/assets/background/profile/p6.png", " Gajender", "Feb 12, 2023"],\n \
        img2: ["/assets/background/blogs/apps.jpg", "Applications that must be in every android mobile", "/assets/background/profile/p5.png", "Jatin Jain", "Jun 2, 2023"],\n \
        img3: ["/assets/background/blogs/hacking.jpg", "Hacking tips and tricks", "/assets/background/profile/p3.png", "Farhan", "Jul 26, 2023"],\n \
        img4: ["/assets/background/blogs/ml.jpeg", "Best sites to learn Machine Learning", "/assets/background/profile/p4.png", "Ayush Sharma", "Sep 19, 2023"],\n\
        img5: ["/assets/background/blogs/ai.jpg", "What is an Artificial Intelligence?", "/assets/background/profile/p1.png", "Ankita Suman", "Dec 29, 2023"],\n\
        img6: ["/assets/background/blogs/strong foundation.jpg", "Startup needs strong foundation", "/assets/background/profile/p2.png", "Amrita Jain", "Feb 21, 2024"],\n\
}\n\
        export default function Breader() {\n \
            return (\n \
            <>\n \
    <Upperbanner route={"blogread"} routeName={"Blog Reader"} />\n \
    <main className="flex w-full h-fit max-lg:flex-col py-16 px-4 gap-2">\n \
        <div className="left w-[60%] max-lg:w-full ">\n\n \
            {/* Blogs Container */}\n \
            <div className="card-holder flex flex-col gap-6 pl-32 max-lg:px-6">\n \
                <div className="card h-fit w-full pb-2">\n'

    let page2 = '"use client";\n \
    import Image from "next/image";\n \
    import Link from "next/link";\n \
    import Upperbanner from "@/components/Upperbanner";\n \
    import { Banner, PublisherImage, PublisherName, PublisherPublished, Title, Par, Note, Images, SubTitle, Tag, AboutPublisher, TopHeader } from "@/components/blogPage";\n \
    import { useEffect, useState } from "react";\n\
    import axios from "axios";\n\
    const img = {\n \
        img1: ["/assets/background/blogs/stock.png", "How can I grow my stocks?", "/assets/background/profile/p6.png", " Gajender", "Feb 12, 2023"],\n \
        img2: ["/assets/background/blogs/apps.jpg", "Applications that must be in every android mobile", "/assets/background/profile/p5.png", "Jatin Jain", "Jun 2, 2023"],\n \
        img3: ["/assets/background/blogs/hacking.jpg", "Hacking tips and tricks", "/assets/background/profile/p3.png", "Farhan", "Jul 26, 2023"],\n \
        img4: ["/assets/background/blogs/ml.jpeg", "Best sites to learn Machine Learning", "/assets/background/profile/p4.png", "Ayush Sharma", "Sep 19, 2023"],\n\
        img5: ["/assets/background/blogs/ai.jpg", "What is an Artificial Intelligence?", "/assets/background/profile/p1.png", "Ankita Suman", "Dec 29, 2023"],\n\
        img6: ["/assets/background/blogs/strong foundation.jpg", "Startup needs strong foundation", "/assets/background/profile/p2.png", "Amrita Jain", "Feb 21, 2024"],\n\
}\n\
        export default function Breader() {\n \
    const [feed, setFeed] = useState(0)\n\
    const [action, setAction] = useState("")\n\
    const approve = () => {\n\
        setAction("Approve")\n\
        setFeed(1)\n\
    }\n\
    const reject = () => {\n\
        setAction("Reject")\n\
        setFeed(1)\n\
    }\n\
    const cancel = () => {\n\
        setFeed(0)\n\
    }\n\
    const performAction = () => {\n\
        if (action === "Reject") {\n\
            let filename = document.querySelector("main .title h1")\n\
            filename = filename.innerText\n\
            filename = filename.split(":")[0].replaceAll(" ", "").toLowerCase();\n\
            async function removeBlog() {\n\
                await axios({\n\
                    method: "post",\n\
                    url: "https://vizackenterprises.com/api/rejectBlog",\n\
                    headers: {\n\
                        "Content-Type": "application/json"\n\
                    },\n\
                    params: { name: filename }\n\
                }).then((res) => {\n\
                    console.log("Response: ", res)\n\
                }).catch((error) => {\n\
                    console.log("Error: ", error);\n\
                });\n\
            }\n\
            removeBlog()\n\
        }\n\
    else if (action === "Approve") {\n\
    let filename = document.querySelector("main .title h1")\n\
    filename = filename.innerText\n\
    filename = filename.split(":")[0].replaceAll(" ", "").toLowerCase();\n\
    async function approveBlog() {\n\
        await axios({\n\
            method: "post",\n\
            url: "https://vizackenterprises.com/api/approveBlog",\n\
            headers: {\n\
                "Content-Type": "application/json"\n\
            },\n\
            params: { name: filename }\n\
        }).then(() => {\n\
    console.log()\n\
        }).catch((error) => {\n\
            console.log("Error: ", error);\n\
        });\n\
    }\n\
    approveBlog()\n\
}\n\
    }\n\
            return (\n \
            <>\n \
        <div className="flex flex-col gap-6 px-6 justify-center fixed w-64 right-0 bg-note py-4 z-20 rounded-l-md rounded-t-md">\n\
        <button onClick = { approve } className = "px-4 py-1 rounded-md bg-green-500 hover:bg-green-700 text-xl text-white" > Approve</button>\n\
            <button onClick={reject} className="px-4 py-1 rounded-md bg-red-500 hover:bg-red-700 text-xl text-white">Reject</button>\n\
            </div >\n\
        { feed == 1 && (\n\
            <div className="fixed h-full w-full justify-center items-center z-20 flex top-0 left-0 bg-dark">\n\
                <div className="">\n\
                    <textarea id="feedback" placeholder="Write a Feedback (Optional)" className="outline-none p-2 resize-none h-64 w-96" ></textarea>\n\
                    <div className="flex gap-4 justify-center">\n\
                        <button onClick={performAction} className="px-4 py-1 rounded-md bg-green-500 hover:bg-green-700 text-xl text-white">{action}</button>\n\
                        <button onClick={cancel} className="px-4 py-1 rounded-md bg-red-500 hover:bg-red-700 text-xl text-white">Cancel</button>\n\
                    </div>\n\
                </div>\n\
            </div>\n\
        )\n\
}\n\
                    <Upperbanner route={"blogread"} routeName={"Blog Reader"} />\n \
                    <main className="flex w-full h-fit max-lg:flex-col py-16 px-4 gap-2">\n \
                        <div className="left w-[60%] max-lg:w-full ">\n\n \
                            {/* Blogs Container */}\n \
                            <div className="card-holder flex flex-col gap-6 pl-32 max-lg:px-6">\n \
                                <div className="card h-fit w-full pb-2">\n'
    
    let data2 = `<hr className="w-full h-1 my-8" />
                                    
                                    <div className="comment flex shadow-default-shadow rounded-md flex-col gap-8 px-6 py-10 ">
                                        <h1 className="text-3xl text-dark font-bold">Leave A Comment</h1>
                                        <form className="flex flex-wrap flex-col gap-4 ">
                                            <input type="text" name="name" placeholder="Your Name" className="bg-[#F2F7FF] p-4 rounded-full placeholder:text-blog w-full" />
                                            <input type="text" name="email" placeholder="Email Address" className="bg-[#F2F7FF] p-4 rounded-full placeholder:text-blog w-full" />
                                            <input type="text" name="mobile" placeholder="Phone Number" className="bg-[#F2F7FF] p-4 rounded-full placeholder:text-blog w-full" />
                                            <input type="text" name="website" placeholder="Website" className="bg-[#F2F7FF] p-4 rounded-full placeholder:text-blog w-full" />
                                            <textarea name="comment" placeholder="Your Comment..." className="bg-[#F2F7FF] p-4 rounded-xl min-h-40 w-full placeholder:text-blog" ></textarea>
                                            <div className="checkbox flex gap-2">
                                                <input type="checkbox" name="saveData" className="cursor-pointer" id="saveData" />
                                                <label htmlFor="saveData" className="text-xs cursor-pointer">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </div>
                                            <button type="submit" className="bg-default max-w-64 px-6 py-4 rounded-full text-xl font-bold text-white cursor-pointer hover:scale-110 transition-all duration-200">Post Comment</button>
                                        </form>

                                        

                                    </div>
                                </div>
                                
                        </div>
                       
                    </div>
                </div>
                <div className="right py-6 pr-16  max-lg:pr-6 pl-6 max-lg:w-full rounded-xl w-[40%]">
                    <div className="container flex flex-col gap-y-8">
                       
                        {/* Categories */}
                        <div className="category flex flex-col">
                            <h1 className="text-2xl text-default tracking-wide font-semibold">Category</h1>
                            <div className="flex flex-col border px-4 my-4 bg-dark py-6 rounded-3xl">
                                <ul className="flex flex-col gap-4">
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Business Growth</span><span>(1)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Business Strategy</span><span>(5)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Insurance Consulting</span><span>(1)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Law Consulting</span><span>(3)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Media</span><span>(4)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
                                        <span>Web Design</span><span>(11)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="recent flex flex-col">
                            <h1 className="text-2xl text-default tracking-wide font-semibold">Recent Posts</h1>
                            <div className="flex flex-col border px-4 my-4 bg-dark py-6 rounded-3xl">
                                <ul className="flex flex-col py-4 rounded-2xl gap-4 gap-y-8 max-min-end:text-lg bg-white">
                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img1[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img1[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img1[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img1[1]}</h1>
                                    </li>

                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img2[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img2[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img2[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img2[1]}</h1>
                                    </li>
                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img3[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img3[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img3[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img3[1]}</h1>
                                    </li>
                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img4[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img4[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img4[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img4[1]}</h1>
                                    </li>
                                    <li className="cursor-pointer px-6 flex flex-col">

                                        <div className="relative">
                                            <Image
                                                src={img.img5[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img5[1]}

                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img5[4]}</h3>
                                        </div>
                                        <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img5[1]}</h1>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="category flex flex-col">
                            <h1 className="text-2xl text-default tracking-wide font-semibold">Tags</h1>
                            <div className="flex border flex-wrap gap-6 px-4 my-4 flex-auto bg-dark py-6 rounded-3xl">
                                <Tag name="Best"/>
                                <Tag name="digital"/>
                                <Tag name="digital agency"/>
                                <Tag name="featured"/>
                                <Tag name="innovation"/>
                                <Tag name="marketing"/>
                                <Tag name="on sale"/>
                                <Tag name="product"/>
                                <Tag name="startup"/>
                                <Tag name="technology"/>
                                <Tag name="trendy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
`
    let pageData;
    if (reqType == "Submit") {
        pageData = page2
        let directoryPath = path.join(process.cwd(), "src", 'app', "blogs");

        if (!fs.existsSync(directoryPath)) {
            try {
                fs.mkdirSync(directoryPath);
            } catch (error) {
                res.status(500).json({ error: 'Error creating directory' });
                return;
            }
        }
        directoryPath = path.join(directoryPath, "src");

        if (!fs.existsSync(directoryPath)) {
            try {
                fs.mkdirSync(directoryPath);
            } catch (error) {
                res.status(500).json({ error: 'Error creating directory' });
                return;
            }
        }
        directoryPath = path.join(directoryPath, "app");

        if (!fs.existsSync(directoryPath)) {
            try {
                fs.mkdirSync(directoryPath);
            } catch (error) {
                res.status(500).json({ error: 'Error creating directory' });
                return;
            }
        }
        directoryPath = path.join(directoryPath, "employee");

        if (!fs.existsSync(directoryPath)) {
            try {
                fs.mkdirSync(directoryPath);
            } catch (error) {
                res.status(500).json({ error: 'Error creating directory' });
                return;
            }
        }
        directoryPath = path.join(directoryPath, "blogs");

        if (!fs.existsSync(directoryPath)) {
            try {
                fs.mkdirSync(directoryPath);
            } catch (error) {
                res.status(500).json({ error: 'Error creating directory' });
                return;
            }
        }

        directoryPath = path.join(directoryPath, "blog");

        if (!fs.existsSync(directoryPath)) {
            try {
                fs.mkdirSync(directoryPath);
            } catch (error) {
                res.status(500).json({ error: 'Error creating directory' });
                return;
            }
        }
        const newDirectoryPath = path.join(directoryPath, filename);
        if (!fs.existsSync(newDirectoryPath)) {
            try {
                fs.mkdirSync(newDirectoryPath);
            } catch (error) {
                console.error('Error creating directory:', error);
                res.status(500).json({ error: 'Error creating directory' });
                return;
            }
        }
        let data = pageData + content + data2

        const filePath = path.join(newDirectoryPath, "page.jsx");
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).json({ error: 'Error writing file' });
                return;
            }
        });
        const directory = path.join(process.cwd(), "src", 'app', "blogs", "Temp", filename);

        if (fs.existsSync(directoryPath)) {
            fs.rmdir(directory, { recursive: true }, (err) => {
                if (err) {
                    console.error('Error removing directory:', err);
                    return;
                }
                console.log('Directory removed successfully.');
            });
        }
        
    }
    else {
        pageData = page1
        const directoryPath = path.join(process.cwd(), "src", 'app', "blogs", "Temp");

        if (!fs.existsSync(directoryPath)) {
            try {
                fs.mkdirSync(directoryPath);
            } catch (error) {
                res.status(500).json({ error: 'Error creating directory' });
                return;
            }
        }
        const newDirectoryPath = path.join(directoryPath, filename);
        if (!fs.existsSync(newDirectoryPath)) {
            try {
                fs.mkdirSync(newDirectoryPath);
            } catch (error) {
                console.error('Error creating directory:', error);
                res.status(500).json({ error: 'Error creating directory' });
                return;
            }
        }
        let data = pageData + content + data2

        const filePath = path.join(newDirectoryPath, "page.jsx");
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).json({ error: 'Error writing file' });
                return;
            }
        });
    }
}

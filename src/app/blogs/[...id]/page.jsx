"use client"
import "@/styles/blogs.css"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import getBlogContent from '@/components/BlogsSystem/getBlogContent';
import { Heading, Par, MainImg } from '@/components/BlogsSystem/blogs';
import BlogTitle from "@/components/blogComponents/BlogTitle";
import Approve from "@/components/BlogsSystem/approveBlog";
import RejectBlog from "@/components/BlogsSystem/rejectBlog";
import { Toaster, toast } from "react-hot-toast";
export default function BlogPage({ params }) {
    const [blogData, setBlogData] = useState([]);
    const [userData, setUserData] = useState({});
    const [auth, setAuth] = useState(false);

    async function approve() {
        let route = params.id
        await Approve(route[2], route[1], route[3], route[5]).then((data) => {
                console.log(data.reason)
                toast.success("Blog Approved", {
                    duration: 3000,
                    position: "bottom-right"
                })
        }).catch((error) => {

            console.log(error)
            toast.error("Approval Failed", {
                duration: 3000,
                position: "bottom-right"
            })
        })
    }

    async function reject() {
        let route = params.id
        await RejectBlog(route[2], route[1], route[3], route[5]).then((data) => {
            console.log(data)
            if (data.message == "Success") {
                toast.success("Blog Rejected", {
                    duration: 3000,
                    position: "bottom-right"
                })
                
            }
            else {
                toast.error("Failed to Reject", {
                    duration: 3000,
                    position: "bottom-right"
                })
            }
        }).catch((error) => {
            console.log(error)
            toast.error("Blog Rejection Failed", {
                duration: 3000,
                position: "bottom-right"
            })
        })
    }


    useEffect(() => {
        let route = params.id;

        if (route[0] == "preview") {
            let user = route[1];
            let blogName = route[3];

            getBlogContent(`${user}/pending/${blogName}/page.jsx`).then((data) => {
                let dt = data.split("\n");
                let parsedData = dt.map((line) => {
                    if (line.includes("head-")) {
                        return <Heading content={line.split("head-")[1]} key={line} />;
                    }
                    else if (line.includes("par-")) {
                        return <Par content={line.split("par-")[1]} key={line} />;
                    }
                    else if (line.includes("link-")) {
                        let key = line.split("link-")[1].split(" alt-")
                        let link = key[0];
                        key = key[1].split(" size-")
                        let alt = key[0]
                        let size = key[1]

                        return <MainImg link={link} alt={alt} size={size} key={line} />;
                    }
                    return null;
                });
                setBlogData(parsedData);
            }).catch(error => {
                console.error('Error fetching blog content:', error);
            });

            getBlogContent(`${user}/pending/${blogName}/userData.json`).then((data) => {
                setUserData(JSON.parse(data));
            }).catch(error => {
                console.error('Error fetching user data:', error);
            });

        }

        else if (route[0] == "submit") {
            let admin = route[1];
            let id = route[2];
            let user = route[3];
            let blogName = route[5];
            if (admin === "Admin") {
                getBlogContent(`${user}/pending/${blogName}/userData.json`).then((data) => {
                    data = JSON.parse(data)
                    if (data.data.blog.id === id) {
                        setAuth(true);
                        setUserData(data)
                        getBlogContent(`${user}/pending/${blogName}/page.jsx`).then((data) => {
                            let dt = data.split("\n");
                            let parsedData = dt.map((line) => {
                                if (line.includes("head-")) {
                                    return <Heading content={line.split("head-")[1]} />;
                                }
                                else if (line.includes("par-")) {
                                    return <Par content={line.split("par-")[1]} />;
                                }
                                else if (line.includes("link-")) {
                                    let key = line.split("link-")[1].split(" alt-")
                                    let link = key[0];
                                    key = key[1].split(" size-")
                                    let alt = key[0]
                                    let size = key[1]
    
                                    return <MainImg link={link} alt={alt} size={size} key={line} />;
                                }
                                return null;
                            });
                            setBlogData(parsedData);
                        }).catch(error => {
                            console.error('Error fetching blog content:', error);
                        });
                    }
                    else {
                        setBlogData(<h1 className="text-default text-4xl my-20 mx-auto w-fit">404: Page Not Found</h1>)
                        
                    }
                }).catch(error => {
                    console.error('Error fetching user data:', error);
                });
            }
            
        }
        else {
            getBlogContent(`Approved/${params.id[0]}/page.jsx`).then((data) => {
                let dt = data.split("\n");
                let parsedData = dt.map((line) => {
                    if (line.includes("head-")) {
                        return <Heading content={line.split("head-")[1]} key={line} />;
                    }
                    else if (line.includes("par-")) {
                        return <Par content={line.split("par-")[1]} key={line} />;
                    }
                    else if (line.includes("link-")) {
                        let key = line.split("link-")[1].split(" alt-")
                        let link = key[0];
                        key = key[1].split(" size-")
                        let alt = key[0]
                        let size = key[1]

                        return <MainImg link={link} alt={alt} size={size} key={line} />;
                    }
                    return null;
                });
                setBlogData(parsedData);
            }).catch(error => {
                console.error('Error fetching blog content:', error);
            });

            getBlogContent(`blogs.json`).then((data) => {
                let json = JSON.parse(data)
                json.forEach(element => {
                    let name = element.data.blog.route.split("/")
                    if (name[name.length - 1] === params.id[0]) {
                        setUserData(element)
                    }
                });
            }).catch(error => {
                console.error('Error fetching user data:', error);
            });
        }
    }, [params.id[0]]);


    return (
        <>
            <div className="bg-default w-full min-h-10 h-fit flex flex-wrap items-center px-5 py-2">
                <h1 className="text-white hover:text-default-gray font-bold">
                    <Link href={"/"}>Home &nbsp;</Link>
                </h1>
                <h1 className="text-white font-bold"> &gt;</h1>
                <h1 className="text-white hover:text-default-gray font-bold">
                    <Link href={`/blogs`} >&nbsp; Blogs &nbsp;</Link>
                </h1>
                <h1 className="text-white font-bold"> &gt;</h1>
                <h1 className="text-white hover:text-default-gray font-bold truncate">
                    {userData && userData.data ? (
                        <Link href={userData.data ? userData.data.blog.route : ""} >&nbsp; {userData.data.blog.name}</Link>
                    ) : ""
                    }
                </h1>
            </div>
            <div className="MainBlog cont my-10">
                {userData && userData.data ? (
                    <BlogTitle title={userData.data.blog.name} writer={userData.name} date={userData.data.blog.time} category={userData.data.blog.category} />
                ) : ""}
                {userData && userData.data ? blogData : <h1 className="text-3xl text-default w-fit mx-auto">404: {params.id[0] == "submit" ? params.id[5] : params.id[0] == "preview" ? params.id[3] : params.id[0] } Not Found</h1>}
            </div>
            {auth == true ? (<><button className="text-xl font-semibold tracking-wide px-3 py-1 bg-green-600 text-white mx-2 hover:bg-green-800" onClick={approve}>Approve</button> <button className="text-xl font-semibold tracking-wide px-3 py-1 bg-red-600 text-white mx-2 hover:bg-red-800" onClick={reject}>Reject</button></>) : ""}
            <Toaster />
        </>
    );
}

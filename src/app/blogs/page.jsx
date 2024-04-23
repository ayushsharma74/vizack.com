"use client"

import UpperPost from "@/components/blogComponents/UpperPost"
import RecentPost from "@/components/blogComponents/RecentPost"
import Sidebar from "@/components/blogComponents/Sidebar"
import "./blogs.css"
import Link from "next/link"
import { useState } from "react"
import { Octokit } from "@octokit/rest"

// import asset1 from "/assets/images/asset1.jpg"

export default function Blogs() {
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKKEN, // Your GitHub token
});

const [data, setData] = useState("404 Page Not Found");
const ReadFileFromRepo = () => {
  useEffect(() => {
    const owner = "ayushsharma74";
    const repo = "vizack-blogs";
    const path = "blogs.json";

    async function fetchData() {
      try {
        const response = await octokit.repos.getContent({ owner, repo, path });

        // Ensure the response is a file and not a directory
        if (!Array.isArray(response.data) && response.data.content) {
          // Decode base64 content
          let content = Buffer.from(response.data.content, "base64").toString();
          content = JSON.parse(content);
          setData(content);
          console.log("File content:", content);
        } else {
          throw new Error("Specified path is not a file");
        }
      } catch (error) {
        console.error("Error reading file:", error.message);
        setData("Error: " + error.message);
      }
    }

    fetchData();

  }, []);
}

ReadFileFromRepo()

    return (
        <>
        <div className="bg-default w-full min-h-10 h-fit py-2 flex flex-wrap items-center px-5" >
                <h1 className="text-white hover:text-default-gray font-bold">
                    <Link href={"/"}>Home &nbsp;</Link>
                </h1>
                <h1 className="text-white font-bold"> &gt;</h1>
                <h1 className="text-white hover:text-default-gray font-bold">
                    <Link href={`/blogs`} >&nbsp; Blogs</Link>
                </h1>
            </div>
            <div className="cont my-10">
                <UpperPost />
                {/* blogs */}
                <h1 className="text-3xl font-serif underline decoration-2">Recent Posts</h1>
                <div className="flex">
                    <div className="flex-5 mt-3">
                        {data}
                        
                        <RecentPost 
                        title={"Exploring Graphic Design and Digital Art"} 
                        disc={"Graphic design is the art of creating visual content to communicate messages and ideas. It encompasses a wide range of mediums, including print, digital, and multimedia. Graphic designers use elements like typography....."}
                        route={'/blogs/graphic-design'}
                        category={'DESIGNING'}
                        imgSrc={'/assets/blogs/graphic-design.jpg'}
                        date={"20.03.2024"}/>
                        <RecentPost 
                        title={"Demystifying Neural Networks: How Do They Really Work?"} 
                        disc={"In the vast landscape of artificial intelligence, neural networks stand out as one of the most intriguing and powerful tools. From recognizing faces in photos to driving cars autonomously, neural networks..."}
                        route={'/blogs/neural-networks-explained'}
                        imgSrc={'/assets/blogs/neural-network.jpg'}
                        category={'DATA SCIENCE'}
                        date={"18.03.2024"}/>
                        <RecentPost 
                        title={"A Comprehensive Guide to Startup Tactics"} 
                        disc={"The entrepreneurial journey is a thrilling adventure filled with promise, passion, and purpose. Yet, beneath the surface lies a complex landscape fraught with challenges..."}
                        route={'/blogs/startup-tactics'}
                        imgSrc={'/assets/blogs/startup tactics.jpg'}
                        category={'DATA SCIENCE'}
                        date={"18.03.2024"}/>
                        <RecentPost 
                        title={"Navigating the Inflation of Skills in the IT Sector"} 
                        disc={"In recent years, the IT industry has witnessed a surge in demand for skilled professionals, yet paradoxically, a growing number of qualified engineers find themselves grappling with joblessness and stress..."}
                        route={'/blogs/navigating-inflation'}
                        imgSrc={'https://i2-prod.business-live.co.uk/incoming/article26605573.ece/ALTERNATES/s810/0_AUR_NJL_040814ARCH_03.jpg'}
                        category={'DISCUSSION'}
                        date={"21.04.2024"}/>
                        <RecentPost 
                        title={"Navigating the Depths of Data: An Exploration into Exploratory Data Analysis"} 
                        disc={"In the vast sea of data that inundates our digital world, lies a treasure trove of insights waiting to be discovered. Yet, navigating this sea can be daunting without the right tools and techniques..."}
                        route={'/blogs/depth-of-data'}
                        imgSrc={'https://miro.medium.com/v2/resize:fit:1024/1*U3ycm5tC-5Q6hMODYr5K9A.png'}
                        category={'DATA SCIENCE'}
                        date={"21.04.2024"}/>

<RecentPost 
                        title={"Unveiling the Marvels: The Role of AI in Digital Marketing"} 
                        disc={"In the vast and dynamic realm of digital marketing, there’s a quiet revolution brewing, one powered by intelligence that's not human. Yes, you guessed it right! Artificial Intelligence..."}
                        route={'/blogs/role-of-ai'}
                        imgSrc={'/assets/blogs/role of ai/img1.png'}
                        category={'AI'}
                        date={"21.04.2024"}/>
                    </div>
                    <div className="flex-2 hidden flex-col gap-5 w-[55.5rem] lg:flex md:flex">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>


    )
}















// "use client"

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Blog from "@/components/blogCard";
// import { Tag } from "@/components/blogPage";
// const src = "/assets/background/marketing globe.png";
// const img = {
//     img1: ["/assets/background/blogs/stock.png", "How can I grow my stocks?","/assets/background/profile/p6.png"," Gajender", "Feb 12, 2023"],
//     img2: ["/assets/background/blogs/apps.jpg", "Applications that must be in every android mobile", "/assets/background/profile/p5.png", "Jatin Jain", "Jun 2, 2023"],
//     img3: ["/assets/background/blogs/hacking.jpg", "Hacking tips and tricks", "/assets/background/profile/p3.png", "Farhan", "Jul 26, 2023"],
//     img4: ["/assets/background/blogs/ml.jpeg", "Best sites to learn Machine Learning", "/assets/background/profile/p4.png", "Ayush Sharma", "Sep 19, 2023"],
//     img5: ["/assets/background/blogs/ai.jpg", "What is an Artificial Intelligence?", "/assets/background/profile/p1.png", "Ankita Suman", "Dec 29, 2023"],
//     img6: ["/assets/background/blogs/strong foundation.jpg", "Startup needs strong foundation", "/assets/background/profile/p2.png", "Amrita Jain", "Feb 21, 2024"],
// }
// export default function blogs() {
    

//     return (
//         <>
//             {/* Header */}
//             <div className="">
//                 <div className="w-full h-72 bg-default flex justify-between max-md-lg:h-64 transition-all max-md:h-52 max-sm:h-36">
//                     <div className="w-fit h-fit">
//                         <div className="h-fit w-fit">
//                             <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" className="max-lg:text-8xl text-9xl text-white tracking-long font-extrabold mx-6 py-12 max-md-lg:text-7xl max-md:text-5xl max-min-sm:text-4xl max-min-sm:py-16">
//                                 BLOGS
//                             </h1>

//                         </div>

//                         <div className="h-full w-full" data-aos="fade-left" data-aos-delay="150" data-aos-duration="500">
//                             <ul className="text-white tracking-wider mx-8 max-sm:text-default-gray">
//                                 <Link href={"/"} className="text-white hover:text-default-gray tracking-wide font-bold max-sm:text-default">Home</Link>
//                                 &nbsp;&gt;&nbsp;
//                                 <Link href={"/blogs"} className="text-white hover:text-default-gray tracking-wide font-bold max-sm:text-default">Blogs</Link>
//                             </ul>
//                         </div>
//                     </div>

//                     <div className="w-ful h-full mx-16 max-w-[30rem] transition-all max-lg:max-w-[20rem] min-w-[20rem] max-md-lg:min-w-[17rem] max-md-lg:max-w-[18rem] max-md:min-w-[14rem] max-md:max-w-[15rem] max-sm:min-w-[11rem] max-min-sm:min-w-[9rem] max-min-end:hidden">
//                         <Image
//                             src={src}
//                             height={500}
//                             width={500}
//                             style={{ width: "auto", height: "auto" }}
//                             draggable={false}
//                         />
//                     </div>

//                 </div>

//                 <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500" className="text-default-gray mx-24 my-10 w-[50%] text-3xl max-lg:w-full max-lg:mx-0 max-lg:px-2 max-sm:my-16">A great headline mixed with a weak opening is like iniviting someone into your house, only to slam the door in their face as they approach.</div>
//             </div>
//             <main className="flex w-full h-fit max-lg:flex-col py-16 px-4 gap-2">
//                 <div className="left w-[60%] max-lg:w-full ">
//                     {/* Blogs Container */}
//                     <div className="card-holder flex flex-col gap-6 pl-32 max-lg:pl-6">
//                         <Blog
//                             blogImg={img.img1[0]}
//                             profileImg={img.img1[2]}
//                             profileName={img.img1[3]}
//                             Time={img.img1[4]}
//                             blogTitle={img.img1[1]}
//                             route={'/blogs/blog1'}
//                         />
//                         <Blog
//                             blogImg={img.img2[0]}
//                             profileImg={img.img2[2]}
//                             profileName={img.img2[3]}
//                             Time={img.img2[4]}
//                             blogTitle={img.img2[1]}
//                             route={'/blogs/blog2'}
//                         />
//                         <Blog
//                             blogImg={img.img3[0]}
//                             profileImg={img.img3[2]}
//                             profileName={img.img3[3]}
//                             Time={img.img3[4]}
//                             blogTitle={img.img3[1]}
//                             route={'/blogs/blog3'}
//                         />
//                         <Blog
//                             blogImg={img.img4[0]}
//                             profileImg={img.img4[2]}
//                             profileName={img.img4[3]}
//                             Time={img.img4[4]}
//                             blogTitle={img.img4[1]}
//                             route={'/blogs/blog4'}
//                         />
//                         <Blog
//                             blogImg={img.img5[0]}
//                             profileImg={img.img5[2]}
//                             profileName={img.img5[3]}
//                             Time={img.img5[4]}
//                             blogTitle={img.img5[1]}
//                             route={'/blogs/blog5'}
//                         />
//                         <Blog
//                             blogImg={img.img6[0]}
//                             profileImg={img.img6[2]}
//                             profileName={img.img6[3]}
//                             Time={img.img6[4]}
//                             blogTitle={img.img6[1]}
//                             route={'/blogs/blog6'}
//                         />
//                     </div>
//                 </div>
//                 <div className="right py-6 pr-16  max-lg:pr-6 pl-6 max-lg:w-full rounded-xl w-[40%]">
//                     <div className="container flex flex-col gap-y-8">
//                         {/* Search Bar */}
//                         {/* <div className="search">
//                             <h1 className="text-default text-2xl font-bold">Search</h1>
//                             <div className="sear flex w-full">
//                                 <input type="text" className="text-xl w-full h-16 mt-4 relative rounded-full px-4 pr-16" name="search" placeholder="Search Here..." />
//                                 <i className="icofont-search p-6 bg-default text-white absolute right-0 hover:text-default-gray cursor-pointer rounded-full"></i>
//                             </div>
//                         </div>  */}

//                         {/* Categories */}
//                         <div className="category flex flex-col">
//                             <h1 className="text-2xl text-default tracking-wide font-semibold">Category</h1>
//                             <div className="flex flex-col border px-4 my-4 bg-dark py-6 rounded-3xl">
//                                 <ul className="flex flex-col gap-4">
//                                     <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
//                                         <span>Business Growth</span><span>(1)</span>
//                                     </li>
//                                     <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
//                                         <span>Business Strategy</span><span>(5)</span>
//                                     </li>
//                                     <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
//                                         <span>Insurance Consulting</span><span>(1)</span>
//                                     </li>
//                                     <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
//                                         <span>Law Consulting</span><span>(3)</span>
//                                     </li>
//                                     <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
//                                         <span>Media</span><span>(4)</span>
//                                     </li>
//                                     <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl max-min-end:text-lg tracking-normal font-semibold">
//                                         <span>Web Design</span><span>(11)</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         {/* Recent Posts */}
//                         <div className="recent flex flex-col">
//                             <h1 className="text-2xl text-default tracking-wide font-semibold">Recent Posts</h1>
//                             <div className="flex flex-col border px-4 my-4 bg-dark py-6 rounded-3xl">
//                                 <ul className="flex flex-col py-4 rounded-2xl gap-4 gap-y-8 max-min-end:text-lg bg-white">
//                                     <li className="cursor-pointer px-6 flex flex-col">
                                        
//                                         <div className="relative">
//                                             <Image
//                                                 src={img.img1[0]}
//                                                 width={500}
//                                                 height={500}
//                                                 alt={img.img1[1]}
                                                
//                                                 className="rounded-xl relative"
//                                             />
//                                             <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img1[4] }</h3>
//                                         </div>
//                                         <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img1[1] }</h1>
//                                     </li>
                                    
//                                     <li className="cursor-pointer px-6 flex flex-col">

//                                         <div className="relative">
//                                             <Image
//                                                 src={img.img2[0]}
//                                                 width={500}
//                                                 height={500}
//                                                 alt={img.img2[1]}

//                                                 className="rounded-xl relative"
//                                             />
//                                             <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img2[4]}</h3>
//                                         </div>
//                                         <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img2[1]}</h1>
//                                     </li>
//                                     <li className="cursor-pointer px-6 flex flex-col">

//                                         <div className="relative">
//                                             <Image
//                                                 src={img.img3[0]}
//                                                 width={500}
//                                                 height={500}
//                                                 alt={img.img3[1]}

//                                                 className="rounded-xl relative"
//                                             />
//                                             <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img3[4]}</h3>
//                                         </div>
//                                         <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img3[1]}</h1>
//                                     </li>
//                                     <li className="cursor-pointer px-6 flex flex-col">

//                                         <div className="relative">
//                                             <Image
//                                                 src={img.img4[0]}
//                                                 width={500}
//                                                 height={500}
//                                                 alt={img.img4[1]}

//                                                 className="rounded-xl relative"
//                                             />
//                                             <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img4[4]}</h3>
//                                         </div>
//                                         <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img4[1]}</h1>
//                                     </li>
//                                     <li className="cursor-pointer px-6 flex flex-col">

//                                         <div className="relative">
//                                             <Image
//                                                 src={img.img5[0]}
//                                                 width={500}
//                                                 height={500}
//                                                 alt={img.img5[1]}

//                                                 className="rounded-xl relative"
//                                             />
//                                             <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img5[4]}</h3>
//                                         </div>
//                                         <h1 className="text-default-gray hover:text-default transition-colors duration-300 text-2xl truncate">{img.img5[1]}</h1>
//                                     </li>

//                                 </ul>
//                             </div>
//                         </div>

//                         {/* Tags */}
//                         <div className="category flex flex-col">
//                             <h1 className="text-2xl text-default tracking-wide font-semibold">Tags</h1>
//                             <div className="flex border flex-wrap gap-6 px-4 my-4 flex-auto bg-dark py-6 rounded-3xl">
//                                 <Tag name="Best"/>
//                                 <Tag name="digital"/>
//                                 <Tag name="digital agency"/>
//                                 <Tag name="featured"/>
//                                 <Tag name="innovation"/>
//                                 <Tag name="marketing"/>
//                                 <Tag name="on sale"/>
//                                 <Tag name="product"/>
//                                 <Tag name="startup"/>
//                                 <Tag name="technology"/>
//                                 <Tag name="trendy"/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>

//         </>
//     )
// }

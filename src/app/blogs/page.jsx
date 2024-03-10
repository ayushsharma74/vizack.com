"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Blog from "@/components/blogCard";

const src = "/assets/background/marketing globe.png";
const img = {
    img1: ["/assets/background/blogs/stock.png", "How can I grow my stocks?","/assets/background/profile/p4.jpeg"," Gajender", "Feb 12, 2023"],
    img2: ["/assets/background/blogs/apps.jpg", "Applications that must be in every android mobile", "/assets/background/profile/p1.jpeg", "Jatin Jain", "Jun 2, 2023"],
    img3: ["/assets/background/blogs/hacking.jpg", "Hacking tips and tricks", "/assets/background/profile/p3.jpeg", "Farhan", "Jul 26, 2023"],
    img4: ["/assets/background/blogs/ml.jpeg", "Best sites to learn Machine Learning", "/assets/background/profile/p2.jpeg", "Ayush Sharma", "Sep 19, 2023"],
    img5: ["/assets/background/blogs/ai.jpg", "What is an Artificial Intelligence?", "/assets/background/profile/p4.jpeg", "Gajender", "Dec 29, 2023"],
    img6: ["/assets/background/blogs/strong foundation.jpg", "Startup needs strong foundation", "/assets/background/profile/p1.jpeg", "Jatin Jain", "Feb 21, 2024"],
}
export default function blogs() {
    return (
        <>
            {/* Header */}
            <div className="">
                <div className="w-full h-72 bg-default flex justify-between max-md-lg:h-64 transition-all max-md:h-52 max-sm:h-36">
                    <div className="w-fit h-fit">
                        <div className="h-fit w-fit">
                            <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" className="max-lg:text-8xl text-9xl text-white tracking-long font-extrabold mx-6 py-12 max-md-lg:text-7xl max-md:text-5xl max-min-sm:text-4xl max-min-sm:py-16">
                                BLOGS
                            </h1>

                        </div>

                        <div className="h-full w-full" data-aos="fade-left" data-aos-delay="150" data-aos-duration="500">
                            <ul className="text-white tracking-wider mx-8 max-sm:text-default-gray">
                                <Link href={"/"} className="text-white hover:text-default-gray tracking-wide font-bold max-sm:text-default">Home</Link>
                                &nbsp;&gt;&nbsp;
                                <Link href={"/blogs"} className="text-white hover:text-default-gray tracking-wide font-bold max-sm:text-default">Blogs</Link>
                            </ul>
                        </div>
                    </div>

                    <div className="w-ful h-full mx-16 max-w-[30rem] transition-all max-lg:max-w-[20rem] min-w-[20rem] max-md-lg:min-w-[17rem] max-md-lg:max-w-[18rem] max-md:min-w-[14rem] max-md:max-w-[15rem] max-sm:min-w-[11rem] max-min-sm:min-w-[9rem] max-min-end:hidden">
                        <Image
                            src={src}
                            height={500}
                            width={500}
                            style={{ width: "auto", height: "auto" }}
                            draggable={false}
                        />
                    </div>

                </div>

                <div data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500" className="text-default-gray mx-24 my-10 w-[50%] text-3xl max-lg:w-full max-lg:mx-0 max-lg:px-12 max-sm:my-16">A great headline mixed with a weak opening is like iniviting someone into tyour house, only to slam the door in their face as they approach.</div>
            </div>
            <main className="flex w-full h-fit max-lg:flex-col py-16 px-4 gap-2">
                <div className="left w-[60%] max-lg:w-full ">
                    <div className="card-holder flex flex-col gap-6 pl-32 max-lg:pl-6">
                        <Blog
                            blogImg={img.img1[0]}
                            profileImg={img.img1[2]}
                            profileName={img.img1[3]}
                            Time={img.img1[4]}
                            blogTitle={img.img1[1]}
                        />
                        <Blog
                            blogImg={img.img2[0]}
                            profileImg={img.img2[2]}
                            profileName={img.img2[3]}
                            Time={img.img2[4]}
                            blogTitle={img.img2[1]}
                        />
                        <Blog
                            blogImg={img.img3[0]}
                            profileImg={img.img3[2]}
                            profileName={img.img3[3]}
                            Time={img.img3[4]}
                            blogTitle={img.img3[1]}
                        />
                        <Blog
                            blogImg={img.img4[0]}
                            profileImg={img.img4[2]}
                            profileName={img.img4[3]}
                            Time={img.img4[4]}
                            blogTitle={img.img4[1]}
                        />
                        <Blog
                            blogImg={img.img5[0]}
                            profileImg={img.img5[2]}
                            profileName={img.img5[3]}
                            Time={img.img5[4]}
                            blogTitle={img.img5[1]}
                        />
                        <Blog
                            blogImg={img.img6[0]}
                            profileImg={img.img6[2]}
                            profileName={img.img6[3]}
                            Time={img.img6[4]}
                            blogTitle={img.img6[1]}
                        />
                    </div>
                </div>
                <div className="right py-6 pr-16  max-lg:pr-6 pl-6 max-lg:w-full rounded-xl w-[40%]">
                    <div className="container flex flex-col gap-y-8">
                        {/* <div className="search">
                            <h1 className="text-default text-2xl font-bold">Search</h1>
                            <div className="sear flex w-full">
                                <input type="text" className="text-xl w-full h-16 mt-4 relative rounded-full px-4 pr-16" name="search" placeholder="Search Here..." />
                                <i className="icofont-search p-6 bg-default text-white absolute right-0 hover:text-default-gray cursor-pointer rounded-full"></i>
                            </div>
                        </div>  */}
                        <div className="category flex flex-col">
                            <h1 className="text-2xl text-default tracking-wide font-semibold">Category</h1>
                            <div className="flex flex-col border px-4 my-4 bg-dark py-6 rounded-3xl">
                                <ul className="flex flex-col gap-4">
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl tracking-normal font-semibold">
                                        <span>Business Growth</span><span>(1)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl tracking-normal font-semibold">
                                        <span>Business Strategy</span><span>(5)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl tracking-normal font-semibold">
                                        <span>Insurance Consulting</span><span>(1)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl tracking-normal font-semibold">
                                        <span>Law Consulting</span><span>(3)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl tracking-normal font-semibold">
                                        <span>Media</span><span>(4)</span>
                                    </li>
                                    <li className="cursor-pointer bg-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-default-gray hover:to-white py-5 rounded-full px-6 flex justify-between text-xl tracking-normal font-semibold">
                                        <span>Web Design</span><span>(11)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="recent flex flex-col">
                            <h1 className="text-2xl text-default tracking-wide font-semibold">Recent Posts</h1>
                            <div className="flex flex-col border px-4 my-4 bg-dark py-6 rounded-3xl">
                                <ul className="flex flex-col py-4 rounded-2xl gap-4 bg-white">
                                    <li className="cursor-pointer px-6 flex flex-col">
                                        
                                        <div className="relative">
                                            <Image
                                                src={img.img1[0]}
                                                width={500}
                                                height={500}
                                                alt={img.img1[1]}
                                                
                                                className="rounded-xl relative"
                                            />
                                            <h3 className="absolute bottom-5 z-10 bg-dark px-2 py-1 text-xs left-3 text-default">{img.img1[4] }</h3>
                                        </div>
                                        <h1 className="text-default text-2xl truncate">{img.img1[1] }</h1>
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
                                        <h1 className="text-default text-2xl truncate">{img.img2[1]}</h1>
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
                                        <h1 className="text-default text-2xl truncate">{img.img3[1]}</h1>
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
                                        <h1 className="text-default text-2xl truncate">{img.img4[1]}</h1>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="category flex flex-col">
                            <h1 className="text-2xl text-default tracking-wide font-semibold">Category</h1>
                            <div className="flex border flex-wrap gap-6 px-4 my-4 flex-auto bg-dark py-6 rounded-3xl">
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    Best
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    digital
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    digital agency
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    featured
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    innovation
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    marketing
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    on sale
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    product
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    startup
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    technology
                                </h2>
                                <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-md tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
                                    trendy
                                </h2>


                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
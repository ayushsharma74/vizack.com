import React from "react";
import Link from "next/link";
import Image from "next/image";

const src = "/assets/background/marketing globe.png";
const img = {
    img1: ["/assets/background/blogs/stock.png", "How can I grow my stocks?","/assets/background/profile/p4.jpeg"," Gajender"],
    img2: ["/assets/background/blogs/apps.jpg", "Applications that must be in every android mobile", "/assets/background/profile/p1.jpeg","Jatin Jain"],
    img3: ["/assets/background/blogs/hacking.jpg", "Hacking tips and tricks", "/assets/background/profile/p3.jpeg","Farhan"],
    img4: ["/assets/background/blogs/ml.jpeg", "Best sites to learn Machine Learning", "/assets/background/profile/p2.jpeg","Ayush Sharma"],
    img5: ["/assets/background/blogs/ai.jpg", "What is an Artificial Intelligence?", "/assets/background/profile/p4.jpeg","Gajender"],
    img6: ["/assets/background/blogs/strong foundation.jpg", "Startup needs strong foundation", "/assets/background/profile/p1.jpeg", "Jatin Jain"],
}
// console.log(img.img1[0])
export default function Blogs() {
    return (
        <>
            {/* Header */}
            <div className="w-full h-72 bg-default flex justify-between max-md-lg:h-64 transition-all max-md:h-52 max-sm:h-36">
                <div className="w-fit h-fit">
                    <div className="h-fit w-fit">
                        <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" className="max-lg:text-8xl text-9xl text-white tracking-long font-extrabold mx-6 py-12 max-md-lg:text-7xl max-md:text-5xl max-min-sm:text-4xl max-min-sm:py-16">
                            BLOGS
                        </h1>

                    </div>

                    <div className="h-full w-full" data-aos="fade-left" data-aos-delay="150" data-aos-duration="500">
                        <ul className="text-white tracking-wider mx-8 max-sm:text-default-gray">
                            <Link href={"/"}  className="text-white hover:text-default-gray tracking-wide font-bold max-sm:text-default">Home</Link>
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
            
            {/* Main Body */}
            <main className="w-full h-fit mt-32">
                <div className="container w-fit m-auto">
                    <div className="box-container w-fit m-auto flex-wrap flex gap-12 px-16">
                        <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1500" className="box w-96 min-h-[40rem] h-fit border-2 flex flex-col justify-between rounded-lg border-default overflow-hidden border-spacing-2">
                            <div className="image h-48 w-full mb-3 object-cover">
                                <Image
                                    src={img.img1[0]}
                                    height={500}
                                    width={500}
                                    style={{ width: "auto", height: "auto" }}
                                    className=" object-cover min-h-60 max-h-60 min-w-full max-w-full  border border-default"
                                />
                            </div>
                            <div className="heading text-default font-bold tracking-wide text-center text-xl h-fit min-h-12 leading-[2rem] mx-2 my-4">
                                <h1>{img.img1[1]}</h1>
                            </div>
                            <div className="content">
                                <p className="text-default-gray h-[11rem] text-wrap my-4 -mt-4 mx-2 truncate">
                                    Launching a startup is an exhilarating journey filled with challenges, triumphs, and the pursuit of innovation. However, amidst the
                                    excitement, it's crucial to establish a strong foundation to ensure the long-term success and sustainability of your venture. In
                                    this blog post, we'll explore the essential steps every entrepreneur...
                                </p>
                            </div>
                            <div className="from w-full h-fit flex mt-2 py-2 px-3 justify-between bg-default">
                                <div className="pic w-fit h-fit rounded-full">
                                    <Image
                                        src={img.img1[2]}
                                        height={500}
                                        width={500}
                                        className="rounded-full w-16 h-16 object-cover"
                                    />
                                </div>
                                <div className="when mx-2 ">
                                    <div className="name mb-2">
                                        <h3 className="text-white font-bold tracking-wide">{img.img1[3]}</h3>
                                    </div>
                                    <i className="icofont-duotone icofont-calendar text-lg"></i><span className=" text-[0.8rem] mx-2 text-default-gray font-mono">26 Feb, 2024</span>
                                </div>

                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="50" data-aos-duration="1500" className="box w-96 min-h-[40rem] h-fit border-2 flex flex-col justify-between rounded-lg border-default overflow-hidden border-spacing-2">
                            <div className="image h-48 w-full mb-3 object-cover">
                                <Image
                                    src={img.img2[0]}
                                    height={500}
                                    width={500}
                                    style={{ width: "auto", height: "auto" }}
                                    className=" object-cover min-h-60 max-h-60 min-w-full max-w-full  border border-default"
                                />
                            </div>
                            <div className="heading text-default font-bold tracking-wide text-center text-xl h-fit min-h-12 leading-[2rem] mx-2 my-4">
                                <h1>{img.img2[1]}</h1>
                            </div>
                            <div className="content">
                                <p className="text-default-gray h-[11rem] text-wrap my-4 -mt-4 mx-2 truncate">
                                    Launching a startup is an exhilarating journey filled with challenges, triumphs, and the pursuit of innovation. However, amidst the
                                    excitement, it's crucial to establish a strong foundation to ensure the long-term success and sustainability of your venture. In
                                    this blog post, we'll explore the essential steps every entrepreneur...
                                </p>
                            </div>
                            <div className="from w-full h-fit flex mt-2 py-2 px-3 justify-between bg-default">
                                <div className="pic w-fit h-fit rounded-full">
                                    <Image
                                        src={img.img2[2]}
                                        height={500}
                                        width={500}
                                        className="rounded-full w-16 h-16 object-cover"
                                    />
                                </div>
                                <div className="when mx-2 ">
                                    <div className="name mb-2">
                                        <h3 className="text-white font-bold tracking-wide">{img.img2[3]}</h3>
                                    </div>
                                    <i className="icofont-duotone icofont-calendar text-lg"></i><span className=" text-[0.8rem] mx-2 text-default-gray font-mono">26 Feb, 2024</span>
                                </div>

                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="50" data-aos-duration="1500" className="box w-96 min-h-[40rem] h-fit border-2 flex flex-col justify-between rounded-lg border-default overflow-hidden border-spacing-2">
                            <div className="image h-48 w-full mb-3 object-cover">
                                <Image
                                    src={img.img3[0]}
                                    height={500}
                                    width={500}
                                    style={{ width: "auto", height: "auto" }}
                                    className=" object-cover min-h-60 max-h-60 min-w-full max-w-full  border border-default"
                                />
                            </div>
                            <div className="heading text-default font-bold tracking-wide text-center text-xl h-fit min-h-12 leading-[2rem] mx-2 my-4">
                                <h1>{img.img3[1]}</h1>
                            </div>
                            <div className="content">
                                <p className="text-default-gray h-[11rem] text-wrap my-4 -mt-4 mx-2 truncate">
                                    Launching a startup is an exhilarating journey filled with challenges, triumphs, and the pursuit of innovation. However, amidst the
                                    excitement, it's crucial to establish a strong foundation to ensure the long-term success and sustainability of your venture. In
                                    this blog post, we'll explore the essential steps every entrepreneur...
                                </p>
                            </div>
                            <div className="from w-full h-fit flex mt-2 py-2 px-3 justify-between bg-default">
                                <div className="pic w-fit h-fit rounded-full">
                                    <Image
                                        src={img.img3[2]}
                                        height={500}
                                        width={500}
                                        className="rounded-full w-16 h-16 object-cover"
                                    />
                                </div>
                                <div className="when mx-2 ">
                                    <div className="name mb-2">
                                        <h3 className="text-white font-bold tracking-wide">{img.img3[3]}</h3>
                                    </div>
                                    <i className="icofont-duotone icofont-calendar text-lg"></i><span className=" text-[0.8rem] mx-2 text-default-gray font-mono">26 Feb, 2024</span>
                                </div>

                            </div>
                        </div>
                        <div data-aos="zoom-in-right" data-aos-delay="50" data-aos-duration="1500" className="box w-96 min-h-[40rem] h-fit border-2 flex flex-col justify-between rounded-lg border-default overflow-hidden border-spacing-2">
                            <div className="image h-48 w-full mb-3 object-cover">
                                <Image
                                    src={img.img4[0]}
                                    height={500}
                                    width={500}
                                    style={{ width: "auto", height: "auto" }}
                                    className=" object-cover min-h-60 max-h-60 min-w-full max-w-full  border border-default"
                                />
                            </div>
                            <div className="heading text-default font-bold tracking-wide text-center text-xl h-fit min-h-12 leading-[2rem] mx-2 my-4">
                                <h1>{img.img4[1]}</h1>
                            </div>
                            <div className="content">
                                <p className="text-default-gray h-[11rem] text-wrap my-4 -mt-4 mx-2 truncate">
                                    Launching a startup is an exhilarating journey filled with challenges, triumphs, and the pursuit of innovation. However, amidst the
                                    excitement, it's crucial to establish a strong foundation to ensure the long-term success and sustainability of your venture. In
                                    this blog post, we'll explore the essential steps every entrepreneur...
                                </p>
                            </div>
                            <div className="from w-full h-fit flex mt-2 py-2 px-3 justify-between bg-default">
                                <div className="pic w-fit h-fit rounded-full">
                                    <Image
                                        src={img.img4[2]}
                                        height={500}
                                        width={500}
                                        className="rounded-full w-16 h-16 object-cover"
                                    />
                                </div>
                                <div className="when mx-2 ">
                                    <div className="name mb-2">
                                        <h3 className="text-white font-bold tracking-wide">{img.img4[3]}</h3>
                                    </div>
                                    <i className="icofont-duotone icofont-calendar text-lg"></i><span className=" text-[0.8rem] mx-2 text-default-gray font-mono">26 Feb, 2024</span>
                                </div>

                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" className="box w-96 min-h-[40rem] h-fit border-2 flex flex-col justify-between rounded-lg border-default overflow-hidden border-spacing-2">
                            <div className="image h-48 w-full mb-3 object-cover">
                                <Image
                                    src={img.img5[0]}
                                    height={500}
                                    width={500}
                                    style={{ width: "auto", height: "auto" }}
                                    className=" object-cover min-h-60 max-h-60 min-w-full max-w-full  border border-default"
                                />
                            </div>
                            <div className="heading text-default font-bold tracking-wide text-center text-xl h-fit min-h-12 leading-[2rem] mx-2 my-4">
                                <h1>{img.img5[1]}</h1>
                            </div>
                            <div className="content">
                                <p className="text-default-gray h-[11rem] text-wrap my-4 -mt-4 mx-2 truncate">
                                    Launching a startup is an exhilarating journey filled with challenges, triumphs, and the pursuit of innovation. However, amidst the
                                    excitement, it's crucial to establish a strong foundation to ensure the long-term success and sustainability of your venture. In
                                    this blog post, we'll explore the essential steps every entrepreneur...
                                </p>
                            </div>
                            <div className="from w-full h-fit flex mt-2 py-2 px-3 justify-between bg-default">
                                <div className="pic w-fit h-fit rounded-full">
                                    <Image
                                        src={img.img5[2]}
                                        height={500}
                                        width={500}
                                        className="rounded-full w-16 h-16 object-cover"
                                    />
                                </div>
                                <div className="when mx-2 ">
                                    <div className="name mb-2">
                                        <h3 className="text-white font-bold tracking-wide">{img.img5[3]}</h3>
                                    </div>
                                    <i className="icofont-duotone icofont-calendar text-lg"></i><span className=" text-[0.8rem] mx-2 text-default-gray font-mono">26 Feb, 2024</span>
                                </div>

                            </div>
                        </div>
                        <div data-aos="zoom-in-left" data-aos-delay="50" data-aos-duration="1500" className="box w-96 min-h-[40rem] h-fit border-2 flex flex-col justify-between rounded-lg border-default overflow-hidden border-spacing-2">
                            <div className="image h-48 w-full mb-3 object-cover">
                                <Image
                                    src={img.img6[0]}
                                    height={500}
                                    width={500}
                                    style={{ width: "auto", height: "auto" }}
                                    className=" object-cover min-h-60 max-h-60 min-w-full max-w-full  border border-default"
                                />
                            </div>
                            <div className="heading text-default font-bold tracking-wide text-center text-xl h-fit min-h-12 leading-[2rem] mx-2 my-4">
                                <h1>{img.img6[1]}</h1>
                            </div>
                            <div className="content">
                                <p className="text-default-gray h-[11rem] text-wrap my-4 -mt-4 mx-2 truncate">
                                    Launching a startup is an exhilarating journey filled with challenges, triumphs, and the pursuit of innovation. However, amidst the
                                    excitement, it's crucial to establish a strong foundation to ensure the long-term success and sustainability of your venture. In
                                    this blog post, we'll explore the essential steps every entrepreneur...
                                </p>
                            </div>
                            <div className="from w-full h-fit flex mt-2 py-2 px-3 justify-between bg-default">
                                <div className="pic w-fit h-fit rounded-full">
                                    <Image
                                        src={img.img6[2]}
                                        height={500}
                                        width={500}
                                        className="rounded-full w-16 h-16 object-cover"
                                    />
                                </div>
                                <div className="when mx-2 ">
                                    <div className="name mb-2">
                                        <h3 className="text-white font-bold tracking-wide">{img.img6[3]}</h3>
                                    </div>
                                    <i className="icofont-duotone icofont-calendar text-lg"></i><span className=" text-[0.8rem] mx-2 text-default-gray font-mono">26 Feb, 2024</span>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div> 
            </main>
        </>
    )
}
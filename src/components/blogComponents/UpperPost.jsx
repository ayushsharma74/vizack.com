"use client"
import Link from "next/link"
import Image from "next/image"

const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};


export default function UpperPost() {
    return (
        <div className="flex flex-col mb-7">
            {/* <div className="mb-5"><h1 className="font-bold text-3xl mb:text-4xl lg:text-5xl">Welcome to ViZack Enterprises. <br /> <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono">Explore our ideas</span> </h1></div> */}
            <div className="flex items-start flex-col md:flex-row lg:flex-row gap-5">
                {/* <Image src={"/assets/images/asset1.jpg"} alt="pic" /> */}
                <Image src={"/assets/blogs/seo.jpg"} alt="6 Advanced SEO Strategies That Help you Take your Online Presence to a New Level" width={250} height={250} loader={imgloader} className="w-1/2 hidden lg:block md:block" />
                <div className="w-full md:w-1/2  lg:w-1/2 flex items-start gap-4 flex-col">
                    <h1 className="font-semibold text-2xl">6 Advanced SEO Strategies That Help you Take your Online Presence to a New Level</h1>
                    <Link href={'/blogs/seo-strategies'}><p className="text-base font-serif">At ViZack Enterprises, we understand the significance of harnessing the power of SEO to propel your brand to new heights. With a blend of creativity, technical expertise, and data-driven insights.....</p></Link>
                    <Link href={'/blogs/seo-strategies'} className="underline decoration-2 hover:decoration-orange-500 transition-colors duration-300">Read More</Link>
                </div>
            </div>
        </div>
    )
}

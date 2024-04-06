// import { propagateServerField } from "next/dist/server/lib/render-server";
import Link from "next/link";
import Image from "next/image";

const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};

const toggleArrow = (e)=>{
    const bt = document.querySelector(".blog-title")
    e.target.children[0].classList.toggle("hidden")
}



export default function RecentFunction(props) {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mb-7">
        <Link href={props.route}><Image src={props.imgSrc} alt={props.title} width={250} height={250} loader={imgloader} loading="lazy" className="md:hidden lg:hidden w-full h-full" /></Link>
            <div className="flex items-start flex-col gap-4">
                <h1>{props.date} - <span className="text-orange-600 font-semibold">{props.category}</span></h1>
                <Link href={props.route}><h1 onMouseOver={toggleArrow} onMouseOut={toggleArrow} className="blog-title font-bold relative">{props.title} <span className="font-extrabold text-4xl absolute -top-3 transition hidden animate-arrow text-default">&rarr;</span></h1></Link>
                <Link href={props.route}><p className="text-sm">{props.disc}</p></Link>
                <Link href={props.route} className="underline decoration-2 hover:decoration-orange-500 hover:text-black transition-colors duration-150">Read More</Link>
            </div>
        </div>

    )
}
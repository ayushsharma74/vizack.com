// import { propagateServerField } from "next/dist/server/lib/render-server";
import Link from "next/link";

export default function RecentFunction(props) {
    return (

        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 mb-7">
            <img src={props.imgSrc} alt="" className="md:hidden lg:hidden w-full h-full" />
            <div className="flex items-start flex-col gap-4 ">
                <h1>{props.date} - <span className="text-orange-600 font-semibold">{props.category}</span></h1>
                <h1 className="font-bold ">{props.title}</h1>
                <Link href={props.route}><p className="text-sm">{props.disc}</p></Link>
                <Link href={props.route} className="underline decoration-2 hover:decoration-orange-500 hover:text-black transition-colors duration-150">Read More</Link>
            </div>
        </div>

    )
}
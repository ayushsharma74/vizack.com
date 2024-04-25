"use client"
import './blogpage.css'
import BlogTitle from '@/components/blogComponents/BlogTitle'
import Image from 'next/image'
import Link from 'next/link'

const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};

export default function BlogPage({params}) {
    return (
        <>
        <div className="bg-default w-full min-h-10 h-fit flex flex-wrap items-center px-5 py-2" >
            <h1 className="text-white hover:text-default-gray font-bold">
                <Link href={"/"}>Home &nbsp;</Link>
            </h1>
            <h1 className="text-white font-bold"> &gt;</h1>
            <h1 className="text-white hover:text-default-gray font-bold">
                <Link href={`/blogs`} >&nbsp; Blogs &nbsp;</Link>
            </h1>
            <h1 className="text-white font-bold"> &gt;</h1>
            <h1 className="text-white hover:text-default-gray font-bold truncate">
                <Link href={`/blogs/role-of-ai`} >&nbsp;  Unveiling the Marvels: The Role of AI in Digital Marketing</Link>
            </h1>
        </div>
            <div className='cont my-10'>
                <BlogTitle title={" Unveiling the Marvels: The Role of AI in Digital Marketing"} writer={"Gajender"} date={"21.04.2024"} category={"AI"}/>
            </div>
        </>
    );
}

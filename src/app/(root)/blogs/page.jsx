"use client"
import UpperPost from "@/components/blogComponents/UpperPost";
import RecentPost from "@/components/blogComponents/RecentPost";
import Sidebar from "@/components/blogComponents/Sidebar";
import '@/styles/blogs.css'
import Link from "next/link";
import { useState, useEffect } from "react";



export default function Blogs() {
  const [data, setData] = useState([])
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const timestamp = Date.parse(new Date().toString());
      const res = await fetch(`/api/getallposts?timestamp=${timestamp}`, {
        cache: 'no-store',
      })
      const data = await res.json()
      setData(data.data)
      console.log(data);
    })()
  }, [])

  console.log("Data in state",data);

  return (
    <>
      <div className="bg-default w-full min-h-10 h-fit py-2 flex flex-wrap items-center px-5">
        <h1 className="text-white hover:text-default-gray font-bold">
          <Link href={"/"}>Home &nbsp;</Link>
        </h1>
        <h1 className="text-white font-bold"> &gt;</h1>
        <h1 className="text-white hover:text-default-gray font-bold">
          <Link href={`/blogs`}>&nbsp; Blogs</Link>
        </h1>
      </div>
      <div className="cont my-10">
        <UpperPost />
        <h1 className="text-3xl font-serif underline decoration-2">Recent Posts</h1>
        <div className="flex">
          <div className="flex-5 mt-3">
            {data.map((blog) => (
              <RecentPost
                key={blog._id}
                title={blog.title}
                disc={blog.description}
                route={blog.slug}
                category={blog.category}
                imgSrc={blog.featImage}
                date={blog.publishDate}
              />
            ))}
            {/* {data.map((post) => (
              <Link href={`/blogs/${post.slug}`} key={post._id}>
                <h1>{post.title}</h1>
              </Link>
            ))} */}
          </div>

          <div className="flex-2 hidden flex-col gap-5 w-[55.5rem] lg:flex md:flex">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
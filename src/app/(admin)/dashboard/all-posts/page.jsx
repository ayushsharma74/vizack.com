"use client"
import React, { useEffect, useState } from 'react'

function AllPosts() {
    const [data,setData] = useState([])

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

  return (
    <div className=''>
        {data.map((post) => (
            <div class="space-y-8 lg:divide-y lg:divide-gray-100 px-16 shadow-lg py-5 overflow-scroll" key={post._id}>
            <div class="pt-8 sm:flex lg:items-end group ">
              <div>
                <span class="text-sm text-gray-500">August 20.20.21</span>
                <p class="mt-3 text-lg font-medium leading-6">
                  <a href="./blog-post.html" class="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl">{post.title} </a>
                </p>
                <p class="mt-2 text-lg text-gray-500">{post.description}</p>
              </div>
            </div>
              <button className='px-5 py-2 rounded hover:bg-red-400 bg-red-600'>Delete</button>
            </div>
        ))}
    
    </div>
  )
}

export default AllPosts
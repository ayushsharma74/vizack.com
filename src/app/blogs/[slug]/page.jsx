"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import '@/styles/blogs.css'
import BlogTitle from "@/components/blogComponents/BlogTitle"

export default function Posts({ params }) {

    const [data,setData] = useState([])

    useEffect(() => {
        (async () => {
            console.log("At client",params.slug);
            const res = await axios.get(`/api/getsinglepost/?slug=${params.slug}`)
            console.log("Data IN Useeffect",res);
            setData(res.data.data)
        })()
    },[])

    console.log(data);



    return (
        <div className='cont my-10'>
            <BlogTitle title={data.title} writer={"Farhan Ahmad Khan"} date={"23.3.2024"} category={"DATA SCIENCE"}/>
            <div dangerouslySetInnerHTML={{__html: data.html}} />
        </div>
    )
}
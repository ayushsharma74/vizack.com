"use client"
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import '@/styles/blogs.css'

export default function Editor() {
  const [html, setHTML] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)


  // cloudinary.config({ 
  //   cloud_name: 'ayushsharma', 
  //   api_key: '838424447111743', 
  //   api_secret: 'bqWfv0IO24aqAQE9RlgU4cGb7nI' 
  // });

  const cloudName = 'ayush';
  const apiKey = '668891823293998';
  const apiSecret = 'cOcu1KZeJFOpzMYj-Jp5jnrN3qQ';
  const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
  const timestamp = Math.floor(Date.now() / 1000);
  //   const signature = require('crypto-js').HmacSHA1(`timestamp=${timestamp}&api_key=${apiKey}`, apiSecret).toString();



  // Creates a new editor instance.
  const editor = useCreateBlockNote({ uploadFile });


  async function uploadFile(file) {
    const body = new FormData();
    body.append("file", file);

   try {
     const res = await axios.post("/api/upload-image", body)
     console.log("response",res.data.result.url);
     return res.data.result.url
   } catch (error) {
    console.log(error);
   }
  }


  const onChange = async () => {
    // Converts the editor's contents from Block objects to HTML and store to state.
    const html = await editor.blocksToHTMLLossy(editor.document);
    console.log(html);
    setHTML(html);
  };

  useEffect(() => {
    let newSlug = title.replace(/\s+/g, '-').toLowerCase();
    setSlug(newSlug)
  }, [title])

  async function onsubmit() {
    console.log(image);
    try {
      setDescription(prev => prev + '...')
      const body = new FormData()
      body.append('html',html)
      body.append('title',title)
      body.append('slug',slug)
      body.append('description',description)
      body.append('featImage',image)
      const load = toast.loading("Posting...")
      await axios.post("/api/addpost", body)
      toast.remove(load)
      toast.success("Uploaded")
    } catch (error) {
      toast.error("Post Upload Failed")
    }
  }



  // Renders the editor instance using a React component.
  return (
    <div className="cont mt-4">
    
      <input type="text" placeholder="Title" className="block p-4 text-2xl w-full"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        
        />
        <h1 className="text-sm text-gray-600">Slug: {slug}</h1>
      <textarea type="text" placeholder="Description" className="block p-4 text-xl w-full mb-4" maxLength={'155'}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        

      />
      <input type="file" name="" id="" onChange={e => setImage(e.target.files[0])}/>

      <BlockNoteView editor={editor}
        onChange={onChange}
      />
      <button className="py-1 mt-3 px-5 rounded bg-orange-600 hover:bg-orange-400" onClick={onsubmit}>Post</button>
      </div>
  );
}
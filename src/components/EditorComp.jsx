"use client"
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Editor() {
  const [html, setHTML] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("")


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
    // const body = new FormData();
    // body.append("file", file.body.path);
    console.log(file);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('timestamp', timestamp);
    formData.append('api_key', apiKey);
    formData.append('signature', signature);

   await axios.post(uploadUrl, formData)
  .then(response => {
    console.log('Image uploaded successfully:', response.data);
    return response.url
  })
  .catch(error => {
    console.error('Error uploading image:', error.message);
  });
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
    try {
      console.log({ html: html, title: title, slug: slug });
      const load = toast.loading("Sending...")
      await axios.post("/api/addpost",{ "html": html, "title": title, "slug": slug})
      toast.remove(load)
      toast.success("Uploaded")
    } catch (error) {
      toast.error("Post Upload Failed")
    }
  }



  // Renders the editor instance using a React component.
  return (
    <>
      <input type="text" placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value)
        }}

      />
      <input type="text" placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value)
        }}

      />
      <BlockNoteView editor={editor}
        onChange={onChange}
      />
      <h1>html: {html}</h1>
      <h1>Slug: {slug}</h1>
      <button onClick={onsubmit}>Send</button>
    </>
  );
}
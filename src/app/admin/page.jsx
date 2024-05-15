"use client"
// import {v2 as cloudinary} from 'cloudinary'
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";
import { CldImage } from 'next-cloudinary';
import axios from "axios";

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

  const signature = require('crypto-js').HmacSHA1(`timestamp=${timestamp}&api_key=${apiKey}`, apiSecret).toString();


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

    // const ret = await fetch("https://api.cloudinary.com/v1_1/ayushsharma/upload", {
    //   method: "POST",
    //   body: body,
    // });

    // console.log("Response", ret);

    // const res = await cloudinary.uploader.upload(file,
    //   {
    //       resource_type: "auto"
    //   })
    //   console.log(res);

    //   return res.url

    // return (await ret.json()).data.url.replace(
    //   "tmpfiles.org/",
    //   "tmpfiles.org/dl/"
    // );
  }


  const onChange = async () => {
    // Converts the editor's contents from Block objects to HTML and store to state.
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHTML(html);
  };

  useEffect(() => {
    let newSlug = title.replace(/\s+/g, '-').toLowerCase();
    setSlug(newSlug)
  }, [title])

  function onsubmit() {
    console.log({ html: html, title: title, slug: slug });
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
      <CldImage
        src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
        width="500" // Transform the image: auto-crop to square aspect_ratio
        height="500"
        crop={{
          type: 'auto',
          source: true
        }}
      />
    </>
  );
}

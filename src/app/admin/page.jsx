"use client"

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";

export default function Editor() {
  const [html, setHTML] = useState("");
  const [title, setTitle] = useState("");
  const [slug,setSlug] = useState("");
  const [description,setDescription] = useState("")


  // Creates a new editor instance.
  const editor = useCreateBlockNote({uploadFile});


  async function uploadFile(file) {
    const body = new FormData();
    body.append("file", file);
    console.log(file);
   
    const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
      method: "POST",
      body: body,
    });
    return (await ret.json()).data.url.replace(
      "tmpfiles.org/",
      "tmpfiles.org/dl/"
    );
  }


  const onChange = async () => {
    // Converts the editor's contents from Block objects to HTML and store to state.
    const html = await editor.blocksToHTMLLossy(editor.document);
    setHTML(html);
  };

  useEffect(()=> {
      let newSlug = title.replace(/\s+/g, '-').toLowerCase();
      setSlug(newSlug)
  },[title])

  function onsubmit(){
    console.log({html: html, title: title, slug:slug});
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

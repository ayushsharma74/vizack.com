// import Editor from "@/components/EditorComp";

import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/EditorComp"), { ssr: false });

export default function Page() {
  return (
    <div>
      <Editor />
    </div>
  )
}
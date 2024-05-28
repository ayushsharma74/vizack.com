import '@/styles/globals.css'
import Link from 'next/link';

export default function DashboardLayout({ children }) {

  return (
    <>
      <html>
        <body className='flex flex-row h-screen w-full fixed'>
          <section className="w-[20%] h-screen gap-3 p-10 bg-black flex flex-col">
            <Link href={"/dashboard"} className='px-6 text-white hover:bg-white hover:text-black flex items-center justify-center py-2' >Home</Link>
            <Link href={"/dashboard/all-posts"} className='px-6 text-white hover:bg-white hover:text-black flex items-center justify-center py-2' >Edit Posts</Link>
            <Link href={"/dashboard/add-new-post"} className='px-6 text-white hover:bg-white hover:text-black flex items-center justify-center py-2' >Post New</Link>
          </section>
          <section className="w-[80%] h-screen overflow-y-scroll">
          {children}
          </section>
        </body>
      </html>
    </>
  );
}
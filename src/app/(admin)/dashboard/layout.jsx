import Sidebar from '@/components/Dashboard/Sidebar';
import '@/styles/globals.css'
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';
export default function DashboardLayout({ children }) {

  return (
    <>
      <html>
        <body className='flex flex-row h-screen w-full fixed'>
        <NextTopLoader showSpinner={false} color="orange"/>
          <Sidebar />
          <section className="w-[80%] h-screen overflow-y-scroll">
          <Toaster position="bottom-left"/>
          {children}
          </section>
        </body>
      </html>
    </>
  );
}
"use client"
import { Anton } from 'next/font/google';
import Card from "@/components/Card"


const anton = Anton({ subsets: ['latin'],weight: "400" });


// export default function Home() {
//   return (
//     <>
//       <div className="h-screen w-full flex-col flex justify-center items-center" >
//         <div className="h-[9.375rem] w-[36.625rem] bg-transparent mr-[21.5rem]">
//           <main className='bg-green-500'>
//             <h1 className='text-6xl mb-2'>Hi,we're ViZack Enterprises</h1>
//           </main>
//            <h1 className='text-4xl'>We're The Experts Of</h1>
//          </div>
//          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-[49.5rem]">
//           Get In Touch
//        </button>
//        </div >
      
//        <div className='h-screen w-full bg-red-300 p-10'>
//          <main className={anton.className}>
//          <h1 className='text-5'>Our Services.</h1>
//          </main>
//        </div>
//      </>
//    );
//  }
export default function home(){
  
  return (
    <>
      <div className="h-screen w-full flex-col flex justify-center items-center">
          <div className="h-[9.375rem] w-[36.625rem] bg-transparent mr-[21.5rem] mb-[11rem]">
            <main className={anton.className}>
              <h1 className='text-5xl mb-2'>Hi,we're <font className="text-orange-500">ViZack Enterprises</font></h1>
            </main>
            <font className={anton.className}>
             <h1 className='text-4xl mt-3'>We're The <em className='normal font-serif'> Experts </em> of</h1>
             </font>
          </div>
           <button className="bg-transparent hover:bg-[#f2932f] text-[#f2932f] font-semibold hover:text-white py-2 px-5 border border-[#f2932f] hover:border-transparent rounded mr-[49.5rem] absolute bottom-[13.75rem] transition ease-in-out duration-300">
            Get in touch
         </button>
         </div >     
        
        <main className={anton.className}>
        <h1 className='ml-10 border-b-2 text-5xl text-[#f2932f]'>Our services.</h1>
        </main>
        <div className='h-[100%] w-[100%] flex justify-center space-x-10 mt-10'>
      <Card />
      <Card />
      <Card />

      </div>
      
    </>
  )
}
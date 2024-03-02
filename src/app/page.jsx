"use client"
import { Anton } from 'next/font/google';
import Card from "@/components/Card"
import Mainpage from '@/components/Frontpage';


const anton = Anton({ subsets: ['latin'], weight: "400" });


// export default function Home() {
//   return (
//     <>
//       <div className="h-screen w-full flex-col flex justify-center items-center" >
//         <div className="h-[9.375rem] w-[36.625rem] bg-transparent mr-[21.5rem]">
//           <main className='bg-green-500'>
//             <h1 className='text-6xl mb-2'>Hi,we&apos;re ViZack Enterprises</h1>
//           </main>
//            <h1 className='text-4xl'>We&apos;re The Experts Of</h1>
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
{/* <div className="h-screen w-full flex-col flex justify-center items-center">
    <div className="h-[9.375rem] w-[36.625rem] bg-transparent mr-[21.5rem] mb-[11rem]">
      <main className={anton.className}>
        <h1 className='text-5xl mb-2'>Hi,we&apos;re <font><span class name="text-default">V</span>i<span class name="text-default">Z</span>ack Enterprises</font></h1>
      </main>
      <font className={anton.className}>
       <h1 className='text-4xl mt-3'>We&apos;re The <em className='normal font-serif'> Experts </em> of <Typewriter words={['Web development','Data analytics','Strategic sales','Brand building']} cursor='true' loop='false'/></h1>
       </font>
    </div>
     <button className="bg-transparent hover:bg-[#f2932f] text-[#f2932f] font-semibold hover:text-white py-2 px-5 border border-[#f2932f] hover:border-transparent rounded mr-[49.5rem] absolute bottom-[13.75rem] transition ease-in-out duration-300">
      Get in touch
   </button>
   </div >      */}
export default function home() {

  return (
    <>
      <Mainpage />

      <section class="text-gray-600 body-font">
        <div class="px-5 py-24 mx-auto bg-gray-900">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-default">Our Services</h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-white">where your success is our passion,
              where commitment meets excellence.</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-900 bg-gray-200 p-6 rounded-lg hover:border-white">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Service Title</h2>
                <p class="leading-relaxed text-base text-gray-900">fjdlsdajd Rndom asentecne ankdkjasjldjdafjkdfnlknkdnF;DN</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-900 p-6 rounded-lg bg-gray-200 hover:border-gray-200">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg class="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>

                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Service Title</h2>
                <p class="leading-relaxed text-base">fjdlsdajd Rndom asentecne ankdkjasjldjdafjkdfnlknkdnF;DN</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-900 p-6 rounded-lg bg-gray-200 hover:border-gray-200">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Service Title</h2>
                <p class="leading-relaxed text-base">fjdlsdajd Rndom asentecne ankdkjasjldjdafjkdfnlknkdnF;DN</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-900 p-6 rounded-lg bg-gray-200 hover:border-gray-200">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Service Title</h2>
                <p class="leading-relaxed text-base">fjdlsdajd Rndom asentecne ankdkjasjldjdafjkdfnlknkdnF;DN</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-900 p-6 rounded-lg bg-gray-200 hover:border-gray-200">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Service Title</h2>
                <p class="leading-relaxed text-base">fjdlsdajd Rndom asentecne ankdkjasjldjdafjkdfnlknkdnF;DN</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-900 p-6 rounded-lg bg-gray-200 hover:border-gray-200">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Service Title</h2>
                <p class="leading-relaxed text-base">fjdlsdajd Rndom asentecne ankdkjasjldjdafjkdfnlknkdnF;DN</p>
              </div>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button>
        </div>
      </section>



      {/*about us*/}

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div class="h-96 w-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto justify-center">
                <img src="https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww" loading="lazy" alt="Photo by Martin Sanchez" class="h-full w-full object-center object-contain" />
              </div>
            </div>

            <div class="md:pt-8">
              <p class="text-center font-bold text-default md:text-left">Our Story</p>

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">About Us</h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion,
                where commitment meets excellence. At ViZack Enterprises, we pride

                ourselves on being more than just a startup organization – we're a
                dedicated team of professionals driven by a singular mission: to provide
                unparalleled customer service and empower small businesses to achieve
                remarkable growth.<br /><br />
              </p>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Learn More</button>

            </div>
          </div>
        </div>
      </div>



      {/*fun facts*/}


      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="mb-8 md:mb-12">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Team by the numbers</h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"></p>
          </div>


          <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">

            <div class="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
              <div class="text-xl font-bold text-default sm:text-2xl md:text-3xl">200</div>
              <div class="text-sm font-semibold sm:text-base">People</div>
            </div>

            <div class="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-default sm:text-2xl md:text-3xl">500+</div>
              <div class="text-sm font-semibold sm:text-base">People</div>
            </div>


            <div class="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-default sm:text-2xl md:text-3xl">1000+</div>
              <div class="text-sm font-semibold sm:text-base">Happy clients</div>
            </div>



            <div class="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 md:p-8">
              <div class="text-xl font-bold text-default sm:text-2xl md:text-3xl">47+</div>
              <div class="text-sm font-semibold sm:text-base">Projects</div>
            </div>

          </div>
        </div>
      </div>



      {/*Testimonials */}

      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

          <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">

            <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div class="text-center text-gray-600">“review sentence random dsbajdsn; sndo;anfjd;nakf;n a;on fdsoknafjkdlsanfjklasn f; nfdj;sanfakl.”</div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src="bdjka://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Naveen Ghai</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CEO / Datadrift</p>
                </div>
              </div>
            </div>



            <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div class="text-center text-gray-600">“review sentence random dsbajdsn; sndo;anfjd;nakf;n a;on fdsoknafjkdlsanfjklasn f; nfdj;sanfakl.”</div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src="bdjka://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Farhan Khan</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CFO / Dashdash</p>
                </div>
              </div>
            </div>



            <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div class="text-center text-gray-600">“review sentence random dsbajdsn; sndo;anfjd;nakf;n a;on fdsoknafjkdlsanfjklasn f; nfdj;sanfakl.”</div>

              <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img src="bdjka://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
                </div>

                <div>
                  <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Ayush Sharma</div>
                  <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CTO / Uptime</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/*Get in contact*/}

      <div class="bg-gray-900 py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-default md:mb-6 lg:text-3xl">Get in touch</h2>


          </div>



          <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label for="first-name" class="mb-2 inline-block text-sm text-white sm:text-base">Name*</label>
              <input name="first-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div>
              <label for="last-name" class="mb-2 inline-block text-sm text-white sm:text-base">Phone</label>
              <input name="last-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div class="sm:col-span-2">
              <label for="company" class="mb-2 inline-block text-sm text-white sm:text-base">Company</label>
              <input name="company" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="mb-2 inline-block text-sm text-white sm:text-base">Email*</label>
              <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div class="sm:col-span-2">
              <label for="subject" class="mb-2 inline-block text-sm text-white sm:text-base">Subject*</label>
              <input name="subject" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="mb-2 inline-block text-sm text-white sm:text-base">Feedback*</label>
              <textarea name="message" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
            </div>

            <div class="flex items-center justify-between sm:col-span-2">
              <button class="inline-block rounded-lg bg-default px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-500 focus-visible:ring active:bg-orange-400 md:text-base">Send</button>

              <span class="text-sm text-gray-500">*Required</span>
            </div>

            {/*<p class="text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>*/}
          </form>

        </div>
      </div>


    </>
  )
}
import React from 'react'
import '@/styles/globals.css'

const contact = () => {
  return (
    <>
      <section className="bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-40"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114542.80185929636!2d78.19089894999999!3d26.21415585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709192975985!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-default relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Gwalior, Madhya Pradesh</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">vizackenterprises@gmail.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+91-9826258659</p>
                <p className="leading-relaxed">+91-7697717977</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-default text-lg mb-1 font-medium title-font">Contact Us</h2>
            <p className="tracking-wider leading-relaxed mb-5 text-white">Send us a personalised email!</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white font-bold tracking-wider bg-default py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg active:bg-orange-300">Submit</button>
            <p className="text-xs text-white mt-3">Thank you for reaching out! we will soon get back to you.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default contact

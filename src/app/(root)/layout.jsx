import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/icofont.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from 'nextjs-toploader';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Footer from "@/components/Footer";
import Padding from "@/components/topPadding";
// import ToastProvider from "@/components/ToastProvider";
export const dynamic = 'force-dynamic'
import { Toaster } from "react-hot-toast";
// import { url } from "inspector";
const logo = "/assets/logo/footer.png";
export const metadata = {
  title: "ViZack Enterprises",
  description: "Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, where commitment meets excellence. At ViZack Enterprises, we pride ourselves on being more than just a startup organization - we're a dedicated team of professionals driven by a singular mission: to provide unparalleled customer service and empower small businesses to achieve remarkable growth.",
  openGraph:{
    title: "ViZack Enterprises Pvt Ltd",
    author: "ViZack Enterprises Pvt Ltd",
    images: [{url: logo}],
    url: "https://www.vizackenterprises.com",
    description: "Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, where commitment meets excellence. At ViZack Enterprises, we pride ourselves on being more than just a startup organization - we're a dedicated team of professionals driven by a singular mission: to provide unparalleled customer service and empower small businesses to achieve remarkable growth.",
    type: "website",
    locale: "en_US",
  },
  twiter: {
    card: "summary_large_image",
    title: "ViZack Enterprises Pvt Ltd",
    description: "Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, where commitment meets excellence. At ViZack Enterprises, we pride ourselves on being more than just a startup organization - we're a dedicated team of professionals driven by a singular mission: to provide unparalleled customer service and empower small businesses to achieve remarkable growth.",
    url: "https://twitter.com/ViZackEnterpise",
    images: [{url: logo}],
  },
  robots:{
    url: "/robots.txt"
  },
  icons: {
    icon: logo
  },
  keywords: "ViZack, vizack, enterprises, vizack enterprises, pvt, Pvt, ltd, Ltd, vizack enterprises pvt,vizack enterprises pvt ltd, the ViZack, Digital, marketing, digital marketing, website, web, development, web development, website development, hosting, create website, make website, want digital, want digital marketing"
};

export default function RootLayout({ children }) {
  
  return (
    <>
      <html>
      {/* <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="canonical" href="https://www.vizackenterprises.com" />
        <link rel="alternate" href="https://www.vizackenterprises.com" hreflang="x-default" />
        <link rel="alternate" href="https://www.vizackenterprises.com" hreflang="en-us" />
      </head> */}
      <body className="max-w-full overflow-x-hidden">
        {/* <ToastProvider> */}
          <NextTopLoader showSpinner={false} color="orange"/>
          <Toaster position="bottom-left"/>
           <Padding />
          <Navbar /> 
          {children}
          <Footer />
          
        {/* </ToastProvider> */}
        <SpeedInsights />
        <Analytics />
      </body>
      </html>
    </>
  );
}
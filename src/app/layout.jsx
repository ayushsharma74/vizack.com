import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/icofont.css"
import Navbar from "@/components/Navbar";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {

  title: "Vizack Enterprises",
  description: `Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, 
where commitment meets excellence. At ViZack Enterprises, we pride 
ourselves on being more than just a startup organization - we're a 
dedicated team of professionals driven by a singular mission: to provide 
unparalleled customer service and empower small businesses to achieve 
remarkable growth. `,
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="max-w-full overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
{/*         <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" /> */}
        <meta name="author" content="ViZack Enterprises Pvt Ltd" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ViZack Enterprises Pvt Ltd" />
        <meta name="twitter:description" content=`Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, 
where commitment meets excellence. At ViZack Enterprises, we pride 
ourselves on being more than just a startup organization - we're a 
dedicated team of professionals driven by a singular mission: to provide 
unparalleled customer service and empower small businesses to achieve 
remarkable growth.` />
        <meta name="twitter:image" content="/assets/logo/logo.png" />
        <meta name="twitter:url" content="https://twitter.com/ViZackEnterpise" />
        <meta property="og:title" content="ViZack Enterprises Pvt Ltd" />
        <meta property="og:description" content=`Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, 
where commitment meets excellence. At ViZack Enterprises, we pride 
ourselves on being more than just a startup organization - we're a 
dedicated team of professionals driven by a singular mission: to provide 
unparalleled customer service and empower small businesses to achieve 
remarkable growth.` />
        <meta property="og:image" content="/assets/logo/logo.png">
        <meta property="og:url" content="https://www.vizackenterprises.com">
        <meta property="og:type" content="website">
        <meta property="og:locale" content="en_US">
        <meta name="keywords" 
        content="
          ViZack, vizack, enterprises, vizack enterprises, pvt, Pvt, ltd, Ltd, vizack enterprises pvt,vizack enterprises pvt ltd, the ViZack, Digital, marketing, digital marketing,
          website, web, development, web development, website development, hosting, create website, make website, want digital, want digital marketing
        ">
        <link rel="canonical" href="https://www.vizackenterprises.com">
        <link rel="alternate" href="https://www.vizackenterprises.com" hreflang="x-default">
        <link rel="alternate" href="https://www.vizackenterprises.com" hreflang="en-us">
        <link rel="shortcut icon" href="/assets/logo/logo.webp" type="image/x-icon" />
      </head>
      <body className="max-w-full overflow-x-hidden">
        <ToastProvider>
        <NextTopLoader showSpinner={false} color="orange"/>
        <Navbar />
        {children}
        <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

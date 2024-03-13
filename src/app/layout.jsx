import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/icofont.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "Vizack Enterprises",
  description: "Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, where commitment meets excellence. At ViZack Enterprises, we pride ourselves on being more than just a startup organization - we're a dedicated team of professionals driven by a singular mission: to provide unparalleled customer service and empower small businesses to achieve remarkable growth.",
  ogTitle: "ViZack Enterprises Pvt Ltd",
  ogDescription: "Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, where commitment meets excellence. At ViZack Enterprises, we pride ourselves on being more than just a startup organization - we're a dedicated team of professionals driven by a singular mission: to provide unparalleled customer service and empower small businesses to achieve remarkable growth.",
  ogImage: "/assets/logo/logo.png",
  ogUrl: "https://www.vizackenterprises.com",
  ogType: "website",
  ogLocale: "en_US",
  author: "ViZack Enterprises Pvt Ltd",
  twitterCard: "summary_large_image",
  twitterTitle: "ViZack Enterprises Pvt Ltd",
  twitterDescription: "Welcome to ViZack Enterprises Pvt Ltd - where your success is our passion, where commitment meets excellence. At ViZack Enterprises, we pride ourselves on being more than just a startup organization - we're a dedicated team of professionals driven by a singular mission: to provide unparalleled customer service and empower small businesses to achieve remarkable growth.",
  twitterImage: "/assets/logo/logo.png",
  twitterUrl: "https://twitter.com/ViZackEnterpise",
  robots: "index, imageindex, follow, max-snippet:50, max-video-preview:10, max-image-preview:large, nocache",
  robotsUrl: "/robots.txt",
  keywords: "ViZack, vizack, enterprises, vizack enterprises, pvt, Pvt, ltd, Ltd, vizack enterprises pvt,vizack enterprises pvt ltd, the ViZack, Digital, marketing, digital marketing, website, web, development, web development, website development, hosting, create website, make website, want digital, want digital marketing"
};

export default function RootLayout({ children }) {
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="canonical" href="https://www.vizackenterprises.com" />
        <link rel="alternate" href="https://www.vizackenterprises.com" hreflang="x-default" />
        <link rel="alternate" href="https://www.vizackenterprises.com" hreflang="en-us" />
        <link rel="icon" href="/assets/logo/logo.png" />
      </Head>
      <body className="max-w-full overflow-x-hidden">
        <ToastProvider>
          <NextTopLoader showSpinner={false} color="orange"/>
          <Navbar />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </>
  );
}

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

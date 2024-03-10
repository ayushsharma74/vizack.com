import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/icofont.css"
import Navbar from "@/components/Navbar";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/Footer";

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
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/logo/logo.webp" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} color="orange"/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

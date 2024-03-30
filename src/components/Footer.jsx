import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return(
      <>
      <svg className="w-full lg:h-24 h-12 " viewBox="10 0 750 30">
        <path d="M0 50 Q 100 30 400 70 T 800 50 " stroke="#111827" fill="none" stroke-width="100" />
      </svg>
        <footer className="w-full h-fit px-4 flex justify-center flex-wrap gap-8 py-6 pb-16 bg-[#111827] max-xl:grid max-xl:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-16 max-sm:justify-items-start max-xl:justify-items-center">
          <div className="vi flex flex-col gap-20 mr-10 max-xl:mr-0">
            <div className="logo flex gap-4 items-center">
              <Image 
              src={"/assets/logo/footer.png"}
              width={50}
              height={50}
              />
              <h1 className="text-default font-bold tracking-wide text-xl">ViZack Enterprises</h1>
            </div>
            <div className="">
              <h3 className="text-default font-semibold tracking-wide">ViZack Enterprises</h3>
              <p className="text-default-gray text-wrap"><sup>&copy;</sup>Copyright 2024. All Rights Reserved by ViZack Enterprises.</p>
            </div>

          </div>

          

          <div className="flex flex-col gap-4">
            <h1 className="text-default uppercase font-semibold text-lg px-6 max-sm:pl-0">Company</h1>
            <div className="div">
              <ul className="flex flex-col px-4 leading-9">
                <li><Link className="text-default-gray hover:text-white text-md" href={"/about"}>About Us</Link></li>
                <li><Link className="text-default-gray hover:text-white text-md" href={"/blogs"}>Blogs</Link></li>
                <li><Link className="text-default-gray hover:text-white text-md" href={"/"}>Intern With Us</Link></li>
                <li><Link className="text-default-gray hover:text-white text-md" href={"/"}>Career Options</Link></li>
                <li><Link className="text-default-gray hover:text-white text-md" target="_blank" rel="noopener noreferrer" href={"http://wa.me/+919826258659"}>Customer Support</Link></li>
              </ul> 
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-default font-semibold text-lg uppercase px-2 max-sm:px-0">Legals</h1>
            <ul className="flex flex-col px-4 leading-9">
              <li><Link target="_blank" rel="noopener noreferrer" className="text-default-gray hover:text-white text-md" href={"https://docs.google.com/document/d/e/2PACX-1vSM1HbylMnlDx_xcDRx7qC5yui2Dw3zC2hPMnkl8on7sVDCV17SXHCFMpCrenccAiUT6mQCKcdv9hka/pub"}>Terms &amp; Conditions</Link></li>
              <li><Link target="_blank" rel="noopener noreferrer" className="text-default-gray hover:text-white text-md" href={"https://docs.google.com/document/d/e/2PACX-1vR9iaLnYhKATOLnNyREKE_TER60o2-TMu14efif_6QEIgpclwqcL0Wi64OEele0fkH-2-Gbng94BFD4/pub"}>Privacy Policy</Link></li>
              <li><Link target="_blank" rel="noopener noreferrer" className="text-default-gray hover:text-white text-md" href={"/"}>License</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-default uppercase font-semibold text-lg px-8 max-sm:pl-0">Connect With Us</h1>
            <div className="div">
            <ul className="flex flex-col px-4 py-1 leading-9 border-l-2 max-xl:border-none border-default-gray">
              <li><Link target="_blank" rel="noopener noreferrer" className="text-default-gray hover:text-white text-md px-2" href={"tel:%20+919826258659"}><i className="icofont-phone-circle hover:text-default text-2xl"> <span className="text-lg relative hover:text-white -top-1">+91 9826258659</span></i></Link></li>
              <li><Link target="_blank" rel="noopener noreferrer" className="text-default-gray hover:text-white text-md px-2" href={"mailto:info@vizackenterprises.com"}><i className="icofont-send-mail hover:text-default text-2xl"> <span className="text-lg relative hover:text-white -top-1">Info@ViZackEnterprises.com</span></i></Link></li>
              <ul className="flex gap-4 px-4 leading-9">
                <li><Link target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/vizackenterprises"}><i className="text-default-gray hover:text-white text-2xl icofont-linkedin"></i></Link></li>
                <li><Link target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/vizackenterprise"}><i className="text-default-gray hover:text-white text-2xl icofont-facebook"></i></Link></li>
                <li><Link target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/vizack.enterprises/"}><i className="text-default-gray hover:text-white text-2xl icofont-instagram"></i></Link></li>
                <li><Link target="_blank" rel="noopener noreferrer" href={"https://www.youtube.com/@ViZackEnterprises"}><i className="text-default-gray hover:text-white text-2xl icofont-youtube-play"></i></Link></li>
                <li><Link target="_blank" rel="noopener noreferrer" href={"https://twitter.com/ViZackEnterpise"}><i className="text-default-gray hover:text-white text-2xl icofont-x"></i></Link></li>
              </ul>
            </ul>
            </div>
          </div>

         

          
        </footer>
</>
    );
}

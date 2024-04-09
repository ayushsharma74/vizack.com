"use client"
import Link from "next/link";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Cabin_Condensed } from 'next/font/google';
import { usePathname } from "next/navigation";

const logo = "/assets/logo/vizack.webp"
const cabin = Cabin_Condensed({subsets: ['latin'] , weight: '700'})

export default function Navbar() {
    useEffect(() => {
        AOS.init({})
    }, []);
    let z = 0;

    const clickCall = (e) => {
        let list = e.target.parentNode.previousElementSibling.children[0].children;
        console.log(list)
        const li = Array.from(list)
        e.target.parentElement.classList.remove("aos-animate")
        if (window.innerWidth < 1024 && z === 0 && e.target.classList.contains("icofont-navigation-menu")) {
            setTimeout(() => {
                e.target.classList.remove("icofont-navigation-menu")
                e.target.classList.add("icofont-close")
                e.target.parentElement.classList.add("aos-animate")
                e.target.parentNode.previousElementSibling.children[0].classList.remove("max-lg:hidden", "aos-animate")
                e.target.parentNode.previousElementSibling.children[0].classList.toggle("h-screen")
                setTimeout(() => {
                    e.target.parentNode.previousElementSibling.children[0].classList
                        .add(
                            "max-lg:w-full", "max-lg:flex", "max-lg:flex-col",
                        "max-lg:align-middle", "max-lg:justify-start", "max-lg:gap-20",
                        "max-lg:my-24", "max-lg:absolute", "aos-animate","max-lg:left-0", "max-lg:px-6", "bg-white")
                    li.forEach(element => {
                        element.children[0].classList.remove("aos-animate")
                        setTimeout(() => {
                            element.children[0].classList.add("aos-animate")
                        },2)
                        e.target.parentNode.previousElementSibling.children[0].children[0].children[0].classList.add("mt-4")
                    });
                },2)
                
            },350)
            z == 1;
        }
        else {
            setTimeout(() => {
                e.target.classList.remove("icofont-close")
                e.target.classList.add("icofont-navigation-menu")
                e.target.parentElement.classList.add("aos-animate")
                e.target.parentNode.previousElementSibling.children[0].classList.add("max-lg:hidden", "aos-animate")
                e.target.parentNode.previousElementSibling.children[0].classList.toggle("h-screen")
                e.target.parentNode.previousElementSibling.children[0].classList.remove("max-lg:h-full",
                    "max-lg:w-full", "max-lg:flex", "max-lg:flex-col",
                    "max-lg:align-middle", "max-lg:justify-start", "max-lg:gap-20",
                    "max-lg:my-24", "max-lg:absolute", "aos-animate", "max-lg:left-0", "max-lg:px-6", "bg-white")
                    li.forEach(element => {
                        element.children[0].classList.remove("aos-animate")
                        setTimeout(() => {
                            element.children[0].classList.add("aos-animate")
                        }, 2)
                    });
                e.target.parentNode.previousElementSibling.children[0].children[0].children[0].classList.remove("mt-4")

            }, 350)
            z == 0;
        }

    }
    const linkClicked = (e) => {
        let links = e.target.parentNode.parentNode.children
        links = Array.from(links)
        links.forEach(lnk => {
            lnk.children[0].classList.replace("text-default", "text-default-black")
        })
        e.target.classList.replace("text-default-black", "text-default")
        if(window.innerWidth < 1024){
            document.querySelector("nav .hamburger-menu i").click()
        }
    }
    return (
        <nav className="w-full fixed h-28 bg-white flex z-50 top-0 left-0 justify-between max-lg:justify-between">
            <div className="logo relative overflow-hidden -top-2 max-lg:mx-6">
                <Link href={"/"}><Image
                    src={logo}
                    width={120}
                    height={130}
                    alt="ViZack"
                    quality={100 || 75}
                    priority={true}
                    loading="eager"
                    data-aos="fade-up"
                    data-aos-duration="900"
                />
                </Link>
            </div>

            <font className={cabin.className}>
            <ul className=" w-full bg-white max-lg:hidden z-50 flex my-6" data-aos="fade-up" data-aos-delay="300" data-aos-duration="900">
                <Link className="h-fit" href={"/"}><li onClick={linkClicked} data-aos="fade-down" data-aos-delay="1000" data-aos-duration="300" className={"transition-colors mx-4 h-fit text-xl cursor-pointer text-default hover:text-default tracking-wider capitalise font-normal"}>Home</li></Link>
                <Link className="h-fit" href={"/about"}><li onClick={linkClicked} data-aos="fade-down" data-aos-delay="1000" data-aos-duration="600" className={"transition-colors mx-4 h-fit text-xl cursor-pointer text-default-black hover:text-default tracking-wider capitalise font-normal"}>About Us</li></Link>
                <Link className="h-fit" href={"/services"}><li onClick={linkClicked} data-aos="fade-down" data-aos-delay="1000" data-aos-duration="900" className={"transition-colors mx-4 h-fit text-xl cursor-pointer text-default-black hover:text-default tracking-wider capitalise font-normal"}>Services</li></Link>
                <Link className="h-fit" href={"/contact"}><li onClick={linkClicked} data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1200" className={"transition-colors mx-4 h-fit text-xl cursor-pointer text-default-black hover:text-default tracking-wider capitalise font-normal"}>Contact</li></Link>
                <Link className="h-fit" href={"/blogs"}><li onClick={linkClicked} data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1500" className={"transition-colors mx-4 h-fit text-xl cursor-pointer text-default-black hover:text-default tracking-wider capitalise font-normal"}>Blogs</li></Link>
            </ul>
            </font>
            <div className="hamburger-menu my-6 lg:hidden max-lg:mx-6" data-aos="zoom-in-left" data-aos-duration="800" data-aos-delay="100">
                <i className="icofont-navigation-menu cursor-pointer text-default-gray hover:text-default text-4xl" onClick={clickCall}></i>
            </div>
            {/* <div className="search my-6 hover:text-default cursor-pointer max-lg:hidden " data-aos="fade-up" data-aos-delay="600" data-aos-duration="900">
                <span className="bg-default rounded-md py-4 px-4 cursor-pointer font-semibold tracking-wider text-white hover:text-default hover:bg-white transition-colors"><i className="icofont-touch text-2xl"></i><span>Get In Touch</span></span>
            </div> */}
        </nav>
    )
} 

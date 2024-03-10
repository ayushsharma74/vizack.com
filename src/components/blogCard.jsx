// import React from "react";
import Image from "next/image";
// import Link from "next/link";

export default function Blog(props,blogImg, profileImg, profileName, Time, blogTitle) {
    return (
        <div className="card border rounded-2xl h-fit w-full pb-2">
            <div className="top min-h-fit">
                <div className="image w-full">
                    <Image
                        src={props.blogImg}
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-2xl object-cover"
                        priority
                        alt={props.blogTitle}
                    />
                </div>
                <div className="publisher flex justify-between px-4">
                    <div className="left flex h-16 gap-2 w-full items-center ">
                        <div className="image">
                            <Image
                                src={props.profileImg}
                                width={50}
                                height={50}
                                className="rounded-full h-[2.83rem] border-2 border-default w-[2.83rem] object-cover"
                                loading="eager"
                                alt={props.profileName}
                            />
                        </div>
                        <div className="name">
                            <h3 className="text-xl font-bold tracking-wide uppercase">{props.profileName}</h3>
                        </div>
                    </div>
                    <div className="right flex gap-3 items-center justify-between">
                        <div className="comment flex gap-2 border-r pr-3">
                            <i class="icofont-duotone icofont-messaging text-2xl text-default"></i>
                            <h3 className="uppercase text-default-gray cursor-pointer hover:text-dark transition-colors duration-300">comments</h3>
                        </div>
                        <div className="time flex gap-2 w-32 items-center">
                            <i className="icofont-duotone icofont-calendar text-2xl text-default"></i>
                            <h3 className="uppercase text-md min-w-fit text-default-gray">{props.Time}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom px-4 py-6">
                <div className="title mb-4">
                    <h1 className="text-4xl text-dark font-bold cursor-pointer hover:text-default transition-colors duration-300">{props.blogTitle}</h1>
                </div>
                <div className="parg mb-4">
                    <p className="text-default-gray text-lg tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis iusto in fugiat autem, ea molestiae placeat aperiam veniam laborum eaque numquam sit deserunt excepturi eum neque asperiores maxime animi.
                    </p>
                </div>
                <div className="read-btn">
                    <button className="text-xl tracking-wider hover:text-default transition-colors duration-300"><span className="mr-2 transition-all duration-300 hover:mr-4">Read More</span><span className="font-bold transition-all duration-300 hover:ml-2">&#10230;</span></button>
                </div>
            </div>
        </div>
    );
}
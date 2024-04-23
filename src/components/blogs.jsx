import Image from "next/image";
import Link from "next/link";

const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};


export default function heading(props){
    return (
        <h1 className='font-bold text-2xl'>{props.content}</h1>
    );
}

export function par(props){
    return (
        <p className='font-serif text-lg'>{props.content}</p>
    );
}

export function img(props){
    return (
        <Image 
            loader={imgloader}
            src={props.link}
            width={100}
            height={100}
            loading='lazy'
            quality={100}
            className='min-w-[70%] mx-auto'
            alt={props.alt}
        />
    );
}

export function MainImg(props){
    return (
        <Image 
            loader={imgloader}
            src={props.link}
            width={500}
            height={500}
            loading='lazy'
            quality={100}
            className='min-w-full my-10'
            alt={props.alt}
        />
    );
}

export {heading, par, img, MainImg}

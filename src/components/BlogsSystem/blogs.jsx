import Image from "next/image";

const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};


export default function Heading(props){
    return (
        <h1 className='font-bold text-2xl mt-10'>{props.content}</h1>
    );
}

function Par(props){
    return (
        <p className='font-serif text-lg'>{props.content}</p>
    );
}

function MainImg(props) {
    return (
        <Image
            loader={imgloader}
            src={props.link}
            width={500}
            height={500}
            loading='lazy'
            quality={100}
            className={props.size == "full" ? `min-w-full my-10` : `min-w-[${props.size}%] my-10 mx-auto`}
            alt={props.alt}
        />
    );
}

export {Heading, Par, MainImg}
import Image from "next/image";
import Link from "next/link";
const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

function Banner(props, img, alt) {
    return (
        <div className="image w-full">
            <Image
                loader={imageLoader}
                src={props.img}
                width={500}
                height={500}
                className="h-auto w-full rounded-2xl object-cover"
                priority
                alt={props.alt}
            />
        </div>
    );
}

function PublisherImage(props, img, alt) {
    return (
        <div className="image">
            <Image
                loader={imageLoader}
                src={props.img}
                width={50}
                height={50}
                className="rounded-full h-11 w-11 min-h-8 min-w-8 max-h-11 max-w-11 border-2 border-default object-cover"
                loading="eager"
                alt={props.alt}
            />
        </div>
    );
}

function PublisherName(props, name) {
    return (
        <div className="name">
            <h3 className="text-xl font-bold tracking-wide uppercase max-sm:text-sm">{props.name}</h3>
        </div>

    );
}

function PublisherPublished(props, date) {
    return (
        <div className="time flex gap-2 w-32 items-center">
            <i className="icofont-duotone icofont-calendar text-2xl max-sm:text-xl text-default"></i>
            <h3 className="uppercase min-w-fit text-default-gray max-sm:text-sm">{props.date}</h3>
        </div>

    );
}

function Title(props, Title) {
    return (
        <div className="title mb-4">
            <h1 className="text-4xl text-dark font-bold">{props.Title}</h1>
        </div>

    );
}

function Par(props, p) {
    return (
        <p className="text-blog mb-4 text-lg tracking-wide">
            {props.p}
        </p>

    );
}

function Note(props, p, Title) {
    function f() {
        if (props.Title) {
            return (<h3 className="w-full pr-4 px-2 pl-6 text-default text-2xl font-semibold  my-6 uppercase">&mdash;&mdash; {props.Title}</h3>)
        }
    }
    return (
        <div className="w-full h-fit my-8 overflow-hidden bg-default rounded-lg">
            <div className="note w-full ml-2 h-fit bg-note-bg rounded-md py-6">
                <p className="w-full pr-4 px-2 pl-6 text-lg font-semibold  text-note leading-8">
                    <span className="text-[#525AFE] text-2xl">&rdquo;</span>
                    {props.p}
                    <span className="text-[#E35FB8] text-2xl">&ldquo;</span>
                </p>
                {f()}
                {/* <h3 className="w-full pr-4 px-2 pl-6 text-default text-2xl font-semibold  my-6 uppercase">&mdash;&mdash; kathryn murphy</h3> */}
            </div>
        </div>

    );
}

function Images(props, img, alt) {
    return (
        <div className="syntaxImage w-full flex flex-col justify-center max-lg:flex-wrap gap-8 my-8">
            <Image
                loader={imageLoader}
                src={props.img}
                width={350}
                height={300}
                className="w-full rounded-2xl object-cover"
                priority
                alt={props.alt}
            />
        </div>

    );
}

function SubTitle(props, Title) {
    return (
        <div className="title mb-4">
            <h1 className="text-[1.7rem]  text-dark font-bold">{props.Title}</h1>
        </div>  
    );
}

function Tag(props, name) {
    return (
            <h2 className=" bg-gray-200 capitalize font-semibold text-default-gray rounded-lg transition-colors duration-300 text-sm tracking-wide px-3 hover:text-white cursor-pointer py-1 hover:bg-default">
        {props.name}
        </h2>
    );
}

function AboutPublisher(props, img, name, about, facebook, twitter, linkedin, instagram) {
    const face = () => {
        if (props.facebook) {
            return (<Link href={props.facebook}><i className="text-[#005EF9] hover:text-default text-xl transition-colors duration-300 icofont-facebook"></i></Link>)
        } 
    }
    const linked = () => {
        if (props.linkedin) {
            return (<Link href={props.linkedin}><i className="text-[#005EF9] hover:text-default text-xl transition-colors duration-300 icofont-linkedin"></i></Link>)
        }
    }
    const tweet = () => {
        if (props.twitter) {
            return (<Link href={props.twitter}><i className="text-[#005EF9] hover:text-default text-xl transition-colors duration-300 icofont-twitter"></i></Link>)
        }
    }
    const insta = () => {
        if (props.instagram) {
            return (<Link href={props.instagram}><i className="text-[#005EF9] hover:text-default text-xl transition-colors duration-300 icofont-instagram"></i></Link>)
        }
    }
    return (
        <div className="about-publisher flex max-lg:flex-wrap items-center gap-4 px-6 py-8 rounded-2xl bg-[#F2F7FF]">
            <div className="profile">
                <Image
                    src={props.img}
                    width={100}
                    height={100}
                    className="rounded-full h-32 w-32 min-h-32 min-w-32 max-h-32 max-w-32 object-cover"
                    loading="eager"
                    alt={props.name}
                />
            </div>
            <div className="about flex flex-col gap-2">
                <h1 className="font-bold text-2xl text-dark uppercase">{props.name}</h1>
                <Par p={props.about} />
                <div className="social flex gap-4">
                    {face()}
                    {tweet()}
                    {linked()}
                    {insta()}
                </div>
            </div>
        </div>

    );
}

export default function TopHeader(props, banner, bannerAlt, publisher, publisherName, date) {
    return (
        <div className="top min-h-fit">

            <Banner img={props.banner} alt={props.bannerAlt} />
            <div className="publisher flex max-min-end:flex-col justify-between px-4">
                <div className="left flex h-16 gap-2 w-full items-center ">
                    <PublisherImage img={props.publisher} alt={props.publisherName} />
                    <PublisherName name={props.publisherName} />
                </div>
                <div className="right flex gap-3 items-center justify-between">
                    <div className="comment flex gap-2 border-r pr-3">
                        <i  className="icofont-duotone icofont-messaging text-2xl max-sm:text-xl text-default"></i>
                        <h3 className="uppercase text-default-gray max-sm:text-sm cursor-pointer hover:text-dark transition-colors duration-300">comments</h3>
                    </div>
                    <PublisherPublished date={props.date} />
                </div>
            </div>
        </div>
    )
    
}


export { Banner, PublisherImage, PublisherName, PublisherPublished, Title, Par, Note, Images, SubTitle, Tag, AboutPublisher, TopHeader }

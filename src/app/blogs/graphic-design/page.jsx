'use client'
import './blogpage.css'
import BlogTitle from '@/components/blogComponents/BlogTitle'
import Image from 'next/image'
import Link from 'next/link'

const imgloader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 95}`;
};

export default function BlogPage() {
    return (
        <>
        <div className="bg-default w-full min-h-10 h-fit flex flex-wrap items-center px-5 py-2" >
            <h1 className="text-white hover:text-default-gray font-bold">
                <Link href={"/"}>Home &nbsp;</Link>
            </h1>
            <h1 className="text-white font-bold"> &gt;</h1>
            <h1 className="text-white hover:text-default-gray font-bold">
                <Link href={`/blogs`} >&nbsp; Blogs &nbsp;</Link>
            </h1>
            <h1 className="text-white font-bold"> &gt;</h1>
            <h1 className="text-white hover:text-default-gray font-bold truncate">
                <Link href={`/blogs/graphic-design`} >&nbsp; Exploring Graphic Design and Digital Art</Link>
            </h1>
        </div>
            <div className='cont my-10'>
                <BlogTitle title={"Exploring Graphic Design and Digital Art"} writer={"Gajender"} date={"23.3.2024"} category={"DESIGNING"}/>
                <p className='font-serif text-lg mb-4'></p>
                <h1 className='font-bold text-2xl'></h1>
                <p className='font-serif text-lg mb-4'>In today's visually driven world, graphic design and digital art play a crucial role in shaping our everyday experiences. From websites and advertisements to logos and social media posts, these creative disciplines are everywhere we look. But what exactly is graphic design, and how does it relate to digital art? Join us as we delve into the world of graphic design and digital art, uncovering the secrets behind their magic.</p>
                <Image 
                loader={imgloader}
                src={"/assets/blogs/graphic design/img1.jpg"}
                width={500}
                height={500}
                loading='lazy'
                quality={100}
                className='min-w-full'
                />
                <br />
                <h1 className='font-bold text-2xl'>What is Graphic Design?</h1>
                <p className='font-serif text-lg mb-4'>Graphic design is the art of creating visual content to communicate messages and ideas. It encompasses a wide range of mediums, including print, digital, and multimedia. Graphic designers use elements like typography, images, and colours to convey information and evoke emotions. Whether it's designing a logo for a brand or creating a poster for an event, graphic designers are skilled storytellers who bring ideas to life through visuals.</p>
                <br />
                <h1 className='font-bold text-2xl'>Understanding Digital Art</h1>
                <p className='font-serif text-lg mb-4'>Digital art is a form of artistic expression that uses digital technology as a medium. Unlike traditional art forms like painting or sculpture, which are created using physical materials, digital art is made using computers, tablets, and other digital devices. Digital artists use software programs like Adobe Photoshop, Illustrator, and Procreate to create stunning visuals, from illustrations and paintings to animations and 3D models. Digital art offers endless possibilities for creativity and experimentation, allowing artists to explore new techniques and styles.</p>
                <br />
                <Image 
                loader={imgloader}
                src={"/assets/blogs/graphic design/img2.avif"}
                width={300}
                height={300}
                loading='lazy'
                quality={100}
                className='min-w-[70%] mx-auto'
                />
                <br />
                <h1 className='font-bold text-2xl'>The Intersection of Graphic Design and Digital Art</h1>
                <p className='font-serif text-lg mb-4'>While graphic design and digital art are distinct disciplines, they often intersect and complement each other. Many graphic designers incorporate digital art techniques into their work, using digital tools to create illustrations, manipulate images, and add visual effects. Likewise, digital artists may use graphic design principles to create compositions that effectively communicate their artistic vision. By bridging the gap between these two worlds, designers and artists can create captivating visuals that resonate with audiences across various platforms.</p>
                <br />
                <h1 className='font-bold text-2xl'>Tools and Techniques</h1>
                <p className='font-serif text-lg mb-4'>In both graphic design and digital art, having the right tools and mastering key techniques is essential for success. Graphic designers rely on software programs like Adobe Creative Cloud, Canva, and Sketch to create layouts, edit images, and design graphics. Digital artists, on the other hand, use digital painting software like Procreate and Clip Studio Paint to create digital illustrations and paintings. Learning how to use these tools effectively and mastering techniques like composition, colour theory, and typography is crucial for aspiring designers and artists.</p>
                <br />
                <h1 className='font-bold text-2xl'>Applications and Career Opportunities</h1>
                <p className='font-serif text-lg mb-4'>The skills and knowledge gained from studying graphic design and digital art open up a world of career opportunities. Graduates can pursue careers as graphic designers, digital artists, illustrators, UI/UX designers, motion graphics artists, and more. They may work in industries like advertising, publishing, film and television, gaming, and web design. Additionally, freelance opportunities abound for those who prefer to work independently or start their own design studios.</p>
                <br />
                <Image 
                loader={imgloader}
                src={"/assets/blogs/graphic design/img3.gif"}
                width={100}
                height={100}
                loading='lazy'
                quality={100}
                className='min-w-[70%] mx-auto'
                />
                <br />
                <h1 className='font-bold text-2xl'>Conclusion: Embracing Creativity in the Digital Age</h1>
                <p className='font-serif text-lg mb-4'>In conclusion, graphic design and digital art are dynamic and exciting fields that offer endless opportunities for creativity and expression. Whether you're passionate about visual storytelling, digital illustration, or user interface design, there's a place for you in the world of graphic design and digital art. By embracing creativity, honing your skills, and staying curious, you can embark on a rewarding journey filled with artistic discovery and professional growth in the digital age.</p>
                <br />
            </div>
        </>
    )
}
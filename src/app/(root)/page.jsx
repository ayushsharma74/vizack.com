"use client"
import Mainpage from '@/app/(Front Page)/FrontPage';
import Servicessection from '../(Front Page)/ServicesSection';
import Aboutussection from '../(Front Page)/AboutUsSection';
import Funfactssection from '../(Front Page)/FunFactsSection';
import Testimonialssection from '../(Front Page)/TestimonialsSection';
import Getincontactsection from '../(Front Page)/GetInContactSection';
import Services2 from '@/components/Services2';
import Heading from '@/components/Heading';
import Newsletter from '@/components/Newsletter';
import Suggestions from '@/components/Suggestions';


export default function home() {

  return (
    <>
      <Mainpage />
      <Newsletter/>
      <Heading text='Services'/>
      <Services2/>
      <Heading text='About Us'/>
      <Aboutussection />
      <Heading text='Our Numbers'/>
      <Funfactssection />
      <Heading text='Testimonials'/>
      <Testimonialssection />
      <Suggestions/>
    </>
  )
}
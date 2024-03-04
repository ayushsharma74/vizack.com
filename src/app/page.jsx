"use client"
import Mainpage from '@/app/(Front Page)/FrontPage';
import Servicessection from './(Front Page)/ServicesSection';
import Aboutussection from './(Front Page)/AboutUsSection';
import Funfactssection from './(Front Page)/FunFactsSection';
import Testimonialssection from './(Front Page)/TestimonialsSection';
import Getincontactsection from './(Front Page)/GetInContactSection';


export default function home() {

  return (
    <>
      <Mainpage />
      <Servicessection />
      <Aboutussection />
      <Funfactssection />
      <Testimonialssection />
      <Getincontactsection />
    </>
  )
}
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
 
import Navigation from '@front/Navigation'
import CTA from '@front/CTA'
import Features from '@front/Features'
import Hero from '@front//Hero'
import Testimonials from '@front//Testimonials'
import Footer from '@front//Footer'
import About from '@front//About'
import Quick_services from '@front//Quick_services'
import Services from '@front//Services'
import Contacts from '@front//Contacts'
import Portfolio from '@front/Portfolio'



export default function Home() {
  return (

    /*bg-[url('/assets/wsaves.svg')]*/
   
    

   <div className="bg-gray300 body-font font-poppins">
    <Head>
      <title>Agency</title>
      <meta name="description" content="Modern Web Development"/>

    </Head>
  

  
    <div className="bg-hero  min-h-xl bg-no-repeat bg-cover bg-center  object-cover ">
    <Hero />
    </div>
    <Quick_services />
    <About />
    <Services />
    <Portfolio />
    <div  >
    <Contacts />
    </div>
    

 
     <Footer />
 
     
   </div>
  )
}
 
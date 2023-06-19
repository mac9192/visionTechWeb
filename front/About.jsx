import React from 'react';
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import Image from 'next/image'

const About = () => (
 <section id="about" className="pt-[70px] mx-auto container  ">
         
     

<div className="flex flex-col  justify-between space-x-5 shadow-lg align-center block mx-auto min-w-1/2 p-12 bg-white border border-gray-200 bg-gradient-to-r from-gray-700 via-gray-900 to-black   rounded-3xl  shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 md:flex-row">
        
        <div className="flex flex-col space-y-12">
            <h1 className="text-white text-3xl pt-8 font-bold  text-center  md:text-5xl md:text-left">
                Who we are   
            </h1>
            <p className="max-w-lg text-3xl text-center text-white md:text-left font-sans ">
            Our goal is to help you stand out from the competition by creating a website that is not only visually appealing but also optimized for search engine rankings and user experience.
            </p>
            <div className="flex justify-center md:justify-start">
            {/*    <a className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                Get Started
                   <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Get Started
            </button>
         </a> */}
        <button  type="button" className=" hidden md:flex  max-w-sm rounded-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium   text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Book a free consultation
            </button>

            </div>
            <Image className="object-contain pb-5  mx-auto  md:mx-0" src= "/assets/rocket.svg" alt="/" width="300" height="50" />
        </div>
        
        

        
        

  <div className="flex flex-col space-y-4 ">
        <div className="max-w-lg p-6 bg-gray-600  shadow dark:bg-gray-800 dark:border-gray-700 rounded-xl">
          
            <a href="#">
                <h2 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">About Us</h2>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">We are a boutique web development agency in Atlanta, GA. We’re a small team of web professionals looking to build and enhance online presence for individuals and small businesses.  </p>
            <button type="button" className="inline-flex  items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                   Read More
                    <svg class="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div className="max-w-lg p-6 bg-gray-600   shadow dark:bg-gray-800 dark:border-gray-700 rounded-xl">
   
            <a href="#">
                <h2 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">What we do</h2>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400"> We specialize in creating websites and creating strategies that will increase traffic and bring growth to your business. We research, we draft, we build, we refine, we deploy, and we review, and then we do it all over again until it’s right.  </p>
            <button type="button" class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                   Read More
                    <svg class="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <div className="max-w-lg p-6 bg-gray-600    shadow dark:bg-gray-800 dark:border-gray-700 rounded-xl">
         
            <a href="#">
                <h2 className="mb-2 text-2xl font-semibold tracking-tight text-white dark:text-white">What sets us apart</h2>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400"> We are a people-person agency first. Your goals are ours and as business partners, we grow our businesses together. Our clients are friends, neighbors, employers, community members, and business partners. We’re driven to learn about your business first and then we create strategies on how we can specifically help you grow.  And because we want to see you thrive, our prices will move you towards that success. 
            </p>
            <button type="button" className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                   Read More
                    <svg class="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
   </div>

           
</div>


 </section>
);

export default About;

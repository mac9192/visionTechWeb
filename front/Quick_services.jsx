"use client"
import React from 'react';
import Image from 'next/image'
import { fadeIn, navVariants } from '../utils/motion'
import { motion } from 'framer-motion'

const Quick_services = () => {
 return (
    <motion.nav
    variants={fadeIn('up', 'tween', 0.4, 1)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    >
    <section className="mx-auto  ">
        {/*Testimonial Container*/}
    <div className="  flex flex-col mt-24 md:flex-row md:space-x-6 container mx-auto  -mt-14">
{/*Testimonial 1*/}
            <div className="flex  flex-col mb-8 items-center p-8 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                 <Image className="w-16 -mt-14" src = "/assets/monitor.svg" alt="/" width="400" height="350" />
                 <h2 className="text-xl font-bold">Web Development</h2>
                 <p className="text-[15px]">
                 Websites are often the first point of contact between the company and potential customers, making the design and functionality of the site a crucial element for success.
               
                 </p>
                
         
            </div>
            
            
{/*Testimonial 2*/}
            <div className=" flex flex-col mb-8 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                 <Image className="w-16 -mt-14" src = "/assets/business.svg" alt="/" width="400" height="350" />
                 <h2 className="text-xl text-center font-bold">Search Engine Optimization</h2>
                 <p className="text-[15px] ">
                 Search engine optimization (SEO) is a crucial aspect of online marketing. Search engines like Google, Bing, and Yahoo serve as gatekeepers of the internet, and they determine which websites, pages, or content appear on the first pages of their search results.
                 </p>
                 
            </div>
{/*Testimonial 3*/}
            <div className=" flex flex-col mb-8 items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex  md:w-1/3">
                 <Image className="w-16 -mt-14" src = "/assets/internet.svg" alt="/" width="400" height="350" />
                 <h2 className="text-xl font-bold">Content Creation</h2>
                 <p className="text-[15px]   ">
                 Content creation has become an essential part of business and marketing strategies in the modern world. From storytelling to brand promotion, businesses rely on content creation to reach their target audience and build engagement.
                 </p>
              
            </div>
    </div>
    </section>
    </motion.nav>
 )

};

export default Quick_services;
 
import React from 'react';
import Image from 'next/image'

const Hero = () => (
<section className="">

 <div className="container relative flex flex-col-reverse md:flex-row items-center  mx-auto space-x-8  md:pt-1  md:space-y-0 md:mb-12   md:pt-0 ">

    
     <div className="flex flex-col  space-y-4 pt-2  md:w-1/2 sm:mt-8 ">
     <p className="max-w-lg text-lg text-center text-black pt-5 md:text-left ">
           The number one website agency in Atlanta.
            </p>
            <h1 className="max-w-lg pt-8 text-4xl pt-8 font-bold text-black text-center font-sans   md:text-5xl md:text-left">
               A Modern Web 
            </h1>
            <span className="max-w-lg text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-center pb-2 text-center md:text-5xl md:text-left">Development Agency</span> 
            <p className="max-w-lg text-3xl text-center text-black md:text-left font-sans ">
            for startups and established businesses.
            </p>
            <p className="max-w-lg text-lg text-center pt-3 text-black md:text-left">
            We specialize in creating custom websites that are tailored to your specific business needs. Our team of experienced developers, designers, and writers work together to create a website that not only looks great but also drives traffic and conversions.

            </p>
            
            <div className="flex justify-center md:justify-start">
            {/*    <a className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
                Get Started
                   <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Get Started
            </button>
         </a> */}
       
       

            </div>
     </div>
     
     <div className="md:w-1/2 mt-12 ">
        <Image src = "/assets/herobg1.png" alt="/" width="700" height="550" priority={true} />

        
    </div>
    
 </div>



 </section>
);

export default Hero;

import React from 'react';

const CTA = () => (
 <section id="cta" className="bg-gradient-to-br from-purple-600 to-blue-500 ">   
 
{/*Flex Container*/}
     <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
{/*Heading*/}
         <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
         </h2>
{/*Button*/}
         <a className="p-3 px-6 pt-2 text-brightRed bg-white shadow-2xl rounded-full baseline hover:bg-gray-100">
                Get Started
         </a>
     </div>
 </section>
);

export default CTA;

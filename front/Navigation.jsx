"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import Link from "next/link"





const Dropdown = () =>{

    
  /*Dropdown Menu*/
    return(
        <div className="md:hidden">
     
<nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 ">
   
    <div id="mega-menu-full-image-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
            <ul class="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        About
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                       Prices
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0">
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      Portfolio
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                       Prices
                    </a>
                </li>
                <li>
                    <a href="#" class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                       Contacts
                    </a>
                </li>
                {/*<li>
                     <Link href='/blog' class="hover:underline hover:text-blue-600 dark:hover:text-blue-500">Blog</Link>
                </li>*/}
              
            </ul>
            <a href="#" class="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" >
                <p class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Get started with a consultation today!</p>
                <button type="button" class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                    Get started
                    <svg class="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </a>
        </div>
    </div>
</nav>

    </div>

    )}

const Navigation = () => {
 
const [toggle, setToggle] = useState(false)

    return (
<motion.nav
    className="sticky top-0 z-40"
     variants={navVariants}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true, amount: 0.2 }}
     > {/* 
     
      <div className=" md:block hidden ">

         <div className=" relative isolate flex   items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1  bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          
           
            <div className="container   flex justify-between flex-wrap items-center  gap-y-2 gap-x-4">
                <p className="text-sm leading-6 text-gray-900">
                <strong className="font-semibold bg-rose-500 text-white  rounded-full  p-2">Call us at (770)-864-4063</strong> 
                </p>
              
                <div className="flex justify-center space-x-2">
  
  
                
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-instagram.svg" alt="/" width="70" height="50" />
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-facebook.svg" alt="/" width="70" height="50" />
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-twitter.svg" alt="/" width="70" height="50" />
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-youtube.svg" alt="/" width="70" height="50" />
            

 
                </div>
           
              
            </div>
            
            <div className="flex flex-1 justify-between">
                
            </div>
        </div>


         </div>
     
     
     */}
 
       
<nav className="sticky top-0 relative mx-auto p-2 bg-white ">

        <div className="flex items-center justify-between  container  mx-auto sticky   ">
            <div className="pt-2">
                <Image src = "/assets/vtblack.svg" alt="VisionTech Logo" width="130" height="100" />
            </div>
            <div className="hidden md:flex flex space-x-6 text-md text-black ">
                <Link href='/' class="hover:text-blue-800">Home</Link>
                <a href="#" className="hover:text-blue-800">About</a> 
                <a href="#" className="hover:text-blue-800">Services</a>
                <a href="#" className="hover:text-blue-800">Portfolio</a>
                <a href="#" className="hover:text-blue-800">Prices</a>
                <a href="#" className="hover:text-blue-800">Contact</a>
                {/*<Link href='/blog' class="hover:text-blue-800">Blog</Link>*/}
                
                
              
            </div>
            {/*   <a className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
                    Get Started
            </a> */}
{/* Regular button CTA - link to another page - medium and up*/}   
            <button type="button" className=" hidden md:flex  rounded-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium   text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Book a free consultation
            </button>
       
 {/*Hamburger Icon - comes up when sm screens*/}
                 <button id="menu-btn" alt="menu"  aria-label="search" className={`${!toggle ? '' :'open' } block hamburger md:hidden focus:outline-none`} 
                    onClick={() =>setToggle(!toggle)}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
                  
            </button>
        </div>
        {/*Mobile Menu*/}
        <div>{!toggle ? "": <Dropdown/>}</div>
         
        </nav>
</motion.nav>

    )


}


export default Navigation;

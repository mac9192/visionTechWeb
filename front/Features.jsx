"use client"
import React from 'react';

import { motion, MotionConfig } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const Features = () => (


    





<div className="">
    <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          features className="container flex flex-col px-4 mx-auto mt-0 pt-12 space-y-12 md:space-y-0 md:flex-row">
    


  
    <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
       >
      
      
        <div className="flex flex-col space-y-12 md:w-1/2">
            
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Manage provides all the functionality your team needs, without the complexity. 
                Our software is tailor-made for modern digital product teams.
            </p>

        </div>
    </motion.div>

    <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex flex-col space-y-8 md:w-1/2"
      >
{/*Numbered List Container  col- everything in this div*/}
    

{/*List Item 1 Container (bar top - text bttm) */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
{/*L1 Heading (bar) - md:transparent (Holds number and Header text) */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
{/*Flex - Number and Header Text */}
                    <div className="flex items-center space-x-2">
{/*Number*/}           
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-gradient-to-br from-purple-600 to-blue-500">
                            01
                        </div>
{/*Header Text md:hidden*/}       
                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                            Track Company Wide Progress
                        </h3>

                    </div>

                </div>
{/*Right side*/}
             <div>
                <h3 className="hidden md-4 text-lg font-bold md:block">
                    Track Company Wide Progress
                </h3>
                <p className=" text-darkGrayishBlue">
                    See how your day-to-day tasks fit into the wider version.
                    Go from tracking progress at the milestone level all the
                    done to the smallest of details. Never lose sight of the bigger
                    picture again.
                </p>
             </div>

            </div>

            {/*List Item 1 Container (bar top - text bttm) */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
{/*L1 Heading (bar) - md:transparent (Holds number and Header text) */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
{/*Flex - Number and Header Text */}
                    <div className="flex items-center space-x-2">
{/*Number*/}           
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-gradient-to-br from-purple-600 to-blue-500">
                            02
                        </div>
{/*Header Text md:hidden*/}       
                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Advanced built-in reports
                        </h3>

                    </div>

                </div>
{/*Right side*/}
             <div>
                <h3 className="hidden md-4 text-lg font-bold md:block">
                Advanced built-in reports
                </h3>
                <p className=" text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
                </p>
             </div>

            </div>
            {/*List Item 1 Container (bar top - text bttm) */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
{/*L1 Heading (bar) - md:transparent (Holds number and Header text) */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
{/*Flex - Number and Header Text */}
                    <div className="flex items-center space-x-2">
{/*Number*/}           
                        <div className="px-4 py-2 text-white rounded-full md:py-1 bg-gradient-to-br from-purple-600 to-blue-500">
                            03
                        </div>
{/*Header Text md:hidden*/}       
                        <h3 className="text-base font-bold md:mb-4 md:hidden">
                             Everything you need in one place
                        </h3>

                    </div>

                </div>
{/*Right side*/}
             <div>
                <h3 className="hidden md-4 text-lg font-bold md:block">
                    Everything you need in one place
                </h3>
                <p className=" text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
                </p>
             </div>

            </div>
  


     
        </motion.div>

    </motion.div>

    <div className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Lets create more tools and ideas that brings us together.</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
            <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</div>

<section className="bg-gradient-to-br from-purple-600 to-blue-500 dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-white leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        
        </div>                
    </div>
</section>

</div>
);

export default Features;

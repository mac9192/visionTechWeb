import React from 'react';
import Image from 'next/image'

import { motion } from 'framer-motion'

const Services = () =>{ 

    return (
        <section className="container mx-auto">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Designed to help your business grow</h2>
                <p className="  sm:text-xl dark:text-gray-400">Here at VisionTech we provide professional services that will will create a strong web presence and growth for your brand and business</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <Image className="w-16  " src = "/assets/web1.svg" alt="/" width="400" height="350" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold ">Web Development</h3>
                    <p className="  dark:text-gray-400">Web design is an essential aspect of website development as it profoundly influences the user experience, accessibility, and functionality of a site.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <Image className="w-16  " src = "/assets/ui.svg" alt="/" width="400" height="350" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold ">UI/UX</h3>
                    <p className="  dark:text-gray-400">Design a seamless, enjoyable, and efficient experience for users, which directly impacts the performance of a website.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <Image className="w-16  " src = "/assets/seo.svg" alt="/" width="400" height="350" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold ">SEO</h3>
                    <p className="  dark:text-gray-400">Stay competitive and maintain a strong online presence in todays increasingly digital world with effective (SEO) strategies.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <Image className="w-16  " src = "/assets/crm.svg" alt="/" width="400" height="350" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold "> CMS</h3>
                    <p className="  dark:text-gray-400"> Content management systems (CMS) have revolutionized the way websites are developed and maintained, making it easier for people to create and manage their online presence.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <Image className="w-16  " src = "/assets/writing.svg" alt="/" width="400" height="350" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold "> Copywriting</h3>
                    <p className="  dark:text-gray-400">Copywriting plays a vital role in website development, as it encompasses the creation of persuasive and engaging content to attract, inform, and convert visitors into customers.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <Image className="w-16  " src = "/assets/logos.svg" alt="/" width="400" height="350" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold ">Logos</h3>
                    <p className="  dark:text-gray-400">Logos, a critical element in website development, serve as a visual representation of a brands identity and values.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <Image className="w-16  " src = "/assets/maintenance.svg" alt="/" width="400" height="350" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold ">Maintenance</h3>
                    <p className="  dark:text-gray-400"> By having a plan for maintenance, a web development agency can keep its business running smoothly and avoid any major disruptions..</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <Image className="w-16  " src = "/assets/consultation.svg" alt="/" width="400" height="350" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold ">Consultation</h3>
                    <p className="  dark:text-gray-400">Keep your company up to date with the latest tech trends and seek a second opinion before making any major changes.</p>
                </div>
               
                
            </div>
        </div>
      </section>

    )

    }

export default Services;
 
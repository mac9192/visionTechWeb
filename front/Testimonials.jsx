import React from 'react';
import Image from 'next/image'

import { motion } from 'framer-motion'

const Testimonials = () => (


 <div className="max-w-6xl px-5 mx-auto mt-32 text-center mb-5 sticky"> {/* Container to heading and testimonials blocks */}
    <h2 className="text-4xl font-bold text-center">
        Whats Different About Manage?
    </h2>
{/*Testimonial Container*/}
    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
{/*Testimonial 1*/}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                 <Image className="w-16 -mt-14" src = "/assets/avatar-anisha.png" alt="/" width="400" height="350" />
                 <h5 className="text-lg font-bold">Anisha Li</h5>
                 <p className="text-sm text-darkGrayishBlue">
                    “Manage has supercharged our team’s workflow. The ability to
                    maintain visibility on larger milestones at all times keeps
                    everyone motivated.”
                 </p>
            </div>
{/*Testimonial 2*/}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
                 <Image className="w-16 -mt-14" src = "/assets/avatar-ali.png" alt="/" width="400" height="350" />
                 <h5 className="text-lg font-bold">Ali Bravo</h5>
                 <p className="text-sm text-darkGrayishBlue">
                 “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
                 </p>
            </div>
{/*Testimonial 3*/}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex  md:w-1/3">
                 <Image className="w-16 -mt-14" src = "/assets/avatar-richard.png" alt="/" width="400" height="350" />
                 <h5 className="text-lg font-bold">Richard Watts</h5>
                 <p className="text-sm text-darkGrayishBlue">
                 “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
                 </p>
            </div>
    </div>
     
            <a className="    mb-5 text-white bg-brightRed  ">
              
            </a>
    

     <div>
        
     </div>

 </div>
);

export default Testimonials;
 
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div>
   <section class="text-gray-600 body-font bg-slate-800">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2   mb-10 md:mb-0">
    <Image className="drop-shadow-xl"src = "/assets/g.png" alt="/" width="500" height="50" priority={true} />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-amber-500 inline-flex"></div>
      </div>
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"></h1>
    
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">GERARDO BRICENO LAW</h1>
      <p class="mb-8 leading-relaxed text-white">After serving in roles with Immigration and Customs Enforcement’s Office of Chief Counsel in Miami and spending 7 years in private practice, managing partner Gerardo Briceno started his own Atlanta personal injury and immigration law firm.   </p>
      <p className="mb-8 leading-relaxed text-white">Since its founding, G. Briceno has grown through the addition of fellow attorneys Eduardo Galvao, Jennifer Bechtold and a dedicated team of crucial administrative and paralegal staff. Briceno attorneys have been widely recognized and awarded in the legal profession. Notable achievements include the coveted SuperLawyers recognition, National Trial Lawyers Top 40 under 40, a Client’s Choice award from Avvo.com and consistent 5-star reviews on legal review sites.</p>
      <div class="flex w-full md:justify-start justify-center items-end">
        
       
      </div>
      
      <div class="flex lg:flex-row md:flex-col">
      <button class="inline-flex text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded-tl-lg text-lg">Schedule a Consultation</button>
      
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About

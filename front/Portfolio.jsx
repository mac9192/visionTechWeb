import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div>
       <div class="  bg-gradient-to-r from-gray-700 via-gray-900 to-black py-6 sm:py-8 lg:py-12 mx-auto">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
   
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">Portfolio</h2>

      <h2 class="mx-auto max-w-screen-md text-center text-white md:text-lg">These are some of the projects that we have worked on recently. Check them out!</h2>
    </div>
   

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
  <div> 
      <h2 className="mb-4  text-center text-2xl font-bold text-white  ">GenjutsuAtl  </h2>
           <a href="https://genjutsuatl.com/" class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
     
        <Image src="/assets/gen.png" width={800} height={800} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">HTML/CSS/JS</span>
      </a>
  </div>
 
    <div> 
         <h2 className="mb-4  text-center  text-2xl font-bold text-white  ">Hip Hop Blog</h2>
        <a href="https://modernhiphop.vercel.app/" class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
    
      <Image src="/assets/hip.png" width={800} height={800} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">Next.Js/Hygraph CMS</span>
      </a>
    </div>
      
   <div>
   <h2 className="mb-4  text-center  text-2xl font-bold text-white  ">Gym Warrior API</h2>
        <a href="https://gymwarrior.netlify.app/" class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
      <Image src="/assets/warrior.png" width={800} height={800} loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <span class="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">React/API</span>
      </a>
   </div>
     
  
    </div>
  </div>
</div>
    </div>
  )
}

export default Portfolio

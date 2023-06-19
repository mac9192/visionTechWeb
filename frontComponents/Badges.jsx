import React from 'react'
import Image from 'next/image'

const Badges = () => {
  return (
    <div>
     <section class="text-gray-600  body-font">
  <div class="container px-5 py-16 mx-auto">
  <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-black mb-4">LEADING LAW FIRM IN ATLANTA PROVIDING ATLANTA PERSONAL INJURY & ATLANTA IMMIGRATION LAW SERVICES
</h1>
      <p class="text-amber-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">SERVING GEORGIA, FLORIDA, ALABAMA, AND WASHINGTON STATE
</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-amber-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class=" inline-flex items-center justify-center rounded   text-indigo-500 mb-5 flex-shrink-0">
        <Image src = "/assets/40.png" alt="/" width="300" height="50" priority={true} />
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">National Trial Lawyers Top 40 Under 40 </h2>
          <p class="leading-relaxed text-black"> Membership into The National Trial Lawyers Top 40 under 40 is by invitation only and is extended exclusively to those trial lawyers practicing civil plaintiff and/or criminal defense law.</p>
        
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div class="  inline-flex items-center justify-center rounded-full   text-indigo-500 mb-5 flex-shrink-0">
        <Image className="rounded" src = "/assets/avo.png" alt="/" width="200" height="50" priority={true} />
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Avvo Clients Award</h2>
          <p class="leading-relaxed text-black">This highly coveted honor is bestowed upon attorneys who have received 4-star reviews or higher from at least 5 past clients throughout the year.</p>
          
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div class=" inline-flex items-center justify-center rounded bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image className="rounded" src = "/assets/super.png" alt="/" width="180" height="50" priority={true} />
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Super Lawyers</h2>
          <p class="leading-relaxed text-black text-base">Super Lawyers selects attorneys using a patented multiphase selection process. Peer nominations and evaluations are combined with independent research.</p>
          
        </div>
      </div>
      {/*<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div class=" inline-flex items-center justify-center rounded bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image className="rounded" src = "/assets/avvo2.png" alt="/" width="180" height="50" priority={true} />
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Avvo Reviews</h2>
          <p class="leading-relaxed text-gray-400">This highly coveted honor is bestowed upon attorneys who have received 4-star reviews or higher from at least 5 past clients throughout the year.</p>
          
        </div>
  </div>*/}
    </div>
    {/*<button class="flex mx-auto mt-16 text-white bg-amber-300 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>*/}
  </div>
</section>
    </div>
  )
}

export default Badges

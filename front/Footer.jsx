import React from 'react';
import Image from 'next/image'

const Footer = () => (
 <footer className="bg-veryDarkBlue">
{/*Flex Container*/}
     <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
{/*Logo and social links container*/}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
{/*Logo*/}      
            <div>
            <Image src = "/assets/vtblack.svg" alt="VisionTech Logo" width="130" height="100" />
            </div>    
{/*Social Links Container*/}
            <div className="flex justify-center space-x-4 p-1">
{/*Link 1*/}
                <a href="#">
                    <Image src="/assets/icon-facebook.svg" className="" alt="/" width="20" height="550" />
                </a>
{/*Link 2*/}
                <a href="#">
                    <Image src="/assets/icon-youtube.svg" className="" alt="/" width="20" height="550" />
                </a>
{/*Link 3*/}
                <a href="#">
                    <Image src="/assets/icon-twitter.svg" className="" alt="/" width="20" height="550" />
                </a>
{/*Link 4*/}
                <a href="#">
                    <Image src="/assets/icon-pinterest.svg" className="" alt="/" width="20" height="550" />
                </a>
{/*Link 5*/}
                <a href="#">
                    <Image src="/assets/icon-instagram.svg" className="" alt="/" width="20" height="550" />
                </a>
            </div>
        </div> 
{/*List Container*/}
           <div className="flex justify-around space-x-32">
                <div className="flex flex-col space-y-3 text-white">
                    <a href="#" className="hover:text-brightRed">Home</a>
                    <a href="#" className="hover:text-brightRed">Pricing</a>
                    <a href="#" className="hover:text-brightRed">Products</a>
                    <a href="#" className="hover:text-brightRed">About</a>
                </div>
                <div className="flex flex-col space-y-3 text-white">
                    <a href="#" className="hover:text-brightRed">Careers</a>
                    <a href="#" className="hover:text-brightRed">Community</a>
                    <a href="#" className="hover:text-brightRed">Privacy Policy</a>
                </div>
            </div>
{/*Input Container*/}
                <div className="flex flex-col justify-between">
                <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button type="button" className=" hidden md:flex  rounded-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium   text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Book a free consultation
            </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
                </div>

                
           </div>

 </footer>
);

export default Footer;

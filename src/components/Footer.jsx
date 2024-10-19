import React from "react";
import { CiFacebook,CiTwitter,CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export default function Footer(){
    return (
        <>
            <div className="flex flex-col bg-darker-green pb-5">
            <div className="flex bg-darker-green lg:h-48 lg:flex-row flex-col justify-center lg:pt-0 pt-5 h-auto gap-10 items-center">
                <div className="text-white  lg:w-2/6 w-full px-10 text-xs lg:pl-10 flex flex-col gap-3">
                    <img src="VOGUE_PRISM_white.png" alt="VOGUE_PRISM White" className="h-10 w-24 font-semibold" />
                    <p className="">Established in 2024 Embrace your unique style with our curated collection of contemporary menswear. From everyday essentials to standout pieces, we've got something for every occasion.</p>
                    <div className="flex gap-3">
                        <CiFacebook size={24}/>
                        <CiTwitter size={24}/>
                        <CiYoutube size={24}/>
                        <FaInstagram size={24}/>
                    </div>
                </div>
                <div className="flex gap-6 lg:w-2/6  justify-center items-center ">
                    <div className="flex flex-col text-white text-[12px] justify-center items-center gap-3">
                        <h2 className="text-sm font-semibold">Quick Links</h2>
                        <a className="cursor-pointer">Home</a>
                        <a className="cursor-pointer">Contact Us</a>
                        <a className="cursor-pointer">About Us</a>
                    </div>
                    <div className="flex flex-col text-white  text-[12px] justify-center items-center gap-3">
                        <h2 className="text-sm font-semibold">Quick Links</h2>
                        <a className="cursor-pointer">Home</a>
                        <a className="cursor-pointer">Contact Us</a>
                        <a className="cursor-pointer">About Us</a>
                    </div>
                    <div className="flex flex-col text-white text-[12px] justify-center items-center gap-3">
                        <h2 className="text-sm font-semibold">Quick Links</h2>
                        <a className="cursor-pointer">Home</a>
                        <a className="cursor-pointer">Contact Us</a>
                        <a className="cursor-pointer">About Us</a>
                    </div>
                </div>
                <div className="text-white lg:w-2/6  text-[12px] flex flex-col gap-2">
                    <h2 className="text-sm font-semibold">Contact Us</h2>
                    <p>Email   : support@vogueprism.com</p>
                    <p>Phone   : (123) 458-7890</p>
                    <p>Address : 123 Fashion Ave,Stayle City,CA 90210</p>
                </div>
                <div>
                    
                </div>
                
            </div>
               <div className="text-white uppercase font-bold text-1xl text-center">
               <h1 className="">© 2024 VOGUE PRISM. All rights reserved</h1>
               </div>
            </div>
        </>
    );
}
import React from "react";
import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductCarousel";
export default function Product(){

    let productImg = [
        "cloth1.png",
        "cloth2.png",
        "cloth3.png"
    ]

    return (
        <>
            <div className="w-full md:h-screen h-auto md:mb-0 mb-10">
                <Navbar/>
                <div className="flex lg:flex-row flex-col w-full h-auto mt-5 lg:h-[80%]  ">
                    <div className="flex lg:w-1/2 w-full relative">
                        <div className="lg:bg-dark-green lg:w-[70%] w-full h-full  absolute left-0 top-0 "></div>
                        <div className="w-full h-full flex items-center justify-center relative z-10">
                        <ProductCarousel slides={productImg} />
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full tracking-[.10em] md:text-left text-center">
                        <div className="mt-10 md:ml-7 flex flex-col gap-5  md:text-left text-center">
                            <h1 className="font-bold  md:text-[20px] text-[20px] ">Vogue Prism Evergreen Fleece Hoodie </h1>
                            <div className="flex md:flex-row flex-col items-center md:justify-start justify-center gap-7 ">
                                <h1 className="text-darker-green font-extrabold md:text-2xl text-3xl">Rs. 999</h1>
                                <h3 className="text-xs line-through">MRP Rs. 1499</h3>
                            </div>
                            <p className="text-xs">(incl. of all taxes)</p>
                            <h3 className="text-[20px] font-bold text-gray-800">COLOR</h3>
                            <div className="flex gap-3 justify-center md:justify-start">
                                <div className="bg-green-600 rounded-full w-6 h-6"></div>
                                <div className="bg-gray-800 rounded-full w-6 h-6"></div>
                                <div className="bg-red-600 rounded-full w-6 h-6"></div>
                                <div className="bg-blue-600 rounded-full w-6 h-6"></div>
                            </div>
                            <h3 className="text-[20px] font-bold text-gray-800">SIZE</h3>
                            <div className="flex gap-3 font-bold  text-lg md:justify-start justify-center">
                               <div><h1>S</h1></div>
                               <div><h1>M</h1></div>
                               <div><h1>L</h1></div>
                               <div><h1>XL</h1></div>
                               <div><h1>2XL</h1></div>
                               <div><h1>3XL</h1></div>
                            </div>
                            <div className="flex md:justify-start justify-center"> 
                                <button className="bg-dark-green px-10 md:mx-0 mx-2 py-2 md:w-auto w-full rounded-2xl text-white font-bold ">AVAILABLE</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

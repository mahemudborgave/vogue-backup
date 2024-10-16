import React from "react";
import Navbar from "./Navbar";
import ProductCarousel from "./ProductCarousel";
export default function Product(){

    let productImg = [
        "4568144.webp",
        "4568147.webp",
        "4568146.webp"
    ]

    return (
        <>
            <div className="w-full h-screen">
                <Navbar/>
                <div className="flex w-full mt-5 h-[80%]">
                    <div className="flex w-1/2 relative">
                        <div className="bg-dark-green w-[70%] h-full  absolute left-0 top-0 "></div>
                        <div className="w-full h-full flex items-center justify-center relative z-10">
                        <ProductCarousel slides={productImg} />
                        </div>
                    </div>
                    <div className="w-1/2 tracking-[.10em]">
                        <div className="mt-10 ml-7 flex flex-col gap-5">
                            <h1 className="font-bold  text-[20px] ">Vogue Prism Evergreen Fleece Hoodie </h1>
                            <div className="flex items-baseline gap-7">
                                <h1 className="text-darker-green font-extrabold text-2xl">Rs. 999</h1>
                                <h3 className="text-xs line-through">MRP Rs. 1499</h3>
                            </div>
                            <p className="text-xs">(incl. of all taxes)</p>
                            <h3 className="text-[20px] font-bold text-gray-800">COLOR</h3>
                            <div className="flex gap-3">
                                <div className="bg-green-600 rounded-full w-6 h-6"></div>
                                <div className="bg-gray-800 rounded-full w-6 h-6"></div>
                                <div className="bg-red-600 rounded-full w-6 h-6"></div>
                                <div className="bg-blue-600 rounded-full w-6 h-6"></div>
                            </div>
                            <h3 className="text-[20px] font-bold text-gray-800">SIZE</h3>
                            <div className="flex gap-3 font-bold  text-lg">
                               <div><h1>S</h1></div>
                               <div><h1>M</h1></div>
                               <div><h1>L</h1></div>
                               <div><h1>XL</h1></div>
                               <div><h1>2XL</h1></div>
                               <div><h1>3XL</h1></div>
                            </div>
                            <div>
                                <button className="bg-dark-green px-10 py-2 rounded-2xl text-white font-bold">AVAILABLE</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

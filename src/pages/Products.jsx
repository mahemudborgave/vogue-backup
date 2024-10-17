import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Products({ slides }) {
  return (
    <div>
        <Navbar/>
        <div className="flex mx-10 h-screen w-full gap-5 mt-5">
            <div className="w-1/4 bg-lighter-green h-full">
                <div className="px-10 pt-5 ">
                    <h1 className="text-2xl">Filters</h1>  
                    <div className=" mt-4">
                        <h2 className="text-lg">Size</h2>
                        <div className="flex flex-col gap-3 mt-3">
                        <div className="flex gap-1">
                                <button className="hover:bg-darnpm k-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">S</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">S</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">S</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">S</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">S</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">S</h1></div></button>
                            </div>
                            <div className="flex gap-1">
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">28</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">30</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">32</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">34</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">36</h1></div></button>
                                <button className="hover:bg-dark-green hover:text-white"><div className="border-[1px] border-gray-600"><h1 className="px-2">40</h1></div></button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h2 className="text-lg">Colors</h2>
                        <div className="flex flex-col gap-1 mt-3">
                            
                            <label className="flex gap-2 items-center"><input type="checkbox" value={"Red"} className="h-4 w-4 " />Red</label>
                            <label className="flex gap-2 items-center"><input type="checkbox" value={"Red"} className="h-4 w-4 " />Red</label>
                            <label className="flex gap-2 items-center"><input type="checkbox" value={"Red"} className="h-4 w-4 " />Red</label>
                            <label className="flex gap-2 items-center"><input type="checkbox" value={"Red"} className="h-4 w-4 " />Red</label>
                            <label className="flex gap-2 items-center"><input type="checkbox" value={"Red"} className="h-4 w-4 " />Red</label>
                            <label className="flex gap-2 items-center"><input type="checkbox" value={"Red"} className="h-4 w-4 " />Red</label>

                        </div>
                    </div>
                </div>  
            </div>
            <div className="w-3/4 bg-gray-200 h-full">
                <h1>hi</h1>
            </div>
        </div>
    </div>
  );
}

import React from "react";

export default function SiteInsights(){
    return(
        <>
            <div>
                <div className="lg:m-20 m-12">
                    <div className="flex lg:flex-row flex-col bg-darker-green tracking-[.15em]  lg:justify-between justify-center items-center rounded-2xl">
                        <div className="bg-darker-green lg:h-36 w-2/6 lg:border-r-4  text-white lg:mt-0 rounded-l-2xl">
                            <div className="flex flex-col justify-center items-center p-5 ">
                                <h1 className="lg:text-6xl text-5xl">50+</h1>
                                <h2 className="lg:text-3xl text-2xl">Products</h2>
                            </div>
                        </div>
                        <div className="bg-darker-green lg:h-36 w-2/6 lg:border-r-4  text-white ">
                        <div className="flex flex-col justify-center items-center p-5 ">
                            
                                <h1 className="lg:text-6xl text-5xl">10k+</h1>
                                <h2 className="lg:text-3xl text-2xl">Users</h2>
                            </div>
                        </div>
                        <div className="bg-darker-green lg:h-36 w-2/6  text-white rounded-r-2xl ">
                            <div className="flex flex-col justify-center items-center p-5">
                                <h1 className="lg:text-6xl text-5xl">2</h1>
                                <h2 className="lg:text-3xl text-2xl">Outlets</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
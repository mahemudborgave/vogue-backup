    import React from "react";

    export default function Trending() {

        const trending = [
            { img: "4568144.webp", title: "Shirt" , price : 999},
            { img: "4568144.webp", title: "Shirt" , price : 999},
            { img: "4568144.webp", title: "Shirt" , price : 999},
            { img: "4568144.webp", title: "Shirt" , price : 999},
            { img: "4568144.webp", title: "Shirt" , price : 999},

        ]
        return (
            <>
                <div className="mt-20 mb-20 flex flex-col">
                    <div className="text-center">
                        <h1 className="lg:text-4xl text-2xl font-bold text-dark-green tracking-[.25em]">
                                TRENDING
                        </h1>    
                    </div>
                   <div className="flex overflow-x-auto gap-5 lg:mx-10 mx-3 pb-5">
                    {trending.map((trend,index)=>(
                         <div className="mt-10 flex-shrink-0 lg:flex-shrink lg:w-full w-2/5 flex flex-col justify-center  items-start text-left">
                            <div className="bg-dark-green rounded-md lg:self-center">
                                <img src={trend.img} alt={trend.title} className="lg:h-60 h-48"/>
                            </div>
                            <div className="flex flex-col text-left items-start pt-3">
                                <p className="lg:text-sm text-[12px]">{trend.title}</p>
                                <p className="text-darker-green font-extrabold lg:text-[18px] text-[12px]">Rs. {trend.price}</p>
                            </div>
                         </div>
                    ))}
                    <button className="flex-shrink-0 text-[12px] border text-white border-gray-400 py-3 px-6 mt-10 tracking-wider bg-dark-green hover:bg-darker-green w-auto rounded-xl self-center lg:hidden">
                        View All
                    </button>
                   </div>
                   {/* <button className="lg:text-1xl text-1xl border text-white border-gray-400 py-3 lg:px-8 px-4 mt-10 tracking-wider bg-dark-green  w-auto rounded-lg self-center">View All</button> */}
                   
                     {/* View All Button - Visible only on larger screens */}
                    <button className="hidden lg:flex lg:text-1xl text-1xl border text-white border-gray-400 py-3 lg:px-8 px-4 mt-5 tracking-wider bg-dark-green hover:bg-darker-green w-auto rounded-xl self-center">
                    View All
                    </button>


                </div>
            </>
        );
    }
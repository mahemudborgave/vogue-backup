    import React from "react";
    import Carousel from "./Carousel";



    function MainSlider (){

        let slides = [
            "4568144.webp",
            "4568147.webp",
            "4568146.webp"
        ]
        return (
            <>
            <div className="flex justify-center md:flex-row flex-col items-center w-full  h-4/5 lg:mt-20 mt-3 tracking-[1.0em]">
                    <div className="w-1/2 flex flex-1 order-2 md:order-1 justify-center items-center">
                    <div className="lg:text-left lg:text-5xl text-center text-4xl lg:mt-0 mt-10 font-extrabold ">
                    <h1 className="text-gray-400">FASHION</h1> <br />
                        <h1 className="text-dark-green">MADE</h1> <br />
                        <h1 className="text-gray-400">EASY</h1>
                        <button className="text-2xl border border-gray-400 p-5 mt-10 tracking-wider w-full">SHOP NOW</button>
                    </div>
                    </div> 

                    <div className="flex flex-1 lg:w-1/2  lg:m-auto order-1 md:order-2 m-5">
                    <Carousel slides={slides}/>
                    </div>
                    
            </div>

            

            </>
        );
    }

    export default MainSlider;
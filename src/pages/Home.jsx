import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MainSlider from "../components/MainSlider";
function Home() { 
    return (
        <>
            <div className='bg-gray-100 h-full'>
            <Navbar/>
            <MainSlider/>
            </div>
        </>
    );

}

export default Home;
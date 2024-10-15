import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MainSlider from "../components/MainSlider";
import Categories from '../components/Categories';
function Home() { 
    return (
        <>
            <div className='bg-gray-100 h-full'>
            <Navbar/>
            <MainSlider/>
            <Categories/>
            </div>
        </>
    );

}

export default Home;
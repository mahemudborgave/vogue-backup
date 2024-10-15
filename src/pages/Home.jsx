import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MainSlider from "../components/MainSlider";
import Categories from '../components/Categories';
import Trending from '../components/Trending';
import SiteInsights from '../components/SiteInsights';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
function Home() { 
    return (
        <>
            <div className='bg-gray-100 h-full'>
            <Navbar/>
            <MainSlider/>
            <Categories/>
            <Trending/>
            <SiteInsights/>
            <Reviews/>
            <Footer/>
            </div>
        </>
    );

}

export default Home;
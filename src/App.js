import React, { useState , Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Product from './pages/Product';
import Products from './pages/Products';
import AdminMain from './pages/AdminMain';
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'




class App extends Component {
  render() {

    return (
     <Router>
      <Routes>
        <Route path='/' element={<AdminMain/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<ContactUs/>}/>
        <Route path='/About' element={<AboutUs/>}/>
      </Routes>
     </Router>
    );
  }
}

export default App;

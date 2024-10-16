import React, { useState , Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Product from './pages/Product';



class App extends Component {
  render() {

    return (
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
     </Router>
    );
  }
}

export default App;

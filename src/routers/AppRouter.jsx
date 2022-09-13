import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Shop from '../pages/Shop';
import Pages from '../pages/Pages';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer'

export class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/pages' element={<Pages />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    )
  }
}

export default AppRouter
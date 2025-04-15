import { useState } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

import Footer from './components/Footer';
import Soglashenie from './pages/Soglashenie';
import Politika from './pages/Politika';
import Products from './pages/Products';
import Message from './pages/Message';


function App() {

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/message" element = {<Message />}></Route>
        <Route path = "/About" element = {<About />}></Route> 
         <Route path = "/Contacts" element = {<Contacts />}></Route> 
        <Route path = "/products" element = {<Products />}></Route>
        //Route footer
        <Route path = "/soglashenie" element = {<Soglashenie />}></Route>
        <Route path = "/politika" element = {<Politika />}></Route>
      </Routes>      
      </BrowserRouter>
      
    <Footer/>
    </>
  )
}

export default App
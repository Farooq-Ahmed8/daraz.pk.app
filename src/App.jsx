import { useState, useMemo } from "react";
import Header from './components/header'
import Carousel from './components/Carousel'
import Image from './components/Image'
import Main from './components/Main'
import FlashSale from './components/.FlashSale'
import Categories from './components/Category'
import Products from './components/Products'
import Custom from './components/Custom'
import Payments from './components/Payments'
import Footer from './components/Footer'
import Media from './components/Media'
import './App.css'


function App() {

  return (
    <div className="bg-gray-100 min-h-screen">
  <Header />

  <div className="w-full">
    <Carousel />
  </div>

  <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
    <Image />
  </div>

  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Main />
    
    <FlashSale />
    
    <Categories />
    
    <Products />
    <div className="flex justify-center items-center my-6 sm:my-8 md:my-1">
      <button className=" font-semibold px-6 sm:px-10 md:px-16 py-2 sm:py-3 text-sm sm:text-base md:text-lg  text-blue-400 border border-blue-400  transition  hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
       LOAD MORE
      </button>
    </div>

    <Custom />
    <Payments />
  <Footer />
  <Media />
  </main>
</div>

  )
}

export default App

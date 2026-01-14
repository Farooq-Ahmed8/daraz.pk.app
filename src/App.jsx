import { useState, useMemo } from "react";
import Header from '../src/components/Header'
import Carousel from '../src/components/Carousel'
import Image from '../src/components/Image'
import Main from '../src/components/Main'
import FlashSale from '../src/components/.FlashSale'
import Categories from '../src/components/Category'
import Products from '../src/components/Products'
import Custom from '../src/components/Custom'
import Payments from '../src/components/Payments'
import Footer from '../src/components/Footer'
import Media from '../src/components/Media'
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

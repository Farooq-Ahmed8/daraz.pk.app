import React, { useState, useEffect, useCallback } from 'react';

let Carousel = () => {
  let images = [
    'https://img.lazcdn.com/us/domino/028f5959-fd8d-48a5-a88b-ef48327e2975_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/16b2a75a-f94b-4c98-9f5b-07748721d199_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/ff85a1e2-3941-454d-aa35-329e261b6eb9_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/d8deeff6-5a5a-46cb-9a7b-e4db7cf5df7a_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/09727283-6af5-40c0-bd02-7ca3f6519982_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/63360477-2289-42fa-b0c5-4b9758d54517_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/df9d0e93-cc38-427f-a71f-15b6ec20bd73_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/5e9a813e-887b-414b-9b64-6c5e47acb78f_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/65b2b28e-4d9f-466e-86db-4dc9b263b4ba_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/f55e069e-6c44-49b2-9ff6-e1cd45465c62_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/6d797d8b-7619-4c66-b2ad-0f3f8a5926d1_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
    'https://img.lazcdn.com/us/domino/0046ec06-d120-480b-8b73-e2aaff6ad905_PK-1976-688.jpg_2200x2200q80.jpg_.avif',
  ];
  let [currentIndex, setCurrentIndex] = useState(0);
  let [isPaused, setIsPaused] = useState(false);

  let nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  let prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  let goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    let interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, nextSlide]);

  return (
    <div className="relative w-full max-w-6xl mx-auto cursor-pointer overflow-hidden shadow-xl">
      
      <div className="relative h-64 md:h-80 lg:h-96 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="absolute top-0 left-0 w-full h-full" style={{ left: `${index * 100}%` }}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}/>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm" aria-label="Previous slide" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm" aria-label="Next slide" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`} aria-label={`Go to slide ${index + 1}`} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}/>
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;
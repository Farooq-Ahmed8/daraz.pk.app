import React from 'react'

function Header() {
  return (
    <div className='w-full h-30 bg-[#F85606]'>
        <ol className='w-full h-8 flex justify-end items-end pr-15'>
            <li className='w-32 h-5 font-extralight font-mono text-sm cursor-pointer text-gray-50 mr-8 hover:text-gray-200'>SAVE MORE ON APP</li>
            <li className='w-26 h-5 font-extralight font-mono text-sm cursor-pointer text-gray-50 mr-8 hover:text-gray-200'>SELL ON DARAZ</li>
            <li className='w-28 h-5 font-extralight font-mono text-sm cursor-pointer text-gray-50 mr-8 hover:text-gray-200'>HELP & SUPPORT</li>
            <li className='w-10 h-5 font-extralight font-mono text-sm cursor-pointer text-gray-50 mr-8 hover:text-gray-200'>LOGIN</li>
            <li className='w-14 h-5 font-extralight font-mono text-sm cursor-pointer text-gray-50 hover:text-gray-200'>SIGN UP</li>
        </ol>

        <ol className='w-full h-20 flex px-27 items-center'>
        <img className="w-35 h-10 cursor-pointer" src="src/assets/daraz-logo.png" alt="Daraz logo" />
        <li className='ml-10 flex'>
            <input className='w-160 h-10 bg-gray-100 pl-5 rounded-bl-xs rounded-tl-xs focus:outline-none' type="text" placeholder='Search in Daraz...' />
            <button className="w-10 h-10 bg-red-200 flex items-center justify-center rounded-br-xs rounded-tr-xs cursor-pointer">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="red"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" /></svg>
            </button>
        </li>
        <li><svg className="w-7 h-7 ml-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 540" fill="white" > <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" /> </svg></li>
        </ol>

    </div>
  )
}

export default Header
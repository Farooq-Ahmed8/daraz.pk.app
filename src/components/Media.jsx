import React from 'react'

function Media() {
  return (
    <div className='w-full px-4 md:px-6 lg:px-11 flex flex-col lg:flex-row'>
        {/* Daraz International Section */}
        <div className='w-full lg:w-150 mb-8 lg:mb-0'>
            <p className='font-semibold text-lg md:text-xl py-3 text-center lg:text-left'>Daraz International</p>
            <div className='flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:justify-between gap-4 md:gap-3 lg:gap-0'>
                {/* Pakistan */}
                <div className='w-full md:w-48 lg:w-25 flex justify-center md:justify-start items-center gap-2 md:gap-3'>
                    <img className='w-8 h-8 md:w-9 md:h-9' src="https://img.lazcdn.com/us/domino/1fe7d756-2469-4d8e-82b2-d5eb7cbad875_PK-84-84.png" alt="Pakistan Flag" />
                    <p className='font-semibold text-base md:text-gl'>Pakistan</p>
                </div>
                
                {/* Bangladesh */}
                <div className='w-full md:w-48 lg:w-31 flex justify-center md:justify-start items-center gap-2 md:gap-3'>
                    <img className='w-8 h-8 md:w-9 md:h-9' src="https://img.lazcdn.com/us/domino/05a4ef2c-095c-407d-9295-aa45b5412de0_PK-84-84.png" alt="Bangladesh Flag" />
                    <p className='font-semibold text-base md:text-gl'>Bangladesh</p>
                </div>
                
                {/* Sri Lanka */}
                <div className='w-full md:w-48 lg:w-29 flex justify-center md:justify-start items-center gap-2 md:gap-3'>
                    <img className='w-8 h-8 md:w-9 md:h-9' src="https://img.lazcdn.com/us/domino/5536488d-c32a-44eb-8307-ed6651d907da_PK-84-84.png" alt="Sri Lanka Flag" />
                    <p className='font-semibold text-base md:text-gl'>Sri Lanka</p>
                </div>
                
                {/* Myanmar */}
                <div className='w-full md:w-48 lg:w-29 flex justify-center md:justify-start items-center gap-2 md:gap-3'>
                    <img className='w-8 h-8 md:w-9 md:h-9' src="https://img.lazcdn.com/us/domino/8896f696-b36f-4cb1-8576-2e86eed05046_PK-84-84.png" alt="Myanmar Flag" />
                    <p className='font-semibold text-base md:text-gl'>Myanmar</p>
                </div>
                
                {/* Nepal */}
                <div className='w-full md:w-48 lg:w-21 flex justify-center md:justify-start items-center gap-2 md:gap-3'>
                    <img className='w-9 h-9 md:w-10 md:h-10' src="https://img.lazcdn.com/us/domino/39f7f111-619f-47cd-993c-a551aaed15fd_PK-86-86.png" alt="Nepal Flag" />
                    <p className='font-semibold text-base md:text-gl'>Nepal</p>
                </div>
            </div>
        </div>
        
        {/* Follow Us Section */}
        <div className='w-full lg:w-50 lg:ml-15'>
            <p className='font-semibold text-lg md:text-xl py-3 text-center lg:text-left'>Follow Us</p>
            <div className='flex justify-center lg:justify-between gap-6 md:gap-8 lg:gap-0'>
                <img className='w-8 h-8 md:w-9 md:h-9 cursor-pointer hover:opacity-80 transition-opacity' src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01Wdetn224xMIRNihao_!!6000000007457-2-tps-34-34.png" alt="Social Media" />
                <img className='w-8 h-8 md:w-9 md:h-9 cursor-pointer hover:opacity-80 transition-opacity' src="https://img.lazcdn.com/us/domino/53d2eeea-55ed-4da7-99d6-31f9814b8e3e_PK-75-76.png" alt="Social Media" />
                <img className='w-8 h-8 md:w-9 md:h-9 cursor-pointer hover:opacity-80 transition-opacity' src="https://img.lazcdn.com/us/domino/f03a43e7-3655-4049-8c12-b1614ac2a2d4_PK-75-76.png" alt="Social Media" />
                <img className='w-8 h-8 md:w-9 md:h-9 cursor-pointer hover:opacity-80 transition-opacity' src="https://img.lazcdn.com/us/domino/6bf9555a-40ae-466d-a756-907f70aa3461_PK-76-76.png" alt="Social Media" />
            </div>
        </div>
    </div>
  )
}

export default Media
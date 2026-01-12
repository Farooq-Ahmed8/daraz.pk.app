import React from 'react';

const Payments = () => {
  return (
    <div className='w-full h-auto bg-amber-50 p-4 md:px-11 flex flex-col md:flex-row'>
        {/* Payment Methods Section */}
        <div className='w-full md:w-85 h-auto md:h-40 mb-6 md:mb-0'>
            <h1 className='font-semibold text-lg md:text-xl pb-4 md:pb-6'>Payments Methods</h1>
            <div className='w-full md:w-80 h-auto md:h-30 gap-2 md:gap-1 flex flex-wrap'>
                <img className='w-14 h-9 md:w-12 md:h-8 cursor-pointer' src="https://img.lazcdn.com/us/domino/ee9913f8-8258-4382-b97e-e2047ce93012_PK-139-84.png" alt="Payment Method" />
                <img className='w-14 h-9 md:w-12 md:h-8 cursor-pointer' src="https://img.lazcdn.com/us/domino/78355368-8518-4b88-9f8e-e5751ee0863a_PK-140-84.png" alt="Payment Method" />
                <img className='w-14 h-9 md:w-12 md:h-8 cursor-pointer' src="https://img.lazcdn.com/us/domino/5ba8a652-1445-45cb-a2a5-ed6043004243_PK-63-48.png" alt="Payment Method" />
                <img className='w-14 h-9 md:w-12 md:h-8 cursor-pointer' src="https://img.lazcdn.com/us/domino/dd8e0447-8052-44f3-8ab2-b24c56a2491f_PK-139-84.png" alt="Payment Method" />
                <img className='w-14 h-9 md:w-12 md:h-8 cursor-pointer' src="https://img.lazcdn.com/us/domino/e5c3cd93-b796-410f-9bfd-fbfdaa055149_PK-144-84.png" alt="Payment Method" />
                <img className='w-14 h-9 md:w-12 md:h-8 cursor-pointer' src="https://img.lazcdn.com/us/domino/56915ba8-b2c0-4caf-b3a1-7e0f3d2d45cf_PK-139-84.png" alt="Payment Method" />
                <img className='w-14 h-9 md:w-12 md:h-8 cursor-pointer' src="https://img.lazcdn.com/us/domino/75489476-3c86-44ed-bf81-8b0579d56e1c_PK-139-84.png" alt="Payment Method" />
                <img className='w-14 h-9 md:w-12 md:h-8 cursor-pointer' src="https://img.lazcdn.com/us/domino/6668ff96-bf9a-40bd-8ce4-f7f7c0bee385_PK-144-84.png" alt="Payment Method" />
                <img className='w-14 h-9 md:w-12 md:h-8 cursor-pointer' src="https://img.lazcdn.com/us/domino/7237a412-04cc-4571-a200-44f6f847a9da_PK-144-84.png" alt="Payment Method" />
            </div>
        </div>
        
        {/* Verified by Section */}
        <div className='w-full md:w-85 h-auto md:h-40 md:ml-10'>
            <h1 className='font-semibold text-lg md:text-xl pb-4 md:pb-6'>Verified by</h1>
            <div className='w-full md:w-80 h-auto md:h-30 gap-2 md:gap-1 flex flex-wrap'>
                <img className='w-20 h-10 md:w-15 md:h-8 cursor-pointer' src="https://img.drz.lazcdn.com/g/tps/imgextra/i4/O1CN01ZaMORP1I3qlBom0V2_!!6000000000838-2-tps-73-41.png" alt="Verified by" />
            </div>
        </div>
    </div>
  );
};

export default Payments;
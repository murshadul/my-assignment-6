import React from 'react';

const BannerMiddle = () => {
    return (
        <div className='mt-14 border bg-gradient-to-r from-[#4f39f6] to-[#9514fa]'>
           <div className="flex justify-evenly p-5 ">
            <div className="flex  ">
               <div className="">
                 <h2 className='text-3xl font-bold text-white'>50k+</h2>
                <p className='font-light text-white'>Active Users</p>
               </div>
                 <div className="divider divider-horizontal w-0.5 ml-28 bg-white"></div>
            </div>
            <div className="flex">
<div className="">
    <h2 className='text-3xl font-bold text-white'>200+</h2>
<p className='font-light text-white'>Premium Tools</p>
</div>
<div className="divider divider-horizontal w-0.5 ml-28 bg-white"></div>
            </div>
            <div className="">
                <h2 className='text-3xl text-white font-bold'>4.9</h2>
                <p className='text-white font-light'>Rating</p>
            </div>
            
            </div> 
        </div>
    );
};

export default BannerMiddle;
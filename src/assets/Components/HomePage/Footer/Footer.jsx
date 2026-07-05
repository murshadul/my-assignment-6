import React from 'react';
import { FaFacebook, FaYoutubeSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className="container mx-auto mt-38 ">
<div className="grid  md:grid-cols-5 gap-4 ">
    <div className="1 text-white mt-20">
        <h2 className='text-2xl font-bold pb-4'>DigiTools</h2>
        <p className='font-light'>Premium digital tools for creators,professionals, and businesses. Work smarter with our suite of powerful tools.</p>
    </div>
    <div className="2 text-white mt-20">
<h2 className=' font-bold'>Products</h2>
<p className='font-light'>Features</p>
<p className='font-light'>Pricing</p>
<p className='font-light'>Templates</p> 
<p className='font-light'>Integration</p>
    </div>
    <div className="3 text-white mt-20">
<h2 className=' font-bold'>Company</h2>
<p className='font-light'>About</p>
<p className='font-light'>Blogs</p>
<p className='font-light'>Career</p>
<p className='font-light'>Press</p>
    </div>
    <div className="4 text-white mt-20">
<h2 className=' font-bold'>Research</h2>
<p className='font-light'>Documentation</p>
<p className='font-light'>Help Center</p>
<p className='font-light'>Community</p>
<p className='font-light'>Contact</p>
    </div>
    <div className="5 text-white mt-20">
        <h2 className='font-bold'>Social Media</h2>
        <div className="flex gap-8 mt-10">
            <span className=' rounded-full'><FaYoutubeSquare /></span>
            <span><FaFacebook /></span>
            <span><FaSquareXTwitter /></span>
        </div>
        <div className="">

        </div>
    </div>
   

</div>
 <div className="divider before:bg-white after:bg-white text-white"></div>
 <div className="text-white flex justify-between mt-10">
    <h2>@2026 DigiTools.All rights reserved</h2>
    <div className="flex gap-5 mb-10">
        <p>Privacy</p>
        <p>Terms of Service</p>
        <p>Cookies</p>
    </div>
 </div>

            </div>
        </div>
    );
};

export default Footer;
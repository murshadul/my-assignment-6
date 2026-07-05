import React from 'react';
import { LuCircleDot } from 'react-icons/lu';
import  bannerImg from "../../../banner.png"
import { FaPlay } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='container mx-auto flex  md:justify-center items-center space-y-5 gap-12'>
            <div className="flex flex-col justify-start space-y-3">
              <div className="flex items-center text-center gap-2 text-[#9514fa]  w-2/3 rounded-2xl  pl-2 p-1 bg-[#9514fa]/10  backdrop-blur-3xl border border-white/10 shadow-2xl">
                < LuCircleDot/> New:AI-Powered Tools Available
              </div>
                <h2 className='text-5xl font-bold '>SuperCharge Your<br/>Digital Workflow</h2>
                <p className='text-l font-light'>Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today. <br />


Explore Products</p>
<div className="flex gap-4">
    <button className='btn p-4 font-bold text-white rounded-3xl bg-gradient-to-r to-[#9514fa] from-[#4f39f6]'>Explore Products</button>
    <button className='btn btn-outline hover:bg-blue-400 rounded-3xl p-3'><FaPlay></FaPlay> Watch Demo</button>
</div>
            </div>
            <div className="">
                <img className='w-4/5' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
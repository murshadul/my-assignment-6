import React from 'react';
import createAccount from '../../../user.png';
import Production from '../../../package.png'
import Creating from '../../../rocket.png'
const GetStarted = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col items-center p-5 mt-40 ">
                <div className="items-center text-center">
                    <h2 className='text-3xl font-bold'>Get Started in 3 Steps</h2>
                    <p className='font-light'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className="grid md:grid-cols-3  gap-6 mt-12">
<div className="flex flex-col items-center text-center shadow-2xl p-6 space-y-4">
<img className='w-[60px] p-3 rounded-full bg-fuchsia-100 ' src={createAccount} alt="" />
<h2 className='font-bold text-xl'>Create Account</h2>
<p className='font-light'>Sign up for free in seconds. No credit card required to get started.</p>
</div>
<div className="flex flex-col items-center text-center shadow-2xl p-6 space-y-4">
<img className='w-[60px] p-3 rounded-full bg-fuchsia-100 ' src={Production} alt="" />
<h2 className='font-bold text-xl'>Choose Products</h2>
<p className='font-light'>Browse our catthat fit your needs.alog and select the tools</p>
</div>
<div className="flex flex-col items-center text-center shadow p-6 space-y-4">
<img className='w-[60px] p-3 rounded-full bg-fuchsia-100 ' src={Creating} alt="" />
<h2 className='font-bold text-xl'>Start Creating</h2>
<p className='font-light'>Download and start using your premium 
tools immediately.</p>
</div>



                </div>
            </div>
        </div>
    );
};

export default GetStarted;
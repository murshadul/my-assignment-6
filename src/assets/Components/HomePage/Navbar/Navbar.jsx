import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between p-6 items-center text-center'>
<div className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-[#9514fa] to-[#4f39f6]">DigiTools</div>
<div className="flex gap-3">
    <p className='text-l font-light'>Products</p>
    <p className='text-l font-light'>Features</p>
    <p className='text-l font-light'>Pricing</p>
    <p className='text-l font-light'>Testionials</p>
    <p className='text-l font-light'>FAQ</p>
</div>
<div className="flex flex-row gap-3 items-center text-center">

   <MdOutlineShoppingCart/> <button >Login</button>
    <button className='btn rounded-3xl bg-gradient-to-r from-[#9514fa] to-[#4f39f6] font-bold text-white'>Get Started</button>
</div>
        
        </div>
    );
};

export default Navbar;
import React, { use, useState } from 'react';
import SelectedCart from '../SelectedCart/SelectedCart';
import PrimuimToolsCart from '../PrimuimeToolsCart/PrimuimToolsCart';
const PrimiumTools = ({ResponsePromise,selectedCart,setSelectedCart,coin,setCoin}) => {
    const Response=use(ResponsePromise);
      const [selectedType,setSelectedType]=useState("available");

      
    return (
        <div>
             <div className=" mx-auto p-9 text-center">
                <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
                <p className='text-l font-light'>Choose from our curated collection of premium digital products designed <br />
to boost your productivity and creativity.</p>

  <div className="mt-5">
     <button onClick={()=>setSelectedType("available")} className={`btn ${selectedType==="available"?" bg-gradient-to-r from-[#4f39f6] to-[#9514fa]":"btn"} rounded-3xl p-4`}>Products</button>
   <button onClick={()=>setSelectedType("select")} className={`btn ${selectedType==="select"?" bg-gradient-to-r from-[#4f39f6] to-[#9514fa]":"btn"} rounded-3xl p-4`}>Cart({selectedCart.length})</button>
  </div>

            </div>
           {
            selectedType==="available"? <PrimuimToolsCart coin={coin} setCoin={setCoin} setSelectedCart={setSelectedCart} selectedCart={selectedCart} Response={Response}></PrimuimToolsCart>:<SelectedCart coin={coin} setCoin={setCoin} setSelectedCart={setSelectedCart} selectedCart={selectedCart}></SelectedCart>
 }
        </div>
    );
};

export default PrimiumTools;
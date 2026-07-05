import React, { useState } from 'react';

import Cart from '../../Ui/Cart';


const PrimuimToolsCart = ({Response,selectedCart,setSelectedCart,setCoin,coin}) => {
    const Data=Response;
    // console.log(Data,"Data");
  

    return (

    
        <div>
           
        <div className="grid mx-auto md:grid-cols-3 gap-6 mt-6">
             {
            Data.map((PremiumCart,index)=>{
                return <Cart key={index} coin={coin} setCoin={setCoin} PremiumCart={PremiumCart} selectedCart={selectedCart} setSelectedCart={setSelectedCart}></Cart>
            })
         }
        </div>
        </div>
    );
};

export default PrimuimToolsCart;
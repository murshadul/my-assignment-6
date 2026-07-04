import React, { useState } from 'react';

import Cart from '../../Ui/Cart';


const PrimuimToolsCart = ({Response}) => {
    const Data=Response;
    // console.log(Data,"Data");
  

    return (

    
        <div>
           
        <div className="grid mx-auto md:grid-cols-3 gap-6 mt-6">
             {
            Data.map((PremiumCart,index)=>{
                return <Cart key={index} PremiumCart={PremiumCart}></Cart>
            })
         }
        </div>
        </div>
    );
};

export default PrimuimToolsCart;
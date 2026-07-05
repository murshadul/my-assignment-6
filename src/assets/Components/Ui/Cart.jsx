import React, { useState } from 'react';
import Feature from '../HomePage/PrimuimeToolsCart/Feature';
import { toast } from 'react-toastify';

const Cart = ({PremiumCart,selectedCart,setSelectedCart,coin,setCoin}) => {
    const {name,description,price,img,features}=PremiumCart;
const [isClicked,setIsClicked]=useState(false)

const handleBtnClicked=()=>{
  toast.success(`🦄 ${name} Added to Cart`,
    {
position: "top-center",
autoClose: 5000,
theme: "colored",
});
setCoin(coin+price)
setIsClicked(true);
setSelectedCart([...selectedCart,PremiumCart]);
}

    return (
        <div>
                    <div className="card  bg-base-100 shadow-sm h-full translate-all  md:hover:translate-1 cursor-pointer">
  <div className="card-body">
   <div className="flex justify-between">
    <img className='border-none p-2  bg-white rounded-full' src={img} alt="" />
     <span className="badge badge-xs badge-warning">{name}</span>
   </div>
    <div className="flex ">
      
    </div><h2 className="text-3xl font-bold">{PremiumCart.name}</h2>
      <p>{description}</p>
    <span className="text-xl"><span className='text-2xl font-bold'>${price}</span>/{PremiumCart.period}</span>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {
features.map((feature,index)=>{
    return <Feature key={index} feature={feature}></Feature>
})

        }
     
    </ul>
    <div className="mt-6" onClick={()=>handleBtnClicked()}>
     {
        isClicked?<button className="btn bg-green-300 text-white btn-block">Added to Cart</button>: <button className="btn btn-primary btn-block">Buy Now</button>
      
     }
    </div>
  </div>
</div>
                </div>
    );
};

export default Cart;
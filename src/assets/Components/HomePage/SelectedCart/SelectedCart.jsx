import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import cartImg from '../../../shopping-cart.png'
const SelectedCart = ({selectedCart,setSelectedCart,coin,setCoin}) => {
    // console.log(selectedCart,"selectedCart");
    const handleRemoveBtn=(carts)=>{
        // console.log(carts,"carts");
        setCoin(coin-carts.price);

         const filterRemove=selectedCart.filter(chooseCart=>chooseCart.name!==carts.name);
         setSelectedCart(filterRemove);
    }
    const allDeleteBtn=()=>{
// console.log(selectedCart);
setCoin(0)

setSelectedCart([]);
    }

    return (
        <div>
            {selectedCart.length===0?<div className="container mx-auto flex flex-col items-center">
             <img className='w-[100px]' src={cartImg} alt="" />
                <h2 className='text-2xl font-bold'>Your Cart is empty</h2>

            </div>:
          <div className="container mx-auto bg-white shadow-2xl space-y-6 mt-4">
 <h2 className='text-3xl font-bold'>Your Cart</h2>
              {
                selectedCart.map((carts,ind)=>{
                    return <div>
                <div key={ind} className='flex justify-between  rounded-xl items-center p-3 shadow w-5/6 mx-auto pt-6 mt-7' >
<div className=" flex gap-6 ">
    <img className='w-[50px]' src={carts.img} alt="" />
    <div className="">
        <h2 className='text-2xl font-bold'>{carts.name}</h2>
        <p className='font-light text-xl'>${carts.price}</p>
    </div>
</div>
<div className="">
    <button onClick={()=>handleRemoveBtn(carts)} className='btn text-red-400'>Remove</button>
</div>
                    </div>
                </div>}) 
            } <div className="flex flex-col mx-auto">
                <div className="flex justify-between container mx-auto p-8 shadow-2xl">
<h2>Total:</h2>
                <p>${coin}</p>
                </div>
                <button onClick={()=>allDeleteBtn()} className=" btn btn-primary w-full  p-2  font-bold text-xl mb-3 rounded-2xl">Proceed To CheckOut</button>
            </div>
           
          
          </div>}
        </div>
    );
};

export default SelectedCart;
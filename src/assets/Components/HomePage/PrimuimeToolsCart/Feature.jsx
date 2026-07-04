import React from 'react';
import { TiTick } from 'react-icons/ti';

const Feature = ({feature}) => {
    return (
        <div className='flex gap-2 items-center'>
         <TiTick></TiTick>   <p>{feature}</p>
        </div>
    );
};

export default Feature;
import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

const PriceCard = ({price}) => {
    return (
        <div className='border-2 rounded-lg p-8 bg-slate-200 flex flex-col'>
            <h4 className='text-center'>
            <span className='text-2xl text-purple-400 font-bold'>{price.price}</span>
            <span className='font-medium text-blue-400'>/month</span>
            </h4>
            <h3 className='text-2xl text-blue-400 font-semibold text-center'>{price.name}</h3>
            <p className='mt-4 mb-2 text-purple-400 underline'>Features:</p>
            {
                price.features.map(feature=> <li className='style-none flex'><ShieldCheckIcon className="h-6 w-6 text-blue-500" />{feature}</li>)
            }
            <button className='border-0 px-10 py-3 text-white font-semibold text-center mt-auto focus:outline-none bg-blue-400 hover:bg-purple-400'>BUY NOW</button>
        </div>
    );
};

export default PriceCard;
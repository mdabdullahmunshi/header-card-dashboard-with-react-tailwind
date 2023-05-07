import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const Pricelist = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])

    return (
        <div className='px-20 py-5'>
            <h2 className='bg-purple-400 text-3xl text-center text-white font-semibold py-3'>Price list here</h2>
            <div className="grid md:grid-cols-3 gap-3 py-5">
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default Pricelist;
import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const products = useSelector((state)=>state.products);
    return (
        <div className=' py-8 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className=' col-span-2'>
                    {
                       products.length?products.map((product, index)=>(<div key={product.id}>product</div>)):<div>no product available</div>
                    }
                </div>
                <div className='col-span-1'>form </div>
            </div>
        </div>
    );
};

export default Home;
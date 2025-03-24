import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../product/ProductCard';
import ADDproduct from '../Addproduct/ADDproduct';

const Home = () => {
    const products = useSelector((state)=>state.products);
    return (
        <div className=' py-8 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className=' col-span-2'>
                   <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                   {
                       products.length?products.map((product, index)=>(<ProductCard key={index} product={product}></ProductCard>)):<div>no product available</div>
                    }
                   </div>
                </div>
                <div className='col-span-1'><ADDproduct></ADDproduct> </div>
            </div>
        </div>
    );
};

export default Home;
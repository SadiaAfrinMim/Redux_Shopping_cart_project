import React from 'react';

const Home = () => {
    return (
        <div className=' py-8 px-4'>
            <div className='grid grid-cols-4 md:grid-cols-12 gap-4'>
                <div className=' col-span-8'>product display</div>
                <div className='col-span-4'>form </div>
            </div>
        </div>
    );
};

export default Home;
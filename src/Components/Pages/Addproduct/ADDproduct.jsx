import React from 'react';

const ADDproduct = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg p-6 ">
            <h2 className='text-xl font-semibold text-black mb-4'>Add new contact</h2>
            <form action="">
                <div>
                    <label className='text-sm font medium block text-gray-600'>product Name</label>
                    <input type="text" name='name' id='name' placeholder='product 1' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
                </div>
                {/* category */}
                <div>
                    <label className='text-sm font medium block text-gray-600'>category</label>
                   <select  className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' name="categoy" id="category">
                   <option value="">choose a  category</option>
                    <option value="Bags">Bags</option>
                    <option value="Shoe">Shoe</option>
                    <option value="smartwatches">smartwatches</option>
                   </select>

                </div>
                {/* img url */}
                <div>
                    <label className='text-sm font medium block text-gray-600'>image URL</label>
                    <input type="text" name='image' id='image' placeholder='https//:' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
                </div>
                {/* price */}
                <div>
                    <label className='text-sm font medium block text-gray-600'>price</label>
                    <input type="number" name='price' id='price' placeholder='price' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
                </div>
            </form>
            
        </div>
    );
};

export default ADDproduct;
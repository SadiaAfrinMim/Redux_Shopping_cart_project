import React from 'react';
import { useForm } from "react-hook-form"

const ADDproduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()
      const onSubmit = (data) => console.log(data)
    
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 ">
            <h2 className='text-xl font-semibold text-black mb-4'>Add new contact</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <div>
                    <label className='text-sm font medium block text-gray-600'>product Name</label>
                    <input  {...register("name", { required: true })} type="text" name='name' id='name' placeholder='product 1' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
                </div>
                {/* category */}
                <div>
                    <label className='text-sm font medium block text-gray-600'>category</label>
                   <select  {...register("category", { required: true })}  className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' name="category" id="category">
                   <option value="">choose a  category</option>
                    <option value="Bags">Bags</option>
                    <option value="Shoe">Shoe</option>
                    <option value="smartwatches">smartwatches</option>
                   </select>

                </div>
                {/* img url */}
                <div>
                    <label className='text-sm font medium block text-gray-600'>image URL</label>
                    <input  {...register("image", { required: true })} type="text" name='image' id='image' placeholder='https//:' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
                </div>
                {/* price */}
              <div className='flex items-center justify-center gap-4'>
              <div>
                    <label className='text-sm font medium block text-gray-600'>price</label>
                    <input  {...register("price", { required: true })} type="number" name='price' id='price' placeholder='100' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
                </div>
                <div>
                    <label className='text-sm font medium block text-gray-600'>date</label>
                    <input  {...register("date", { required: true })} type="date" name='date' id='date'  className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline focus:ring-1 focus:ring-indigo-500' />
                </div>
              </div>
              <button type='submit' className=' btn btn-primary w-full'>Add Product</button>
            </form>
            
        </div>
    );
};

export default ADDproduct;
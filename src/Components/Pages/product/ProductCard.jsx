import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/features/cart/cartSlice';

const ProductCard = ({product}) => {
    const {id,name,category,image,price,date} = product ||{}
    const dispatch = useDispatch()
    const handleAddToCart =()=>{
      dispatch(addToCart(product))

    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <div className="card-actions justify-end">
      <button onClick={handleAddToCart} className="btn btn-primary">Add to card</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;
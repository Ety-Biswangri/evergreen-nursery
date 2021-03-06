import React from 'react';
import './Product.css';
import { FaShoppingCart } from 'react-icons/fa';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price } = product;

    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
            </div>
            <button onClick={() => handleAddToCart(product)}>
                <p>Add to Cart</p>
                <FaShoppingCart className='icon'></FaShoppingCart>
            </button>
        </div>
    );
};

export default Product;
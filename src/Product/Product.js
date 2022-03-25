import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    // console.log(product.img)
    const { img, name, price } = product;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h3>Price: ${price}</h3>
            </div>
            <button>
                Add to Cart

            </button>
        </div>
    );
};

export default Product;
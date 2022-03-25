import React from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = ({ products }) => {
    return (
        <div className='shop'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='orders-container'>
                Cart-container
            </div>
        </div>
    );
};

export default Shop;
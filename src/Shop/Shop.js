import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = ({ products }) => {
    const [carts, setCarts] = useState([]);

    const handleAddToCart = (selectedProduct) => {
        const newCarts = [...carts, selectedProduct];
        setCarts(newCarts);
    }

    const chooseOne = () => {
        if (carts.length === 0) {
            return;
        }
        const item = carts[Math.floor(Math.random() * carts.length)];
        const chosenItem = [item];
        setCarts(chosenItem);
    }

    const chooseAgain = () => {
        const emptyCart = [];
        setCarts(emptyCart);
    }

    return (
        <div className='shop'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='carts-container'>
                <Cart chooseOne={chooseOne} chooseAgain={chooseAgain} carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;
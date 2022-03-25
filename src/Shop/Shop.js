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

    /*    const chooseOne = () => {
           const chosenCartId = Math.floor(Math.random() * 10) + 1;
           if(chosenCartId )
       } */

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
                <Cart carts={carts}></Cart>
                <button>Choose 1 for Me</button>
                <br />
                <button onClick={chooseAgain}>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;
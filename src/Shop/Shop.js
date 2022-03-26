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
        const item = carts[Math.floor(Math.random() * carts.length)];
        const chosenName = item.name;
        alert(chosenName);
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
                <h2 style={{ fontWeight: "bolder", textAlign: "center", marginBottom: "40px", }}>Orders List</h2>
                <div className='carts'>
                    <Cart carts={carts}></Cart>
                </div>
                <button onClick={chooseOne}>Choose 1 for Me</button>
                <br />
                <button onClick={chooseAgain}>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;
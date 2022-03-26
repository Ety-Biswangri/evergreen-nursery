import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = ({ products }) => {
    let [carts, setCarts] = useState([]);

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct)

        for (const cart of carts) {
            if (cart.id === selectedProduct.id) {
                alert('Please Add New One')
                return;
            }
        }

        const newCarts = [...carts, selectedProduct];
        setCarts(newCarts);
    }

    const chooseOne = () => {
        if (carts.length === 0) {
            return;
        }
        const item = carts[Math.floor(Math.random() * carts.length)];
        carts = [item];
        setCarts(carts);
    }

    const chooseAgain = () => {
        carts = [];
        setCarts(carts);
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
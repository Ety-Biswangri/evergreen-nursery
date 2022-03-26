import React from 'react';
import './Cart.css';

const Cart = ({ carts }) => {
    return (
        <div className='cart'>
            {
                carts.map(cart => (
                    <li style={{ marginBottom: '10px' }} key={cart.name}>{cart.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;
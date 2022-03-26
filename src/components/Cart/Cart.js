import React from 'react';
import './Cart.css';

const Cart = ({ carts, chooseAgain, chooseOne }) => {
    return (
        <div className='cart'>
            <h2 style={{ fontWeight: "bolder", textAlign: "center", marginBottom: "40px", }}>Selected Flowers</h2>
            {
                carts.map(cart => (
                    <li style={{ marginBottom: '10px' }} key={cart.name}>{cart.name}</li>
                ))
            }
            <div className='buttons'>
                <button onClick={chooseOne}>Choose any 1 for Me</button>
                <br />
                <button onClick={chooseAgain}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;
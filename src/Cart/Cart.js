import React from 'react';

const Cart = ({ carts }) => {
    return (
        <div>
            <h3>Carts Container</h3>
            {
                carts.map(cart => (
                    <li key={cart.name}>{cart.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;
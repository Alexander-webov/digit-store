import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart = ({ order }) => {
    return (
        <li className='cart__icon'>
            <NavLink to="/basket">
                <i className="material-icons">shopping_cart</i>
            </NavLink>
            <span className='cart__icon-num'>{order}</span>
        </li>
    );
}

export default Cart;

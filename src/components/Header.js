import React from 'react';
import Cart from './Cart';
import { NavLink } from 'react-router-dom';

const Header = ({ order }) => {
    return (
        <header className='header'>
            <nav className="blue darken-3">
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo"><i className="material-icons">cloud</i>Цифра магазин</NavLink>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="search"><i className="material-icons">search</i></NavLink></li>
                        <li><NavLink to="contacts"><i className="material-icons">sms</i></NavLink></li>
                        <li><NavLink to="user"><i className="material-icons">person</i></NavLink></li>
                        <Cart order={order} />
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

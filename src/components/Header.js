import React from 'react';
import Cart from './Cart';

const Header = () => {
    return (
        <header>
            <nav className="blue darken-3">
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Цифра магазин</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                        <li><a href="badges.html"><i className="material-icons">sms</i></a></li>
                        <li><a href="collapsible.html"><i className="material-icons">person</i></a></li>
                        <Cart />
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

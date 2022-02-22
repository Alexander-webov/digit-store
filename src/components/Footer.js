import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer blue darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Полезности</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Больше товаров</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Доставка</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">О нас</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Контакты</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2022 Цифра магазин

                </div>
            </div>
        </footer>
    );
}

export default Footer;

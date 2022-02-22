import React, { useState } from 'react';

const Goods = ({ shop, onOrderCart }) => {

    return (
        <>
            {
                shop.map(el => {
                    return el.granted.map(good => {
                        console.log(good);

                        return (
                            <div key={good.id} className='shop-item'>
                                <div className="card">

                                    <div className="card-image">

                                        <img src={good.images.background} />
                                        <span className="card-title">{good.name}</span>
                                        <a className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => onOrderCart(good.id)}><i className="material-icons">+</i></a>
                                    </div>

                                    <div className="card-content">
                                        <p>{good.description}</p>
                                        <div className='price'>
                                            <div className='price-new'>
                                                Последняя цена:
                                                <span> {el.price.finalPrice} руб.</span>
                                            </div>
                                            <div className='price-old'>
                                                Старая цена: <span>{el.price.regularPrice} руб.</span>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                })
            }
        </>
    );
}

export default Goods;

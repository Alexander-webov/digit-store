import React, { useState, useEffect } from 'react';


const els = ({ shop, onOrderCart, shopCategorie, elsInBasket }) => {

    console.log(shop);
    return (
        <>
            {
                shop.filter(item => {
                    return shopCategorie === 'Все товары' ? item : item.displayType.includes(shopCategorie)
                })
                    .map((el) => {
                        return (
                            <div key={el.mainId} className='shop-item'>
                                <div className="card">
                                    <div className="card-image">
                                        <img src={el.displayAssets[0].background} alt="" />
                                        <div className="card-title">
                                            {el.displayName}
                                            <span>Категория: {el.displayType}</span>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <p>{el.displayDescription}</p>
                                        <div className='price'>
                                            <div className="price-box">
                                                <div className='price-new'>
                                                    <span> {el.price.finalPrice} руб.</span>
                                                </div>
                                                <div className='price-old'>
                                                    {
                                                        el.price.finalPrice !== el.price.regularPrice && <span>{el.price.regularPrice} руб.</span>
                                                    }
                                                </div>
                                            </div>
                                            {
                                                el.btnActive
                                                    ?
                                                    <span
                                                        className="btn-buy btn-floating halfway-fab btn-disable"
                                                    >
                                                        Уже добавлен
                                                    </span>
                                                    :
                                                    <span
                                                        className="btn-buy btn-floating halfway-fab waves-effect waves-light red"
                                                        onClick={() => {
                                                            onOrderCart(
                                                                el.mainId,
                                                                el.displayName,
                                                                el.displayDescription,
                                                                el.price.finalPrice,
                                                                el.displayAssets[0].background
                                                            )
                                                        }}
                                                    >
                                                        В корзину
                                                    </span>

                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
            }

        </>
    );
}

export default els;

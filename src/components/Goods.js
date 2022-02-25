import React from 'react';


const Goods = ({ shop, onOrderCart, shopCategorie, goodsInBasket }) => {
    return (
        <>
            {
                shop.filter(item => {
                    return shopCategorie === 'Все товары' ? item : item.displayType.includes(shopCategorie)
                })
                    .map((el) => {
                        return (
                            el.granted.map((good) => {
                                return (
                                    <div key={good.id} className='shop-item'>
                                        <div className="card">

                                            <div className="card-image">

                                                <img src={good.images.background} alt="" />
                                                <div className="card-title">

                                                    {good.name}
                                                    <span>Категория: {el.displayType}</span>
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <p>{good.description}</p>
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
                                                    <span
                                                        className="btn-buy btn-floating halfway-fab waves-effect waves-light red"
                                                        onClick={() => onOrderCart(
                                                            good.id,
                                                            good.name,
                                                            good.description,
                                                            el.price.finalPrice,
                                                            good.images.background
                                                        )}>
                                                        В корзину
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )

                        )


                    })
            }
        </>
    );
}

export default Goods;

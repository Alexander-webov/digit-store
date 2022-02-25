import React from 'react';
import { NavLink } from 'react-router-dom';

const Basket = ({ goodsInBasket, onDelProductBasket }) => {

    return (
        <div className='app-container'>
            {
                goodsInBasket.length === 0
                    ?
                    <div className='basket-empty'>
                        <h2>В корзине пока ничего нет</h2>
                        <p>Начните с главной страницы или воспользуйтесь поиском, чтобы найти что-то конкретное</p>

                    </div>
                    :
                    <ul>
                        {
                            goodsInBasket.map(el => {
                                return (
                                    <li key={el.id} className='basket__item'>
                                        <img
                                            className='basket__item-preview'
                                            src={el.preview} alt="" />
                                        <div className='basket__item-text'>
                                            <span className='basket__item-name'>
                                                <b>Товар:</b> {el.name}
                                            </span>
                                            <p className='basket__item-descr'>
                                                <b> Описание: </b>{el.descr}
                                            </p>
                                            <span className='basket__item-cost'>
                                                <b>Стоимость:</b> {el.cost} руб.
                                            </span>
                                        </div>
                                        <div className='basket__item-delete' onClick={() => onDelProductBasket(el.id)}>
                                            удалить
                                        </div>
                                    </li>
                                )
                            })
                        }

                        <li>

                        </li>
                    </ul>
            }



            <div className='btn-basket'>
                <NavLink to="/" className='main-btn'>Перейти на главную</NavLink>
            </div>
        </div>
    );
}

export default Basket;

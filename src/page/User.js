import React from 'react';
import { NavLink } from 'react-router-dom';

const User = () => {

    return (
        <div className='app-container'>
            <h3>Профиль: user1</h3>
            <div className='btn-basket'>
                <NavLink to="/" className='main-btn'>Перейти на главную</NavLink>
            </div>
        </div>
    );
}

export default User;

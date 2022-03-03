import React from 'react';



const Searchinput = ({ searchProduct }) => {






    return (
        <div className='search'>
            <span className='search__icon' ><i className="material-icons">search</i></span>
            <input onChange={(e) => searchProduct(e.target.value)} className='search__input' type="text" placeholder='Введите что ищите....' />
        </div>
    );
}

export default Searchinput;

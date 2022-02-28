import React from 'react';

const Menu = ({ typeProduct, onFilterCategorieGoods }) => {

    const activeClassAddDel = () => {

        document.querySelectorAll('.categorie li').forEach(el => {
            console.log(el.innerText);
            if (el.classList.contains('active')) {
                el.classList.remove('active')
            }

        })
    }

    return (
        <div className='menu'>
            <div className='categorie-wrapper'>
                <ul className={`categorie`}>
                    {
                        typeProduct.map(categorie => {

                            return (
                                <li
                                    onClick={(e) => {
                                        onFilterCategorieGoods(categorie)
                                        activeClassAddDel()
                                        e.target.classList.add('active')
                                    }}
                                    key={categorie}
                                    className={''}
                                >
                                    {categorie}

                                </li>
                            )
                        })
                    }
                </ul>




            </div>
        </div>

    );
}

export default Menu;

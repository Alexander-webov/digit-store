import React, { useState, useEffect } from 'react';


const Menu = ({ typeProduct, onFilterCategorieGoods }) => {

    const [categorie, setCategorie] = useState([]);


    useEffect(() => {
        const arr = []
        for (let i = 0; i < typeProduct.length; i++) {
            // Первому 
            if (typeProduct[i] === 'Все товары') {
                arr.push({ name: typeProduct[i], active: true })
            } else {
                arr.push({ name: typeProduct[i], active: false })
            }
        }
        setCategorie([...arr])
    }, []);



    const activeClassAddDel = (name) => {
        categorie.filter(el => el.active ? el.active = false : null);
        const elem = categorie.find(el => el.name === name)
        elem.active = true;
    }

    return (
        <div className='menu'>
            <div className='categorie-wrapper'>
                <ul className={`categorie`}>
                    {
                        categorie.map(categorie => {
                            return (
                                <li
                                    onClick={(e) => {
                                        onFilterCategorieGoods(categorie.name)
                                        activeClassAddDel(categorie.name)
                                    }}
                                    key={categorie.name}
                                    className={categorie.active ? 'active' : ''}
                                >
                                    {categorie.name}

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

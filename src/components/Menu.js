import React, { useState, useEffect } from 'react';


const Menu = ({ typeProduct, onFilterCategorieGoods }) => {

    const [categorie, setCategorie] = useState([]);
    const arr = []
    for (let i = 0; i < typeProduct.length; i++) {
        // Первому 
        if (typeProduct[i] === 'Все товары') {
            arr.push({ name: typeProduct[i], active: true })
        } else {
            arr.push({ name: typeProduct[i], active: false })
        }
    }

    useEffect(() => {

        setCategorie([...arr])
    }, []);
    console.log(categorie);


    const activeClassAddDel = (name) => {
        categorie.filter(el => el.active ? el.active = false : true);
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

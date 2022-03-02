import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import Basket from './page/Basket';

import Header from './components/Header';
import Footer from './components/Footer';
import Goods from './components/Goods';
import Preloader from './components/Preloader';
import Modaladdbasket from './components/ModalAddBasket';
import Menu from './components/Menu';
import User from './page/User';
import Contact from './page/Contact';



function App() {
  const [shop, setshop] = useState([]);

  const [goodsInBasket, setGoodsInBasket] = useState([]);
  const [typeProduct, setTypeProduct] = useState([]);
  const [loader, setloader] = useState(false);
  const [order, setOrder] = useState(0);
  const [categorie, setCategorie] = useState('Все товары');
  const [modalAddToBasket, setModalAddToBasket] = useState(false);




  useEffect(() => {
    const data = async () => {
      const res = await fetch('https://fortniteapi.io/v2/shop?lang=ru', {
        headers: {
          Authorization: 'd2ef5ba7-436bb90f-e92b4526-17a2b707',
        }
      })
      const data = await res.json()

      //Добавления доп. значения в объект btnActive для дальнейшей работы с кнопками в карточках товара
      const arrBtnShow = []
      data.shop.map(el => arrBtnShow.push({ ...el, btnActive: false }))
      setshop([...arrBtnShow])
      setloader(true)

    }
    data()
  }, [])


  useEffect(() => {
    setTypeProduct(['Все товары', ...new Set(shop.map(type => type.displayType))])
  }, [shop])





  const onOrder = (id, name, description, price, images) => {
    setOrder(goodsInBasket.length + 1)
    const newObjInBasket = {
      id,
      preview: images,
      name: name,
      descr: description,
      cost: price
    }
    setGoodsInBasket(rev => [...rev, newObjInBasket])
    setModalAddToBasket(true)

    const indexEl = shop.findIndex(el => {
      return el.mainId === id
    })
    const findEl = shop.slice(indexEl, indexEl + 1)
    findEl[0].btnActive = true;

    const firstArr = shop.slice(0, indexEl)
    const lasttArr = shop.slice(indexEl + 1)
    setshop([...firstArr, ...findEl, ...lasttArr])
  }




  if (modalAddToBasket) {
    setTimeout(() => {
      setModalAddToBasket(false)
    }, 600)
  }

  const onDelProductBasket = (id) => {
    const filterArrGoodsInBasket = goodsInBasket.filter(prod => prod.id !== id)
    setGoodsInBasket([...filterArrGoodsInBasket])
    setOrder(goodsInBasket.length - 1)

    const indexEl = shop.findIndex(el => {
      return el.mainId === id
    })
    const findEl = shop.slice(indexEl, indexEl + 1)
    findEl[0].btnActive = false;

    const firstArr = shop.slice(0, indexEl)
    const lasttArr = shop.slice(indexEl + 1)
    setshop([...firstArr, ...findEl, ...lasttArr])








  }

  const onFilterCategorieGoods = (categor) => {
    setCategorie(categor)
  }



  return (
    <div className="App">
      <Header order={order} />
      <Routes>
        <Route path="/basket" element={<Basket onDelProductBasket={onDelProductBasket} goodsInBasket={goodsInBasket} />} />
        <Route path="/user" element={<User />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/" element={
          <div className='app-container shop-wrapper'>
            {
              modalAddToBasket ?
                <Modaladdbasket />
                : null
            }
            <div className='shop-items' >
              {
                !loader ?
                  <Preloader /> :
                  <>
                    <Menu typeProduct={typeProduct} onFilterCategorieGoods={onFilterCategorieGoods} />
                    <Goods shop={shop} shopCategorie={categorie} onOrderCart={onOrder} goodsInBasket={goodsInBasket} />
                  </>

              }
            </div>
          </div>
        } />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

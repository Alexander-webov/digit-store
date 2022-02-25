import React, { useState, useEffect } from 'react';
import Basket from './components/Basket';
import Footer from './components/Footer';
import Goods from './components/Goods';
import Header from './components/Header';
import Preloader from './components/Preloader';
import { Routes, Route } from "react-router-dom";
import Modaladdbasket from './components/ModalAddBasket';



function App() {
  const [shop, setshop] = useState([]);
  const [goodsInBasket, setGoodsInBasket] = useState([]);
  const [typeProduct, setTypeProduct] = useState([]);
  const [loader, setloader] = useState(false);
  const [order, setOrder] = useState(0);
  const [categorie, setCategorie] = useState('Все товары');
  const [modalAddToBasket, setModalAddToBasket] = useState(false);



  useEffect(() => {
    fetch('https://fortniteapi.io/v2/shop?lang=ru', {
      headers: {
        Authorization: 'd2ef5ba7-436bb90f-e92b4526-17a2b707',
      }
    }).then(data => data.json())
      .then(data => {
        setshop(data.shop.splice(0, 20))
        setloader(true)
      })
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
  }

  const onFilterCategorieGoods = (categor) => {
    setCategorie(categor)
  }


  return (
    <div className="App">
      <Header order={order} />
      <Routes>
        <Route path="/basket" element={<Basket onDelProductBasket={onDelProductBasket} goodsInBasket={goodsInBasket} />} />
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
                    <ul className='categorie'>
                      {
                        typeProduct.map(categorie => <li
                          onClick={() => {
                            onFilterCategorieGoods(categorie)
                          }}
                          key={categorie}>
                          {categorie}
                        </li>)
                      }
                    </ul>
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

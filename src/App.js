import React, { useState, useEffect } from 'react';
import Basket from './components/Basket';
import Footer from './components/Footer';
import Goods from './components/Goods';
import Header from './components/Header';
import Preloader from './components/Preloader';
import { Routes, Route } from "react-router-dom";



function App() {
  const [shop, setshop] = useState([]);
  const [goodsInBasket, setGoodsInBasket] = useState([]);
  const [loader, setloader] = useState(false);
  const [order, setOrder] = useState(0);


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


  const onOrder = (id, name, description, price, images) => {
    setOrder(prev => prev + 1)
    const newObjInBasket = {
      id,
      preview: images,
      name: name,
      descr: description,
      cost: price
    }
    setGoodsInBasket(rev => [...rev, newObjInBasket])



  }


  return (
    <div className="App">
      <Header order={order} />
      <Routes>
        <Route path="/basket" element={<Basket goodsInBasket={goodsInBasket} />} />
        <Route path="/" element={
          <div className='container shop-items'>
            <div className='shop-items' >
              {
                !loader ?
                  <Preloader /> :
                  <>
                    <ul className='categorie'>
                      {
                        shop.map(categorie => {
                          console.log(categorie.categories[0]);
                          return (
                            <li>{categorie.categories[0]}</li>
                          )
                        })

                      }
                    </ul>
                    <Goods shop={shop} onOrderCart={onOrder} />
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

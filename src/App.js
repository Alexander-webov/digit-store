import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Goods from './components/Goods';
import Header from './components/Header';
import Preloader from './components/Preloader';

function App() {
  const [shop, seshop] = useState([]);
  const [loader, setloader] = useState(false);
  const [order, setOrder] = useState(0);

  useEffect(() => {
    fetch('https://fortniteapi.io/v2/shop?lang=ru', {
      headers: {
        Authorization: 'd2ef5ba7-436bb90f-e92b4526-17a2b707',
      }
    }).then(data => data.json())
      .then(data => {

        if (data.shop.length > 20) {
          seshop(data.shop.splice(0, 2))
          setloader(true)
        }
        setloader(true)
      })

  }, [])

  const onOrder = (id) => {
    console.log(id);
  }


  return (
    <div className="App">
      <Header />


      <div className='shop-items' >
        {
          !loader ?
            <Preloader /> :
            <Goods shop={shop} onOrderCart={onOrder} />

        }
      </div>


      <Footer />

    </div>
  );
}

export default App;

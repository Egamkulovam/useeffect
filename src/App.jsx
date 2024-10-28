import './App.css';
import { useState } from 'react';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import Header from './components/Header.jsx';
import logo from './assets/logo.png';
import apple from '../src/assets/iphone12.jpg';
import iphone16 from '../src/assets/iphone.jpg';
import samsungS24 from '../src/assets/iphone13.jpg';
import iphoneXS from '../src/assets/iphoneX.jpg';
import iphone16pro from '../src/assets/nokia.jpg';
import redmi from '../src/assets/redmi.jpg';
import infinix from '../src/assets/infinix.jpg';
import lenovo from '../src/assets/redmi7.jpg';
import samsung from '../src/assets/samsung.jpg';
import View from './components/View';
import Saved from './components/Saved'


// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './App.css';

// import required modules
import { Navigation } from 'swiper/modules';



function App() {
  const [savedProducts, setSavedProducts] = useState([]);
  const products = []



  let navigate = useNavigate();
  let [arr, setArr] = useState([
    {
      img: samsung,
      name: "Iphone Xs",
      memory: "8 / 256gb",
      color: "black",
      price: 150,
      id: 1,
      selected: false

    },

    {
      img: apple,
      name: "Redmi Note 9",
      memory: "8 / 256gb",
      color: "white",
      price: 1150,
      id: 2,
      selected: false

    },

    {
      img: redmi,
      name: "Redmi 13 not",
      memory: "8 / 256gb",
      color: "black",
      price: 4250,
      id: 3,
      selected: false

    },

    {
      img: infinix,
      name: "Infinix hot 40",
      memory: "8 / 256gb",
      color: "blue",
      price: 2499,
      id: 4,
      selected: false

    },

    {
      img: lenovo,
      name: "Lenovo not 7",
      memory: "8 / 256gb",
      color: "green",
      price: 1235,
      id: 5,
      selected: false

    },

    {
      img: iphone16,
      name: "IPHONE 16",
      memory: "8 / 256gb",
      color: "white",
      price: 10259,
      id: 6,
      selected: false

    },

    {
      img: samsungS24,
      name: "Samsung S24",
      memory: "8 / 256gb",
      color: "grey",
      price: 1125,
      id: 7,
      selected: false

    },

    {
      img: iphoneXS,
      name: "Iphone XS",
      memory: "8 / 256gb",
      color: "bisque",
      price: 5259,
      id: 8,
      selected: false

    },

    {
      img: iphone16pro,
      name: "Iphone 16",
      memory: "8 / 256gb",
      color: "black",
      price: 2025,
      id: 9,
      selected: false
    },
  ]);






  let [cart, setCart] = useState([]);

  function addtoCartFunc(obj, operator) {
    let result = cart.find((item) => {
      return obj.id === item.id;
    });

    if (result) {
      setCart(
        cart.map((el) => {
          if (obj.id === el.id) {

            let inc = el.count + 1;
            let dec = el.count - 1;
            return {
              ...el,
              count: operator === "+" ? inc : dec,
              subtotal: operator === "+" ? inc * el.price : dec * el.price,
            }
          } else {
            return el
          }
        })
      );
      setArr(
        arr.map((el) => {
          if (obj.id === el.id) {

            let inc = el.count + 1;
            let dec = el.count - 1;
            return {
              ...el,
              count: operator === "+" ? inc : dec,
              subtotal: operator === "+" ? inc * el.price : dec * el.price,
            }
          } else {
            return el
          }
        })
      );

    } else {
      setCart([...cart, { ...obj, count: 1, subtotal: obj.price }]);

      setArr(
        arr.map((item) => {
          if (item.id === obj.id) {
            return { ...item, count: 1 };
          } else {
            return item;
          }
        })
      );

    }

  }

  function deleteHandler(id) {
    setCart(
      cart.filter((item) => {
        return id !== item.id;
      })
    );
  }
  // //? Heart //?
  // const heartFunc= (id) => {
  //   const updatedArr = arr.map((item) =>
  //     item.id === id ? { ...item, selected: !item.selected } : item
  //   );
  //   setArr(updatedArr);
  // };

  // // ////////?

  // function handleSelectFunc(item) {
  //   navigate(`/saved`, { state: { item } });


  // }


  // const handleSelect = (item) => {
  // };

  const handleSave = (item) => {
    setSavedProducts([...savedProducts, addtoCartFunc , item]);
  };



  return (
    <div className='App' >
      <Header/>

      <header>

        <h1 className='logotips'>
          <img className='logotip' src={logo} alt="logo" />
          uzum market {" "}
        </h1>

    <h3 className='search'> search
    <i class='bx bx-search'></i>
    </h3>
        

    <Link to={`saved/${cart}`}> Saved

    </Link>
        <div>

          <button className='basketBtn' onClick={() => {
            navigate("/cart");
          }}  ><i class='bx bx-cart'></i></button>
          <p>{cart.length}</p>

        </div>



      </header>
      <Swiper
        navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide ><img src={lenovo} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={redmi} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={iphone16} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={iphone16pro} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={iphoneXS} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={samsung} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={samsungS24} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={infinix} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={redmi} alt="" /></SwiperSlide>

      </Swiper>







      {cart
        .filter((item) => item.selected)
        .map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}







      {/* <h3 className='none'>  {cart.length} </h3> */}
      <Routes>
        <Route
          path="/"
          element={<Home addtoCartFunc={addtoCartFunc} arr={arr} />} />

        <Route
          path="view/:id"
          element={< View arr={arr} />} />

        <Route path="/saved" element={<Saved savedProducts={savedProducts} handleSave={handleSave} />} />


        <Route path="/cart" element={< Cart addtoCartFunc={addtoCartFunc} deleteHandler={deleteHandler} cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;

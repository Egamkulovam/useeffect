import React from 'react'
import { Link } from 'react-router-dom'
import Saved from './Saved'
import { useState } from 'react';


export const Home = ({ arr, addtoCartFunc }) => {

  const [savedProducts, setSavedProducts] = useState([]);


  const handleSave = (product) => {
    setSavedProducts([...savedProducts, product]);
  };

  return (
    <ul className='grid'>
      {arr.map((item) => {
        return (
          <li className='carts'
          key={item.id}>          
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <p className='price'>{item.price}</p>

            {item.count > 0 ? (

              <div className='btns' >
                <button onClick={() => addtoCartFunc(item, '+')}>+</button> {" "}
                <span> {item.count}</span>
                <button onClick={() => addtoCartFunc(item, '-')}> -</button>
              </div>

            ) : (

              <button onClick={() => addtoCartFunc(item, '+')}>Add</button>

            )

            }


            <Link to={`view/${item.id}`}>
              <button> View </button>
            </Link>
           
          
          <button  className='heartBtn' onClick={() => handleSave(item)}>  <i class='bx bx-heart'></i> </button>
          
    
        
          
          
     
      

          </li>
        )
      })}
    </ul>
  )
}










 

 
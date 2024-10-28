import React from 'react'
import { Link } from 'react-router-dom';
import {myImage} from './assets/myImage.jpg';


export const Card = ({item}) => {
  return (
    <div style={{ border:"1px solid #000", margin: "20px"} } className='card'>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
        {/* <p>{item.image}</p>
         */}
                {/* <img src={myImage} alt="#" /> */}


        <Link to={`products/`}>
        <button>VIEW</button>
        
        </Link>

    </div>
  )
}
export default Card;

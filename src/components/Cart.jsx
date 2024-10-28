import React from 'react'
import { useNavigate } from 'react-router-dom';



export const Cart = ({ cart, addtoCartFunc, deleteHandler }) => {
    let totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);
    let navigate = useNavigate();
    

    return (
        <ul>
            <button className='backbtn' onClick={() => navigate(-1)}> go back</button>
            {cart.map((item) => {
                return (
                    <li className='cartli' key={item.id}>

                        <h3>{item.name}</h3>
                        <p>Narxi: {item.price} UZS</p>
                            <p> $ {item.price} x {item.count} = {item.subtotal}</p>
                        <div className='plsmns'>

                            <button onClick={() => addtoCartFunc(item, '+')}>+</button>
                            <button className="delete" onClick={() => deleteHandler(item.id)}>
                delete
              </button>
                            <span>{item.count}</span>

                            <button disabled={item.count === 1 ? true : false} onClick={() => addtoCartFunc(item, '-')}>-</button>
                        </div>



                    </li>
                )
            })}


            <h5>jami: {totalPrice}</h5>
        </ul>

    )
}
export default Cart

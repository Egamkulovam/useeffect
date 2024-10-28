import React from 'react'
import { useParams } from 'react-router-dom'


export const Product = ({ arr }) => {
    let { id } = useParams();
    console.log(id);

    return (
        <div>
            {arr.map((item) => {
                if (id == item.id) {
                    return (
                        <>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                            {/* <p>{item.image}</p> */}
                            {/* <img src={myImage} alt="#" /> */}

                        </>
                    )
                }
            })}
        </div>
    )
}


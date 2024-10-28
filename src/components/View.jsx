import React from 'react'
import { useParams } from 'react-router-dom'

export const View = ({ arr }) => {

    let { id } = useParams()

    console.log(id);

    return (
        <div className='view'>
            {arr.map((item) => {
                if (item.id === +id) {
                    return (
                        <li>{item.name}  </li>
                    )
                }
            })}



            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                . Non pariatur quidem error consequuntur quae vel, saepe
                itaque enim aspernatur sit. Atque modi quia facilis nam
                quod fuga earum vel similique voluptatem officia dolorem
                vero quas ad neque laudantium necessitatibus iure laborum
                sit, magnam maxime itaque! Ex minima nulla harum, incidunt
                blanditiis ipsam magnam nemo nesciunt quas vitae sapiente
                alias quaerat natus quod sequi earum recusandae ad rem ipsa
                ratione! Esse quo qui inventore nisi iusto minus in officia,
                culpa animi molestias incidunt quas doloremque corporis perferendis
                iste sit recusandae dolore itaque placeat harum corrupti quam iure
                dolorum accusamus. Voluptate, qui?</p>
        </div>
    )
}

export default View

import React from 'react'
import flaguz from '../assets/flaguz.png';



const Header = () => {


  return (
    <div className='header1'>
      <p className='boxicon'><i class='bx bx-map'></i>Tashkent</p>

      <ul className='head_link'>
        <li > <a href='#'> Sotuvchi bo'lish||</a></li>
        <li >  <a href='#'> Topshirish punktini ochish ||</a></li>
        <li>Savol-javob</li>
        <li>Buyurtmalarim</li>

        <li className='sel_flag'>
          
          <img className='flagu'  src={flaguz} alt="##" />

          
          <select>
            <option value="uz"> O'zbekcha</option>
            <option value="ru"> Русский</option>
          </select>
        </li>
      </ul>

    </div>
  )
}

export default Header

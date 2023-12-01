import React from 'react'
import style from './card.style.module.css';

const Card = ({title,price,company,image,}) => {
  return (
    <div className={style.card}>
            <div className={style.topSection}>
                <h4>{title}</h4>
                <span style={{color:"green"}}>{price}</span>
            </div>
            <span id={style.compName}>{company}</span>
            <div className={style.image}>
                <img src={image} alt="image"/>
            </div>    
    </div>
  )
}

export default Card
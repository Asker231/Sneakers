import React from 'react'
import style from './card.style.module.css';

const Card = ({id,promo,isLiked,gender,title,price,company,image,hendler}) => {
  return (
    <div onClick={()=>{
      promo(id,title,image)
      hendler(true)
      }} className={style.card}>
            <div className={style.topSection}>
                <h4>{title}</h4>
                <span style={{color:"green"}}>{price}</span>
            </div>
            <span id={style.compName}>{company}</span>
            <div className={style.image}>
                <img src={image} alt="image"/>
            </div>   
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",fontWeight:"bold",color:"purple"}}>{gender}</div> 
    </div>
  )
}

export default Card
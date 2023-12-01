import React from 'react'
import style from './header.module.css'


const Header = () => {
  return (
    <div className={style.header}>
        <div className={style.wrap}>
        <div className={style.leftnav}>
            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">COLLECTIONS</a>
        </div>
        <div className={style.rightnav}>
            <a href="#">SEARCH</a>
            <a href="#">CART<span className={style.items}>0</span></a>
        </div>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {

  const locationpage  = useLocation()

  const styles = {
    borderBottom : "0.5px solid black",
    color:"black",
  }
  return (
    <div className={style.header}>
        <div className={style.wrap}>
        <div className={style.leftnav}>
            <Link style={locationpage.pathname == "/" ?  styles : null} to="/">MEN</Link>
            <Link style={locationpage.pathname == "/womenPage" ?  styles : null}  to="/womenPage">WOMEN</Link>

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
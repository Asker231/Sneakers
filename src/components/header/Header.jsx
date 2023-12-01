import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from '../Cart/Cart'

const Header = () => {
  const[sneaks,setSneak] = React.useState([])
  const selectors = useSelector(state => state.card.cards)
  const locationpage  = useLocation()
  const[cart,setCart] = React.useState(false)

  React.useEffect(()=>{
    setSneak(selectors)
  })

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
            <a onClick={()=>setCart(!cart)} href="#">CART<span className={style.items}>{sneaks.length}</span></a>
        </div>
        </div>
        { cart ? <Cart headerState = {(flag)=>{
         return setCart(flag)}}/> : null
        }
    </div>
  )
}

export default Header
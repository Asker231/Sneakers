import React from 'react'
import style from './cart.module.css';
import exit from '../../assets/exit.svg'
import { useSelector } from 'react-redux';


const Cart = ({headerState}) => {
    const[count,setCount] = React.useState([])
    const selector = useSelector(state=>state.card.cards)
    React.useEffect(()=>{
        setCount(selector)
    },[])
  return (
    <div className={style.cart}>
       <div className={style.top}>
        <span>Items</span>
        <div onClick={()=>headerState()} className={style.btn}><img src={exit}/></div>
        </div>
        <section>

        </section>
        <div className={style.bottom}>
            <span>Items:{count}</span>
        </div>
        </div>

  )
}

export default Cart
import React from 'react'
import style from './style.module.css'
import leftArrow from  '../../assets/leftArrow.svg'
import rightArrow from  '../../assets/rightArrow.svg'
import exit from '../../assets/exit.svg'
import like from '../../assets/like.svg'

const PresenCard = ({idCard,title,photos,isLiked,hendler}) => {
    let  [offset  ,setOffset]      = React.useState(-1)
    const[changeLike,setLike]  =  React.useState(false)
  return (
    <div className={style.presentwrap}>
        <div className={style.header}>
            <h2 >{title}</h2>
            <div className={style.vs}>
            <button  id={style.exits} onClick={()=>hendler(false)}>
                    <img  src={exit}/>
            </button>
            <button onClick={()=>setLike(!changeLike)} style={{backgroundColor: changeLike ? "red" : null}}  className={style.likes}>
                    <img style={{fill:changeLike ? "white" : null}} src={like}/>
            </button>
            </div>
    </div>
        <div className={style.wrapps}>
        <button id={style.left} disabled={offset == -1} onClick={()=>{
            if(offset >= -3601){
                setOffset(offset -= -900)
            }
        }}>
            <img src={leftArrow}/>
        </button>
        <div className={style.sliderWrap}>
            <div style={{transform: `translateX(${offset}px)`}} className={style.some}>
                    {
                 photos.map((el)=>{
                    return <div className={style.wrap}>
                        <img src={el}/>
                        
                    </div>
                 })   
                }
                    </div>
        </div>
        <button id={style.right} disabled={offset == -3601} onClick={()=>{
            if(offset >= -3601){
                setOffset(offset += -900)
            }   
        }}>
            <img src={rightArrow}/>
        </button>
        </div>
    </div>
  )
}

export default PresenCard
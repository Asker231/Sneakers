import React from 'react'
import style from './style.module.css'
import leftArrow from  '../../assets/leftArrow.svg'
import rightArrow from  '../../assets/rightArrow.svg'
import exit from '../../assets/exit.svg'
import like from '../../assets/like.svg'

const PresenCard = ({addCardHendler,idCard,title,photos,isLiked,hendler,styles}) => {

    let  [offset  ,setOffset]  =  React.useState(-1)
    const[changeLike,setLike]  =  React.useState(false)
    const[width,setWidth]      =  React.useState()  

    const refWidth = React.useRef()

    React.useEffect(()=>{
        setWidth(refWidth.current.clientWidth)
    },[])
  return (
    <div  className={style.presentwrap}>
        <div className={style.header}>
            {width}
            <h2 >{title}</h2>
            <div className={style.vs}>
            <button  id={style.exits} onClick={()=>hendler(false)}>
                    <img onClick={()=>hendler(false)}  src={exit}/>
            </button>
            <button onClick={()=>{
                setLike(!changeLike)
                addCardHendler()
                }} style={{backgroundColor: changeLike ? "red" : null}}  className={style.likes}>
                    <img style={{fill:changeLike ? "white" : null}} src={like}/>
            </button>
            </div>
    </div>
        <div className={style.wrapps}>
        <button id={style.left} disabled={offset == -1} onClick={()=>{
            if(offset >= -width * 4){
                setOffset(offset -= -width)
            }
        }}>
            <img src={leftArrow}/>
        </button>
        <div className={style.sliderWrap}>
            <div style={{transform: `translateX(${offset}px)`}} className={style.some}>
                    {
                 photos.map((el)=>{
                    return <div ref={refWidth} className={style.wrap}>
                        <img src={el}/>
                        
                    </div>
                 })   
                }
                    </div>
        </div>
        <button id={style.right} disabled={offset == -width * 4} onClick={()=>{
            if(offset >= -width * 4){
                setOffset(offset += -width)
            }   
        }}>
            <img src={rightArrow}/>
        </button>
        </div>
    </div>
  )
}

export default PresenCard
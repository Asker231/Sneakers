import React from 'react'
import style from './main.module.css'
import ArrowDown from '../../assets/ArrowDown.svg'
import a from '../../assets/a.png'
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'
import a4 from '../../assets/a4.png'
import Card from '../Card/Card.jsx'


const Main = () => {
    const[select,setSelect] = React.useState(1)
    const[lable,setLable] = React.useState([
        {
            title:"BRAND",
            sel:1    

        },
        {
            title:"SIZE",
            sel:2
        },
        {
            title:"COLOR",
            sel:3
        },
        {
            title:"PRICE",
            sel:4
        }
    ])
    const[cards,setCard] = React.useState([])

    React.useEffect(()=>{
        setCard([
            {title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {title:"DG",price:"$500",company:"Dolche",image:a4},
            {title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {title:"DG",price:"$500",company:"Dolche",image:a4},
            {title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {title:"DG",price:"$500",company:"Dolche",image:a4},
            {title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {title:"DG",price:"$500",company:"Dolche",image:a4},
        ])
    },[])

  return (
    <div className={style.wrapVS}> 
            <div className={style.hstack}>
                <h1>MENS SNEAKERS</h1>
                <div className={style.vstakwrap}>
                    <div className={style.topHS}>
                        {
                            lable.map((el,ind)=>{
                                return <div className={style.items} key={ind}>
                                    <span onClick={()=>{
                                            setSelect(el.sel)
                                    }} style={{cursor:'pointer'}}>{el.title}</span>
                                    <img style={{transform: select == el.sel ? `rotate(0deg)` : "rotate(180deg)",transition:".3s"}} width={24} height={24} src={ArrowDown}/>
                                </div>
                            })
                        }
                    </div>
                    <div className={style.bottomHS}>

                    </div>


                </div>
            </div>
            <div className={style.wrap}>
                        {
                        cards.map((el,ind)=>{
                            return <Card title={el.title} price={el.price} company={el.company} image={el.image}/>
                        })
                        }
            </div>
    </div>
  )
}





export default Main
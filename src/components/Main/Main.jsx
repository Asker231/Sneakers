import React from 'react'
import style from './main.module.css'
import ArrowDown from '../../assets/ArrowDown.svg'
import a from '../../assets/a.png'
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'
import a4 from '../../assets/a4.png'
import Card from '../Card/Card.jsx'
import { v4 } from 'uuid'
import { useLocation } from 'react-router-dom'
import PresenCard from '../PresenCard/PresenCard.jsx'

const Main = ({gender}) => {
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
    const[cards,setCard] = React.useState([{}])
    const locationPage = useLocation()
    const [isOpen,setOpen]  = React.useState()    
    const[obj,setObj] = React.useState()
    React.useEffect(()=>{
        setCard([
            {id:v4(),gender:"men",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"women",title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {id:v4(),gender:"men",title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {id:v4(),gender:"women",title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {id:v4(),gender:"men",title:"DG",price:"$500",company:"Dolche",image:a4},
            {id:v4(),gender:"women",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"men",title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {id:v4(),gender:"women",title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {id:v4(),gender:"men",title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {id:v4(),gender:"women",title:"DG",price:"$500",company:"Dolche",image:a4},
            {id:v4(),gender:"men",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"men",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"women",title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {id:v4(),gender:"men",title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {id:v4(),gender:"women",title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {id:v4(),gender:"men",title:"DG",price:"$500",company:"Dolche",image:a4},
            {id:v4(),gender:"women",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"men",title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {id:v4(),gender:"women",title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {id:v4(),gender:"men",title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {id:v4(),gender:"women",title:"DG",price:"$500",company:"Dolche",image:a4},
            {id:v4(),gender:"men",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"men",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"women",title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {id:v4(),gender:"men",title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {id:v4(),gender:"women",title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {id:v4(),gender:"men",title:"DG",price:"$500",company:"Dolche",image:a4},
            {id:v4(),gender:"women",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"men",title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {id:v4(),gender:"women",title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {id:v4(),gender:"men",title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {id:v4(),gender:"women",title:"DG",price:"$500",company:"Dolche",image:a4},
            {id:v4(),gender:"men",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"men",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"women",title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {id:v4(),gender:"men",title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {id:v4(),gender:"women",title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {id:v4(),gender:"men",title:"DG",price:"$500",company:"Dolche",image:a4},
            {id:v4(),gender:"women",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
            {id:v4(),gender:"men",title:"GARVEN",price:"$199",company:"ADIDAS ORIGINALS",image:a1},
            {id:v4(),gender:"women",title:"NEW BALANCE M1500",price:"$89",company:"NEW BALANCE",image:a2},
            {id:v4(),gender:"men",title:"PUMA",price:"$453",company:"PUMA ORIGIN",image:a3},
            {id:v4(),gender:"women",title:"DG",price:"$500",company:"Dolche",image:a4},
            {id:v4(),gender:"men",title:"AIR MAX 90",price:"$129",company:"NIKE SPORTSWEAR",image:a},
        ])
    },[])
  return (
    <div className={style.wrapVS}> 
            <div className={style.hstack}>
                {locationPage.pathname == "/womenPage" ?  <h1> WOMENS SNEAKERS</h1> : <h1> MENS SNEAKERS</h1> }
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
                      if(el.gender == gender){
                        return  <Card
                        hendler={(flag)=>setOpen(flag)}
                        key={ind}
                        id={el.id}
                        gender={el.gender} 
                        title={el.title} 
                        price={el.price} 
                        company={el.company} 
                        image={el.image}
                        promo={(id,title,photo)=>setObj({id ,title,photo})}
                        /> 
                      }
                    })
              }       
            </div>  
           { isOpen ? <PresenCard photos={[obj.photo,a1,a2,a3,a4]} title={obj.title} hendler={(flag)=>{
            return setOpen(flag)
           }}/>:null}

    </div>
  )
}





export default Main
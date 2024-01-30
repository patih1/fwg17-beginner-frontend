import { Link } from "react-router-dom"
import * as Ic from 'react-feather'
// import React from "react"
import card from "../assets/img/card1.png"

// eslint-disable-next-line react/prop-types
const ProductCard = ({image, small, to='/detail-product', price='20000', discount, flashSale=false, name='product', description}) => {
  // if(!image){
  //   image='1701181414676.jpeg'
  // }

  const cardImage = {
    backgroundImage : `url(${card})`
  }
  
  const x = () => {
    let size = ''

    if(!small){
      size = 'md:mb-72 md:mr-72'
    }

    if(flashSale !== false){
      return <div className={`absolute w-32 h-10 bg-[#D00000] ${size} mb-48 mr-48 ml-20 rounded-full flex items-center justify-center text-white`}>FLASH SALE!</div>
    }
  }

  const sizes = () =>{

    if(!small){
      const data = {
        size: 'md:h-[360px] md:w-[360px]',
        font: 'md:text-2xl'
      }
      return data
    }else if(small){
      const data = {
        size: '',
        font: ''
      }
      return data
    }

  }

  console.log

  const realPrice = () =>{
    if(discount){
      const realPrice = price
      price = price - discount
      
      return <p className="text-[#D00000] line-through">IDR{realPrice.toLocaleString('id')}</p>

    }
  }

  return(
    <Link to={to} style={image ? {backgroundImage: `url(${import.meta.env.VITE_BACKEND_URL}/uploads/products/${image})`} : cardImage} className={`h-[280px] w-[268px] bg-cover bg-center flex justify-center items-center ${sizes().size}`}>
        {x()}
        

        <div className="w-11/12 h-5/6 mt-[150%] bg-white flex flex-col items-center shadow-md justify-center py-2 gap-4">
          <div className="w-11/12">
            <p className="text-2xl font-semibold">{name}</p>
          </div>
          <div className="flex-1 w-11/12">
            <p>{description}</p>
          </div>

          <div className="flex items-center w-11/12 gap-3">
            <div>
              {realPrice()}
            </div>
            <div>
              <p className={`${sizes().font} text-xl text-[#FF8906]`}>IDR{price.toLocaleString('id')}</p>
            </div>
          </div>
          
          <div className="w-11/12 h-1/6 flex gap-[5%]">
            <button className="flex-1 bg-[#FF8906] rounded">Buy</button>
            <button className="flex items-center justify-center border rounded border-[#FF8906] w-3/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
          </div>
        </div>
      </Link>
  )
}

export default ProductCard
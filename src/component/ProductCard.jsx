import { Link } from "react-router-dom"
import * as Ic from 'react-feather'

// eslint-disable-next-line react/prop-types
const ProductCard = ({image, small, to='/detail-product', price='20000', discountFrom, flashSale=false, name='product', description}) => {
  const x = () => {
    if(flashSale !== false){
      return <div className="absolute w-32 h-10 bg-[#D00000] md:mb-72 md:mr-72 mb-48 mr-48 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
    }
  }

  const size = () =>{

    if(!small){
      return 'md:h-[360px] md:w-[360px]'
    }

  }

  const realPrice = () =>{
    if(discountFrom){
      
      return <p className="text-[#D00000] line-through">{new Intl.NumberFormat("id-ID", {style: "currency",currency: "IDR", maximumSignificantDigits: 10}).format(discountFrom)}</p>

    }
  }

  return(
    <Link to={to} className={`bg-[${image}] h-[280px] w-[268px] bg-cover bg-center flex justify-center items-center ${size()}`}>
        {x()}
        

        <div className="w-11/12 h-5/6 mt-[150%] bg-white flex flex-col items-center shadow-md justify-evenly py-6 gap-4">
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
              <p className="md:text-2xl text-xl text-[#FF8906]">{new Intl.NumberFormat("id-ID", {style: "currency",currency: "IDR", maximumSignificantDigits: 10}).format(price)}</p>
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
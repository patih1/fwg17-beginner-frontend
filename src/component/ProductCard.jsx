import { Link } from "react-router-dom"
import * as Ic from 'react-feather'

// eslint-disable-next-line react/prop-types
const ProductCard = ({image, size, to='/detail-product', price='IDR20.000', discountFrom='IDR20.000', flashSale=false}) => {
  const x = () => {
    if(flashSale !== false){
      return <div className="absolute w-32 h-10 bg-[#D00000] md:mb-72 md:mr-72 mb-48 mr-48 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
    }
  }

  return(
    <Link to={to} className={`bg-[${image}] md:h-[${size}px] md:w-[${size}px] h-[280px] w-[268px] bg-cover bg-center flex justify-center items-center`}>
        {x()}

        <div className="w-11/12 h-5/6 bg-slate-100 mt-[150%] bg-white flex flex-col items-center shadow-md justify-evenly">
          <div className="w-11/12">
            <p className="text-2xl font-semibold">Hazelnut Latte</p>
          </div>
          <div className="w-11/12">
            <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
          </div>

          <div className="flex items-center w-11/12 gap-3">
            <div>
              <p className="text-[#D00000] line-through">{discountFrom}</p>
            </div>
            <div>
              <p className="md:text-2xl text-xl text-[#FF8906]">{price}</p>
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
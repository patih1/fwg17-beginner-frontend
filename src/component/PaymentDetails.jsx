// import { useState } from "react"
import * as Ic from "react-feather"
import { useDispatch, useSelector } from "react-redux"
import { setProduct2 as setProductAction } from '../redux/reducer/product';

// eslint-disable-next-line react/prop-types
const PaymentDetail = ({name, quantity, size, variant, price, discount, order}) => {
  const data = useSelector(state => state.product.data)
  // const [products, setProduct] = useState([])
  const dispatch = useDispatch()
  if(!price){
    price = 10000
  }

  let priceAfterDiscount = price

  if(discount){
    priceAfterDiscount = price - discount
  }

  const removeItem = () => {
    const x = data.filter((word)=>word != data[order])
    dispatch(setProductAction(x))
  }

  return (
    <div className="flex items-center w-full gap-3 p-3 h-44 bg-slate-100">

      <div className="bg-[url(../assets/img/card1.png)] md:h-full h-2/4 w-3/12 bg-cover bg-center"></div>

      <div className="flex flex-col flex-1 gap-3 justify-evenly">
        {discount && <div className="w-24 h-7 bg-[#D00000] rounded-full flex items-center justify-center text-white text-xs">FLASH SALE!</div>}
        <p className="font-semibold">{name}</p>
        <p>{quantity} pcs   |   {size}   |   {variant}   |   Dine In</p>
        <div className="flex items-center gap-3">
          {discount && <p className="text-[#D00000] line-through text-xs">IDR{price.toLocaleString('id')}</p>}
          <p className="md:text-xl text-[#FF8906] text-sm">IDR{priceAfterDiscount.toLocaleString('id')}</p>
        </div>
      </div>

      <button onClick={removeItem} className="h-full flex items-center pl-auto absolute md:static text-[#D00000] md:mr-3 md:mb-0 md:pl-0 pl-72 md:pb-0 pb-20"><Ic.XCircle></Ic.XCircle></button>

    </div>
  )
}

export default PaymentDetail
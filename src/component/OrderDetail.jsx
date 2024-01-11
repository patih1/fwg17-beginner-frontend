const OrderDetail = ({quantity, size, variant, price=10 }) => {
  return(
    <div className="flex w-full gap-3 p-3 md:h-44 h-28 bg-slate-100">
              
              <div className="bg-[url(../assets/img/card1.png)] h-full w-3/12 bg-cover bg-center"></div>
              
              <div className="flex flex-col flex-1 justify-evenly">
                {/* <div className="w-24 h-7 bg-[#D00000] rounded-full flex items-center justify-center text-white text-xs">FLASH SALE!</div> */}
                <p className="font-semibold">Hazelnut Latte</p>
                <p>{quantity}pcs   |   {size}   |   {variant}   |   Dine In</p>
                <div className="flex items-center gap-3">
                  {/* <p className="text-[#D00000] line-through text-sm">IDR 10.000</p> */}
                  <p className="text-xl text-orange-500">IDR{price.toLocaleString('id')}</p>
                </div>
              </div>
              
            </div>
  )
}

export default OrderDetail
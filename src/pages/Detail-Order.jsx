// import * as Ic from 'react-feather';
// import { Link } from 'react-router-dom';
// import Item1 from '../assets/img/card1.png';
// import Item2 from '../assets/img/card2.png';
// import Item3 from '../assets/img/card3.png';
// import Item4 from '../assets/img/card4.jpeg';

const DetailOrder = () => {
  return(
    <>

    <header className="flex flex-col items-center w-full my-8">
      <h2 className="w-4/5 text-2xl md:text-5xl">Order #12354-09893</h2>
      <p className="w-4/5">21 March 2023 at 10:30 AM</p>
    </header>
  
    <section className="flex flex-col gap-3 md:flex-row">
      
      <div className="flex justify-center md:flex-1 md:justify-end">
  
        <div className="flex flex-col w-5/6 gap-4 md:w-4/5">
          <p className="text-xl">Order Information</p>
          <div className="flex flex-col gap-3.5">
  
            <div className="flex justify-between">
              <p>Full Name</p>
              <p className="font-semibold">Ghaluh Wizard Anggoro</p>
            </div>
  
            <hr/>
            <div className="flex justify-between">
              <p>Address</p>
              <p className="font-semibold">Griya bandung indah</p>
            </div>
  
            <hr/>
            <div className="flex justify-between">
              <p>Phone</p>
              <p className="font-semibold">082116304338</p>
            </div>
  
            <hr/>
            <div className="flex justify-between">
              <p>Payment Method</p>
              <p className="font-semibold">Cash</p>
            </div>
  
            <hr/>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p className="font-semibold">Dine In</p>
            </div>
  
            <hr/>
            <div className="flex justify-between">
              <p>Status</p>
              <p className="font-semibold text-xs bg-[rgba(0,167,0,0.20)] flex items-center rounded-full w-12 justify-center text-[#00A700]">Done</p>
            </div>
  
            <hr/>
            <div className="flex justify-between">
              <p>Total Transaksi</p>
              <p className="font-semibold text-[#FF8906]">Idr 40.000</p>
            </div>
          </div>
        </div>
  
      </div>
      
      <div className="md:flex-1">
        <div className="w-11/12 ml-4 md:w-4/5 md:ml-0">
  
          <p className="text-xl">Your Order</p>
  
          <div className="flex flex-col gap-3">
            
            <div className="flex w-full gap-3 p-3 md:h-44 h-28 bg-slate-100">
              
              <div className="bg-[url(../assets/img/card1.png)] h-full w-3/12 bg-cover bg-center"></div>
              
              <div className="flex flex-col flex-1 justify-evenly">
                <div className="w-24 h-7 bg-[#D00000] rounded-full flex items-center justify-center text-white text-xs">FLASH SALE!</div>
                <p className="font-semibold">Hazelnut Latte</p>
                <p>2pcs   |   Regular   |   Ice   |   Dine In</p>
                <div className="flex items-center gap-3">
                  <p className="text-[#D00000] line-through text-sm">IDR 10.000</p>
                  <p className="text-xl text-orange-500">IDR 20.000</p>
                </div>
              </div>
              
            </div>
            
            <div className="flex w-full gap-3 p-3 md:h-44 h-28 bg-slate-100">
              
              <div className="bg-[url(../assets/img/card1.png)] h-full w-3/12 bg-cover bg-center"></div>
              
              <div className="flex flex-col flex-1 justify-evenly">
                <div className="w-24 h-7 bg-[#D00000] rounded-full flex items-center justify-center text-white text-xs">FLASH SALE!</div>
                <p className="font-semibold">Hazelnut Latte</p>
                <p>2pcs   |   Regular   |   Ice   |   Dine In</p>
                <div className="flex items-center gap-3">
                  <p className="text-[#D00000] line-through text-sm">IDR 10.000</p>
                  <p className="text-xl text-orange-500">IDR 20.000</p>
                </div>
              </div>
              
            </div>
          
          </div>
  
        </div>
  
  
      </div>
      
    </section>

    </>
  )
}

export default DetailOrder
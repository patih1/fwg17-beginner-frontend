import Navbar from "../component/Navbar"
import Footer from '../component/Footer';
import OrderDetail from "../component/OrderDetail";
// import * as Ic from 'react-feather';
// import { Link } from 'react-router-dom';
// import Item1 from '../assets/img/card1.png';
// import Item2 from '../assets/img/card2.png';
// import Item3 from '../assets/img/card3.png';
// import Item4 from '../assets/img/card4.jpeg';

const DetailOrder = () => {
  return(
    <>
      <div className='bg-black'>
      <Navbar/>
      </div>

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
            
            <OrderDetail/>
            <OrderDetail/>
            
          </div>
  
        </div>
  
  
      </div>
      
      </section>

      <Footer/>

    </>
  )
}

export default DetailOrder
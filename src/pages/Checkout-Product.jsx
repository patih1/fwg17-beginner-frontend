import * as Ic from 'react-feather';
import { Link } from 'react-router-dom';
// import Item1 from '../assets/img/card1.png';
// import Item2 from '../assets/img/card2.png';
// import Item3 from '../assets/img/card3.png';
// import Item4 from '../assets/img/card4.jpeg';

const CheckoutProduct = () => {
  return(
    <>

    <header className="flex justify-center w-full my-8">
      <h2 className="w-4/5 text-5xl">Payment Details</h2>
    </header>
  
    <section className="flex flex-col gap-3 md:flex-row">
      <div className="flex justify-center flex-1 md:justify-end">
        <div className="w-5/6 md:w-4/5">
    
          <div className="flex items-center justify-between mb-3">
            <p className="text-xl">Your Order</p>
            <button className="bg-[#FF8906] h-8 px-4 rounded">+ Add Menu</button>
          </div>
  
          <div className="flex flex-col gap-3">
            
            <div className="flex items-center w-full gap-3 p-3 h-44 bg-slate-100">
              
              <div className="bg-[url(../assets/img/card1.png)] md:h-full h-2/4 w-3/12 bg-cover bg-center"></div>
              
              <div className="flex flex-col flex-1 gap-3 justify-evenly">
                <div className="w-24 h-7 bg-[#D00000] rounded-full flex items-center justify-center text-white text-xs">FLASH SALE!</div>
                <p className="font-semibold">Hazelnut Latte</p>
                <p>2pcs   |   Regular   |   Ice   |   Dine In</p>
                <div className="flex items-center gap-3">
                  <p className="text-[#D00000] line-through text-xs">IDR10.000</p>
                  <p className="md:text-xl text-[#FF8906] text-sm">IDR20.000</p>
                </div>
              </div>
              
              <button className="h-full flex items-center pl-auto absolute md:static text-[#D00000] md:mr-3 md:mb-0 md:pl-0 pl-72 md:pb-0 pb-20"><Ic.XCircle></Ic.XCircle></button>
  
            </div>
            
            <div className="flex items-center w-full gap-3 p-3 h-44 bg-slate-100">
              
              <div className="bg-[url(../assets/img/card1.png)] md:h-full h-2/4 w-3/12 bg-cover bg-center"></div>
              
              <div className="flex flex-col flex-1 gap-3 justify-evenly">
                <div className="w-24 h-7 bg-[#D00000] rounded-full flex items-center justify-center text-white text-xs">FLASH SALE!</div>
                <p className="font-semibold">Hazelnut Latte</p>
                <p>2pcs   |   Regular   |   Ice   |   Dine In</p>
                <div className="flex items-center gap-3">
                  <p className="text-[#D00000] line-through text-xs">IDR10.000</p>
                  <p className="md:text-xl text-[#FF8906] text-sm">IDR20.000</p>
                </div>
              </div>
              
              <button className="h-full flex items-center pl-auto absolute md:static text-[#D00000] md:mr-3 md:mb-0 md:pl-0 pl-72 md:pb-0 pb-20"><Ic.XCircle></Ic.XCircle></button>
  
            </div>
          
          </div>
  
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-2xl font-semibold">Payment Info & Delivery</p>
            </div>
    
            <div>
              <form action="" className="flex flex-col gap-4">
    
                <div className="flex flex-col">
                  <label className="font-semibold" htmlFor="email">Email</label>
                  <input className="px-5 border rounded h-9" type="email" name="email" id="email" placeholder="Enter Your Email"/>
                </div>
                
                <div className="flex flex-col">
                  <label className="font-semibold" htmlFor="fullName">Full Name</label>
                  <input className="px-5 border rounded h-9" type="text" name="fullName" id="fullName" placeholder="Enter Your Full Name"/>
                </div>
        
                <div className="flex flex-col">
                  <label className="font-semibold" htmlFor="address">Address</label>
                  <input className="px-5 border rounded h-9" type="address" name="address" id="address" placeholder="Enter Your Address"/>
                </div>
    
                <div>
                  <p>Choose Size</p>
                  <div className="flex gap-3">
    
                    <label htmlFor="dine-in" className="flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center">Dine In</label>
                    <input type="radio" name="dine-in" id="dine-in" className="hidden"/>
                  
    
                    <label htmlFor="door-delivery" className="flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center">Door Delivery</label>
                    <input type="radio" name="door-delivery" id="door-delivery" className="hidden"/>
                  
    
                    <label htmlFor="pick-up" className="flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center">Pick Up</label>
                    <input type="radio" name="pick-up" id="pick-up" className="hidden"/>
                    
                  </div>
                </div>
    
              </form>
            </div>
          </div>
  
        </div>
  
  
      </div>
      
      <div className="flex-1">
  
        <div className="flex flex-col w-full gap-4 px-8 md:w-4/5 md:px-0">
          <p className="text-xl">Total</p>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <p>Order</p>
              <p className="font-semibold">Idr. 40.000</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p className="font-semibold">Idr. 0</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p className="font-semibold">Idr. 4000</p>
            </div>
            <hr/>
            <div className="flex justify-between">
              <p>Sub Total</p>
              <p className="font-semibold">Idr.44.000</p>
            </div>
            <button className="w-full bg-[#FF8906] h-8 rounded"><Link to="/history-order">Checkout</Link></button>
            <p>We Accept</p>
            <div className="flex justify-between w-full">
              <img src="https://i0.wp.com/febi.uinsaid.ac.id/wp-content/uploads/2020/11/Logo-BRI-Bank-Rakyat-Indonesia-PNG-Terbaru.png?ssl=1" className="object-contain w-9 max-h-9"></img>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png" className="object-contain w-9 max-h-9"></img>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png" className="object-contain w-9 max-h-9"></img>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/1200px-Gopay_logo.svg.png" className="object-contain w-9 max-h-9"></img>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png" className="object-contain w-9 max-h-9"></img>
              <img src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png" className="object-contain w-9 max-h-9"></img>
            </div>
            <p>*Get Discount if you pay with Bank Central Asia</p>
          </div>
        </div>
  
      </div>
    </section>

    </>
  )
}

export default CheckoutProduct
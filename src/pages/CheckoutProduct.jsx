import * as Ic from 'react-feather';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import PaymentDetail from '../component/PaymentDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
// import Item1 from '../assets/img/card1.png';
// import Item2 from '../assets/img/card2.png';
// import Item3 from '../assets/img/card3.png';
// import Item4 from '../assets/img/card4.jpeg';

const CheckoutProduct = () => {
  const [where, setWhere] = useState()
  const data = useSelector(state => state.product.data)
  const user = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  // const dispatch = useDispatch()


  let variantPrice = 0
  let sizePrice = 0

  data.variant == 'ice' ? variantPrice = 3000 : 0
  data.size == 'medium' ? sizePrice = 5000 : 0
  data.size == 'large' ? sizePrice = 10000 : 0

  const order = data.price + variantPrice + sizePrice
  const tax = order * 1/20
  const subTotal = order + tax

  const placeOrder = async (event) => {
    event.preventDefault()
    try{
      const orderNumber = '#085467097' //Date.now()
      const email = event.target.email.value
      const fullName = event.target.fullName.value
      const deliveryAddress = event.target.address.value
      const total = '10'
      const {id} = user

      // console.log(email)
      const form = new FormData()
      form.append('userId', id)
      form.append('orderNumber', orderNumber)
      form.append('total', total)
      form.append('fullname', fullName)
      form.append('email', email)

      const {data : item} = await axios.post('http://localhost:5050/customer/orders', form , {
        headers : {
          'Content-Type' : 'multipart/form-data',
          'Authorization' : `Bearer ${token}`
        }
      })
      
    }catch(err){
      alert(err)
    }
  }

  return(
    <>
      <div className='bg-black'>
      <Navbar/>
      </div>

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
  
          <div className="flex flex-col gap-3 overflow-auto h-[50vh]">
            
            <PaymentDetail 
            key={data.id}
            name={data.name}
            price={data.price}
            discount={data.discount}
            quantity={data.quantity}
            size={data.size}
            variant={data.variant}/>
            
          </div>
  
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-2xl font-semibold">Payment Info & Delivery</p>
            </div>
    
            <div>
              <form onSubmit={placeOrder} id="buy" className="flex flex-col gap-4">
    
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
                  <p>Where?</p>
                  <div className="flex gap-3">
    
                    <input type="radio" name="where" value='dine-in' id="dine-in" className="hidden"/>
                    <input type="radio" name="where" value='door-delivery' id="door-delivery" className="hidden"/>
                    <input type="radio" name="where" value='pick-up' id="pick-up" className="hidden"/>
                  
                    <button type='button' onClick={()=>{setWhere(1)}} className='flex-1'><label htmlFor="dine-in" className={`${where == 1 ? 'border-[#FF8906]' : ''} flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center`}>Dine In</label></button>
                    <button type='button' onClick={()=>{setWhere(2)}} className='flex-1'><label htmlFor="door-delivery" className={`${where == 2 ? 'border-[#FF8906]' : ''} flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center`}>Door Delivery</label></button>
                    <button type='button' onClick={()=>{setWhere(3)}} className='flex-1'><label htmlFor="pick-up" className={`${where == 3 ? 'border-[#FF8906]' : ''} flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center`}>Pick Up</label></button>
                    
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
              <p className="font-semibold">IDR{order.toLocaleString('id')}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery</p>
              <p className="font-semibold">Idr. 0</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p className="font-semibold">IDR{tax.toLocaleString('id')}</p>
            </div>
            <hr/>
            <div className="flex justify-between">
              <p>Sub Total</p>
              <p className="font-semibold">IDR{subTotal.toLocaleString('id')}</p>
            </div>
            <button form='buy'  type='submit' className="w-full bg-[#FF8906] h-8 rounded"><Link to="/history-order">Checkout</Link></button>
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

      <Footer/>

    </>
  )
}

export default CheckoutProduct
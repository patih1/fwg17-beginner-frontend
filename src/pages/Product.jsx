import * as Ic from 'react-feather';
// import { Link } from 'react-router-dom';
import Cp from '../assets/img/MotherDay.png';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import ProductCard from '../component/ProductCard';
import React, { useEffect } from 'react';
import axios from 'axios';

const Products = ()=>{
  const [showFilter, setShowFilter] = React.useState(false)
  
  const [products, setProducts] = React.useState([{}])

  const getProducts = async () =>{
    const res = await axios.get('http://localhost:5050/products')
    console.log(res.data.results)
    setProducts(res.data.results)
  }

  useEffect(()=>{
    getProducts()
    // console.log(products)
  }, [])

  const [pages, setPages] = React.useState(1)

  const incPage = () =>{
    setPages(pages+1)
  }

  const page = async (event) =>{
    event.preventDefault()
    const form = new URLSearchParams()
    form.append('page', pages)

    try{
    const res = await axios.post(`http://localhost:5050/products?page=${pages}`, form.toString())

    console.log(res)
    
    }catch(err){
      alert(err.response.data.message)
    }
  }

  return(
    <>
      <div className='bg-black'>
      <Navbar/>
      </div>

      <header className="flex justify-center items-center h-[40vh] bg-[url(../assets/img/Banner.png)] w-full bg-cover">
      <h1 className="w-4/5 text-5xl text-white">We Provide Good Coffee and Healthy<br/>Meals</h1>
      </header>
  
      <section className="flex flex-col items-center gap-8 overflow-hidden mt-7">
      <div className="flex justify-between w-4/5">
        <h3 className="text-5xl">Today <span className="text-[#8E6447]">Promo</span></h3>
        <div className="flex gap-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-300"><Ic.ArrowLeft className="text-white"></Ic.ArrowLeft></button>
          <button className="w-10 h-10 bg-[#FF8906] rounded-full flex justify-center items-center"><Ic.ArrowRight className="text-white"></Ic.ArrowRight></button>
        </div>
      </div>
  
      <div className="flex gap-4 ml-0 ml-auto overflow-hidden md:w-screen md:justify-between md: md:gap-0">
  
        <div className="flex bg-green-300 w-80 rounded-2xl">
          <div className="flex">
            <img src={Cp} alt="" className="object-contain max-h-24"/>
          </div>
          <div className="text-sm">
            <p><b>HAPPY MOTHER’S DAY!<br/></b>Get one of our favorite menu htmlFor free!</p>
            <p className="">Klaim Kupon</p>
          </div>
        </div>
  
        <div className="flex bg-green-300 w-80 rounded-2xl">
          <div className="flex">
            <img src={Cp} alt="" className="object-contain max-h-24"/>
          </div>
          <div className="text-sm">
            <p><b>HAPPY MOTHER’S DAY!<br/></b>Get one of our favorite menu htmlFor free!</p>
            <p className="">Klaim Kupon</p>
          </div>
        </div>
  
        <div className="flex bg-green-300 w-80 rounded-2xl">
          <div className="flex">
            <img src={Cp} alt="" className="object-contain max-h-24"/>
          </div>
          <div className="text-sm">
            <p><b>HAPPY MOTHER’S DAY!<br/></b>Get one of our favorite menu htmlFor free!</p>
            <p className="">Klaim Kupon</p>
          </div>
        </div>
  
        <div className="flex bg-green-300 w-80 rounded-2xl">
          <div className="flex">
            <img src={Cp} alt="" className="object-contain max-h-24"/>
          </div>
          <div className="text-sm">
            <p><b>HAPPY MOTHER’S DAY!<br/></b>Get one of our favorite menu htmlFor free!</p>
            <p className="">Klaim Kupon</p>
          </div>
        </div>
        
      </div>
  
      <div className="flex items-center w-4/5 gap-3">
        <div className="w-7 h-2 bg-[#FF8906] rounded-full"></div>
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
      </div>
      </section>
  
      <section className="flex flex-col items-center mt-7 gap-7">
      <div className="w-4/5 text-5xl">
        Our <span className="text-[#8E6447]">Product</span>
      </div>
  
      <div className="flex flex-col items-center w-full md:items-start md:flex-row">
  
        <aside className="flex flex-col w-5/6 gap-4 mb-16 text-white md:w-1/3 md:justify-end md:static md:items-end">
          <button onClick={()=>setShowFilter(!showFilter)} className="md:hidden bg-[#FF8906] flex justify-center h-12 items-center rounded"><Ic.Filter/></button>
          <form id="filter" className={`${!showFilter ? 'hidden' : ''} flex flex-col w-full gap-4 p-6 bg-black md:w-2/3 rounded-xl md:block md:h-auto`}>
  
                <div className="flex flex-wrap justify-between w-full gap-0 md:gap-0">
                  <p>Filter</p>
                  <button type="reset">Reset Filter</button>
                </div>
  
                <div action="" className="flex flex-col w-full gap-8">
                  <label htmlFor="search">Search</label>
                  <input type="text" name="search" id="search" placeholder="Search Your Product" className="h-10 pl-4 text-black -mt-7"/>
                  <p>Category</p>
                  <div className="flex gap-4">
                    <input type="checkbox" name="fav-product" id="fav-product"/>
                    <label htmlFor="fav-product">Favorite Product</label>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" name="coffee" id="coffee"/>
                    <label htmlFor="coffee">Coffee</label>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" name="non-coffee" id="non-coffee"/>
                    <label htmlFor="non-coffee">Non Coffee</label>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" name="foods" id="foods"/>
                    <label htmlFor="foods">Foods</label>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" name="add-on" id="add-on"/>
                    <label htmlFor="add-on">Add-On</label>
                  </div>
  
                  <p>Sort By</p>
                  <div className="flex gap-4">
                    <input type="checkbox" name="b1-g1" id="b1-g1"/>
                    <label htmlFor="b1-g1">Buy 1 get 1</label>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" name="flash-sale" id="flash-sale"/>
                    <label htmlFor="flash-sale">Flash sale</label>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" name="birth-pkg" id="birth-pkg"/>
                    <label htmlFor="birth-pkg">Birthday Package</label>
                  </div>
                  <div className="flex gap-4">
                    <input type="checkbox" name="cheap" id="cheap"/>
                    <label htmlFor="cheap">Cheap</label>
                  </div>
                  <label htmlFor="range-price">Range Price</label>
                  <input type="range" name="range-price" id="range-price"/>
                  <button className="w-full bg-[#FF8906] h-9" type="submit">Apply FIlter</button>
                </div>
  
          </form>
        </aside>
  
        <div className="w-full md:w-2/3">
  
          <div className="flex flex-col justify-between w-10/12 h-auto ml-6 gap-52 md:gap-72">
  
            <div className="flex flex-wrap justify-center w-full md:justify-between md:gap-y-72 gap-y-52">
    
              {products && products.map((item) => (
                <ProductCard
                  key={String(item.id)}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  discountFrom={item.discount}
                  to={`${item.id}`}
                />
              ))}
              
            </div>
   
            <form className="flex justify-center w-full gap-3">
              <button className="w-10 h-10 bg-[#FF8906] rounded-full">1</button>
              <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">2</button>
              <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">3</button>
              <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">4</button>
              <button onClick={incPage} className="w-10 h-10 bg-[#FF8906] rounded-full flex justify-center items-center"><Ic.ArrowRight className="text-white"></Ic.ArrowRight></button>
            </form>
      
          </div>
  
        </div>
  
      </div>
      </section>

      <Footer/>
    </>
  )
}

export default Products
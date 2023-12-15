import * as Ic from 'react-feather';
import { Link } from 'react-router-dom';
import Cp from '../assets/img/MotherDay.png';

const Product = ()=>{
  return(
    <>

    <header className="flex justify-center items-center h-[40vh] bg-[url(../assets/img/Banner.png)] w-full bg-cover">
      <h1 className="w-4/5 text-5xl text-white">We Provide Good Coffee and Healthy<br/>Meals</h1>
    </header>
  
    <section className="flex flex-col items-center gap-8 overflow-hidden mt-7">
      <div className="flex justify-between w-4/5">
        <h3 className="text-5xl">Today <span className="text-[#8E6447]">Promo</span></h3>
        <div className="flex gap-3">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500"><Ic.ArrowLeft className="text-white"></Ic.ArrowLeft></button>
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
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
      </div>
    </section>
  
    <section className="flex flex-col items-center mt-7 gap-7">
      <div className="w-4/5 text-5xl">
        Our <span className="text-[#8E6447]">Product</span>
      </div>
  
      <div className="flex flex-col items-center w-full md:items-start md:flex-row">
  
        <aside className="flex flex-col w-5/6 gap-4 mb-16 text-white md:w-1/3 md:justify-end md:static md:items-end">
          <button onClick="revealFilter()" className="md:hidden bg-[#FF8906] flex justify-center h-12 items-center rounded"><i data-feather="filter"></i></button>
          <form id="filter" className="flex flex-col hidden w-full gap-4 p-6 bg-black md:w-2/3 rounded-xl md:block md:h-auto">
  
                <div className="flex flex-wrap justify-between w-full md:gap-0 gap-72">
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
  
          <div className="flex w-10/12 flex-col justify-between h-auto ml-6 gap-[40vh]">
  
            <div className="flex flex-wrap justify-between w-full md:flex-nowrap md:gap-0 gap-72">
    
              <Link to="/detail-product" className="bg-[url(../assets/img/card1.png)] h-[360px] w-[377px] bg-cover bg-center flex justify-center items-center">
                <div className="absolute w-32 h-10 bg-[#D00000] mb-72 mr-72 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
        
                <div className="w-11/12 h-5/6 bg-slate-100 mt-[150%] bg-white flex flex-col items-center shadow-md justify-evenly">
                  <div className="w-11/12">
                    <p className="text-2xl font-semibold">Hazelnut Latte</p>
                  </div>
                  <div className="w-11/12">
                    <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  </div>
        
                  <div className="flex items-center w-11/12 gap-3">
                    <div>
                      <p className="text-[#D00000] line-through">IDR 20.000</p>
                    </div>
                    <div>
                      <p className="text-2xl text-[#FF8906]">IDR 20.000</p>
                    </div>
                  </div>
                  
                  <div className="w-11/12 h-1/6 flex gap-[5%]">
                    <button className="w-9/12 bg-[#FF8906] rounded">Buy</button>
                    <button className="flex items-center justify-center border rounded border-[#FF8906] w-2/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
                  </div>
                </div>
              </Link>
        
              <div className="bg-[url(../assets/img/card2.png)] h-[360px] w-[377px] bg-cover bg-center flex justify-center items-center">
                <div className="absolute w-32 h-10 bg-[#D00000] mb-72 mr-72 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
        
                <div className="w-11/12 h-5/6 bg-slate-100 mt-[150%] bg-white flex flex-col items-center shadow-md justify-evenly">
                  <div className="w-11/12">
                    <p className="text-2xl font-semibold">Hazelnut Latte</p>
                  </div>
                  <div className="w-11/12">
                    <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  </div>
        
                  <div className="flex items-center w-11/12 gap-3">
                    <div>
                      <p className="text-[#D00000] line-through">IDR 20.000</p>
                    </div>
                    <div>
                      <p className="text-2xl text-[#FF8906]">IDR 20.000</p>
                    </div>
                  </div>
        
                  <div className="w-11/12 h-1/6 flex gap-[5%]">
                    <button className="w-9/12 bg-[#FF8906] rounded">Buy</button>
                    <button className="flex items-center justify-center border rounded border-[#FF8906] w-2/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="flex flex-wrap justify-between w-full md:flex-nowrap md:gap-0 gap-72">
    
              <div className="bg-[url(../assets/img/card1.png)] h-[360px] w-[377px] bg-cover bg-center flex justify-center items-center">
                <div className="absolute w-32 h-10 bg-[#D00000] mb-72 mr-72 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
        
                <div className="w-11/12 h-5/6 bg-slate-100 mt-[150%] bg-white flex flex-col items-center shadow-md justify-evenly">
                  <div className="w-11/12">
                    <p className="text-2xl font-semibold">Hazelnut Latte</p>
                  </div>
                  <div className="w-11/12">
                    <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  </div>
        
                  <div className="flex items-center w-11/12 gap-3">
                    <div>
                      <p className="text-[#D00000] line-through">IDR 20.000</p>
                    </div>
                    <div>
                      <p className="text-2xl text-[#FF8906]">IDR 20.000</p>
                    </div>
                  </div>
                  
                  <div className="w-11/12 h-1/6 flex gap-[5%]">
                    <button className="w-9/12 bg-[#FF8906] rounded">Buy</button>
                    <button className="flex items-center justify-center border rounded border-[#FF8906] w-2/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
                  </div>
                </div>
              </div>
        
              <div className="bg-[url(../assets/img/card2.png)] h-[360px] w-[377px] bg-cover bg-center flex justify-center items-center">
                <div className="absolute w-32 h-10 bg-[#D00000] mb-72 mr-72 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
        
                <div className="w-11/12 h-5/6 bg-slate-100 mt-[150%] bg-white flex flex-col items-center shadow-md justify-evenly">
                  <div className="w-11/12">
                    <p className="text-2xl font-semibold">Hazelnut Latte</p>
                  </div>
                  <div className="w-11/12">
                    <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  </div>
        
                  <div className="flex items-center w-11/12 gap-3">
                    <div>
                      <p className="text-[#D00000] line-through">IDR 20.000</p>
                    </div>
                    <div>
                      <p className="text-2xl text-[#FF8906]">IDR 20.000</p>
                    </div>
                  </div>
        
                  <div className="w-11/12 h-1/6 flex gap-[5%]">
                    <button className="w-9/12 bg-[#FF8906] rounded">Buy</button>
                    <button className="flex items-center justify-center border rounded border-[#FF8906] w-2/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="flex flex-wrap justify-between w-full md:flex-nowrap md:gap-0 gap-72">
    
              <div className="bg-[url(../assets/img/card1.png)] h-[360px] w-[377px] bg-cover bg-center flex justify-center items-center">
                <div className="absolute w-32 h-10 bg-[#D00000] mb-72 mr-72 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
        
                <div className="w-11/12 h-5/6 bg-slate-100 mt-[150%] bg-white flex flex-col items-center shadow-md justify-evenly">
                  <div className="w-11/12">
                    <p className="text-2xl font-semibold">Hazelnut Latte</p>
                  </div>
                  <div className="w-11/12">
                    <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  </div>
        
                  <div className="flex items-center w-11/12 gap-3">
                    <div>
                      <p className="text-[#D00000] line-through">IDR 20.000</p>
                    </div>
                    <div>
                      <p className="text-2xl text-[#FF8906]">IDR 20.000</p>
                    </div>
                  </div>
                  
                  <div className="w-11/12 h-1/6 flex gap-[5%]">
                    <button className="w-9/12 bg-[#FF8906] rounded">Buy</button>
                    <button className="flex items-center justify-center border rounded border-[#FF8906] w-2/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
                  </div>
                </div>
              </div>
        
              <div className="bg-[url(../assets/img/card2.png)] h-[360px] w-[377px] bg-cover bg-center flex justify-center items-center">
                <div className="absolute w-32 h-10 bg-[#D00000] mb-72 mr-72 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
        
                <div className="w-11/12 h-5/6 bg-slate-100 mt-[150%] bg-white flex flex-col items-center shadow-md justify-evenly">
                  <div className="w-11/12">
                    <p className="text-2xl font-semibold">Hazelnut Latte</p>
                  </div>
                  <div className="w-11/12">
                    <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                  </div>
        
                  <div className="flex items-center w-11/12 gap-3">
                    <div>
                      <p className="text-[#D00000] line-through">IDR 20.000</p>
                    </div>
                    <div>
                      <p className="text-2xl text-[#FF8906]">IDR 20.000</p>
                    </div>
                  </div>
        
                  <div className="w-11/12 h-1/6 flex gap-[5%]">
                    <button className="w-9/12 bg-[#FF8906] rounded">Buy</button>
                    <button className="flex items-center justify-center border rounded border-[#FF8906] w-2/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
                  </div>
                </div>
              </div>
            </div>
   
            <div className="flex justify-center w-full gap-3">
              <button className="w-10 h-10 bg-[#FF8906] rounded-full">1</button>
              <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">2</button>
              <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">3</button>
              <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">4</button>
              <button className="w-10 h-10 bg-[#FF8906] rounded-full flex justify-center items-center"><Ic.ArrowRight className="text-white"></Ic.ArrowRight></button>
            </div>
      
          </div>
  
        </div>
  
      </div>
    </section>



    </>
  )
}

export default Product
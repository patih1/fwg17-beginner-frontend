import * as Ic from 'react-feather';
import { Link } from 'react-router-dom';
import Item1 from '../assets/img/card1.png';
import Item2 from '../assets/img/card2.png';
import Item3 from '../assets/img/card3.png';
import Item4 from '../assets/img/card4.jpeg';

const DetailProduct = () => {
  return(
    <>

  <header className="flex flex-col mt-10 md:flex-row md:mt-0">
    
    <div className="flex items-center justify-center flex-1">

      <div className="flex flex-col items-center w-full gap-5 text-white md:h-5/6 md:items-end">
        <img src={Item1} className="object-cover w-5/6 md:w-8/12 md:h-4/5 h-80"/>
        <div className="flex gap-4 md:w-8/12 h-1/3 md:h-1/4">
          <img src={Item2} className="object-cover w-24 h-24 md:w-1/3 md:h-full"/>
          <img src={Item3} className="object-cover w-24 h-24 md:w-1/3 md:h-full"/>
          <img src={Item4} className="object-cover w-24 h-24 md:w-1/3 md:h-full"/>
        </div>
      </div>

    </div>

    <div className="flex items-center flex-1 h-screen mt-10 bg-cover md:mt-0">
      <div className="flex flex-col w-11/12 gap-5 ml-6 md:w-9/12 h-5/6">
        <div className="w-32 h-10 bg-[#D00000] rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
        <h1 className="text-5xl">Hazelnut Latte</h1>
        <div className="flex items-center gap-3">
          <p className="text-[#D00000] line-through text-sm">IDR 10.000</p>
          <p className="text-xl text-[#FF8906]">IDR 20.000</p>
        </div>

        <div className="flex gap-3">
          <i data-feather="star" className="text-[#FF8906]"></i>
          <i data-feather="star" className="text-[#FF8906]"></i>
          <i data-feather="star" className="text-[#FF8906]"></i>
          <i data-feather="star" className="text-[#FF8906]"></i>
          <i data-feather="star" className="text-[#FF8906]"></i>
          <p>5.0</p>
        </div>
        
        <div className="flex items-center gap-2">
          <p>200+ Review | Recommendation</p>
          <i data-feather="thumbs-up" className="text-[#FF8906]"></i>
        </div>

        <p>Cold brewing is a method of brewing that combines ground coffee and cool<br/>
          water and uses time instead of heat to extract the flavor. It is brewed in small<br/>
          batches and steeped htmlFor as long as 48 hours.
        </p>

        <form action="">
          <div className="flex">
            <div className="flex w-6 h-6 items-center justify-center border border-[#FF8906]">-</div>
            <input type="number" name="quantity" id="quantity" className="w-6"/>
            <div className="flex w-6 h-6 items-center justify-center border border-[#FF8906] bg-[#FF8906]">+</div>
          </div>

          <div>
            <p>Choose Size</p>
            <div className="flex gap-3">

                <label htmlFor="regular" className="flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center">Regular</label>
                <input type="radio" name="regular" id="regular" className="hidden"/>
              

                <label htmlFor="medium" className="flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center">Medium</label>
                <input type="radio" name="medium" id="medium" className="hidden"/>
              

                <label htmlFor="large" className="flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center">Large</label>
                <input type="radio" name="large" id="large" className="hidden"/>
                
            </div>
          </div>

          <div>
            <p>Hot/Ice?</p>
            <div className="flex gap-3">

                <label htmlFor="ice" className="flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center">Ice</label>
                <input type="radio" name="ice" id="ice" className="hidden"/>
              
                <label htmlFor="hot" className="flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center">Hot</label>
                <input type="radio" name="hot" id="hot" className="hidden"/>

            </div>
          </div>

          <div className="flex gap-3">
            <button type="submit" className="flex-1 border border-[#FF8906] mt-10 h-10 bg-[#FF8906] rounded"><Link to="/checkout-product">Buy</Link></button>
            <button type="submit" className="flex-1 border border-[#FF8906] mt-10 h-10 flex justify-center items-center text-[#FF8906] rounded gap-3"><Ic.ShoppingCart className=""></Ic.ShoppingCart>add to cart</button>
          </div>

        </form>
        


      </div>
    </div>
  
  </header>

  <section className="flex flex-col items-center h-auto gap-10 md:mt-0">
    <div className="w-4/5">
      <p className="text-3xl md:text-5xl">Recommendation<span className="text-amber-100"> htmlFor You</span></p>
    </div>

    <div className="flex flex-col items-center justify-between w-4/5 h-auto gap-56 md:flex-row mb-60 md:gap-0">

      <div className="bg-[url(../assets/img/card1.png)] md:h-[360px] md:w-[377px] h-[280px] w-[268px] bg-cover bg-center flex justify-center items-center">
        <div className="absolute w-32 h-10 bg-[#D00000] md:mb-72 md:mr-72 mb-48 mr-48 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>

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
              <p className="md:text-2xl text-xl text-[#FF8906]">IDR 20.000</p>
            </div>
          </div>
          
          <div className="w-11/12 h-1/6 flex gap-[5%]">
            <button className="w-9/12 bg-[#FF8906] rounded">Buy</button>
            <button className="flex items-center justify-center border rounded border-[#FF8906] w-2/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
          </div>
        </div>
      </div>

      <div className="bg-[url(../assets/img/card2.png)] md:h-[360px] md:w-[377px] h-[280px] w-[268px] bg-cover bg-center flex justify-center items-center">
        <div className="absolute w-32 h-10 bg-[#D00000] md:mb-72 md:mr-72 mb-48 mr-48 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>

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
              <p className="md:text-2xl text-xl text-[#FF8906]">IDR 20.000</p>
            </div>
          </div>

          <div className="w-11/12 h-1/6 flex gap-[5%]">
            <button className="w-9/12 bg-[#FF8906] rounded">Buy</button>
            <button className="flex items-center justify-center border rounded border-[#FF8906] w-2/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
          </div>
        </div>
      </div>

      <div className="bg-[url(../assets/img/card3.png)] md:h-[360px] md:w-[377px] h-[280px] w-[268px] bg-cover bg-center flex justify-center items-center">
        <div className="absolute w-32 h-10 bg-[#D00000] md:mb-72 md:mr-72 mb-48 mr-48 ml-20 rounded-full flex items-center justify-center text-white">FLASH SALE!</div>

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
              <p className="md:text-2xl text-xl text-[#FF8906]">IDR 20.000</p>
            </div>
          </div>

          <div className="w-11/12 h-1/6 flex gap-[5%]">
            <button className="w-9/12 bg-[#FF8906] rounded">Buy</button>
            <button className="flex items-center justify-center border rounded border-[#FF8906] w-2/12"><Ic.ShoppingCart className="text-[#FF8906] w-6 h-6"></Ic.ShoppingCart></button>
          </div>
        </div>
      </div>

    </div>

    
    <div className="flex gap-3">
      <button className="w-10 h-10 bg-[#FF8906] rounded-full">1</button>
      <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">2</button>
      <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">3</button>
      <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">4</button>
      <button className="w-10 h-10 bg-[#FF8906] rounded-full flex justify-center items-center"><Ic.ArrowRight className="text-white"></Ic.ArrowRight></button>
    </div>

  </section>

    </>
  )
}

export default DetailProduct


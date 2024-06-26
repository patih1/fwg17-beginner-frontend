import * as Ic from 'react-feather';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Article from '../component/Article';
import ProductCard from '../component/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CsImg from "../assets/img/cs.png"
import UserImg from "../assets/img/user.png"
// import Logo from '../assets/img/Logo.png';
// import { Link } from 'react-router-dom';

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState()
  
  const getProduct = async () => {
    setLoading(true)
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {params: {
      itemLimit: 4,
      recommended: true
    }}) 

    setProducts(res.data.results)
    setLoading(false)
  }

  useEffect(() => {
    getProduct()
  },[])
  
  const [showChat, setShowChat] = useState(false)

  const [point, setPoint] = useState([
    {
      desc: 'High quality beans'
    },{
      desc: 'Healthy meals, you can request the ingredients'
    },{
      desc: 'Chat with our staff to get better experience for ordering'
    },{
      desc: 'Free member card with a minimum purchase of IDR 200.000.'
    }
  ])

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // },[])

  return (
    <>
      <div className='md:bg-[rgba(1,1,1,.1)] md:absolute w-full bg-black'>
        <Navbar />
      </div>

      <header className="flex flex-col-reverse md:flex-row">

        <div className="flex-1 h-screen bg-gradient-to-b from-[#777c82] to-[#0b0909] flex items-center justify-center py-10 md:py-0">

          <div className="flex flex-col justify-center w-4/5 gap-10 text-white md:w-3/5 h-4/5">

            <h1 className="text-3xl md:text-5xl">Start Your Day with Coffee and Good Meals</h1>
            <p className="text-base">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for Link bigger smile!</p>
            <button className="w-4/12 h-12 bg-[#FF8906] rounded text-black">Get Started</button>

            <div className="flex w-full h-20 divide-x">
              <div className="flex-1">
                <p className="text-3xl md:text-5xl text-[#FF8906]">90+</p>
                <p className="mt-4">Staff</p>
              </div>
              <div className="flex-1 px-4">
                <p className="text-3xl md:text-5xl text-[#FF8906]">30+</p>
                <p className="mt-4">Stores</p>
              </div>
              <div className="flex-1 px-4">
                <p className="text-3xl md:text-5xl text-[#FF8906]">800+</p>
                <p className="mt-4">Customer</p>
              </div>
            </div>
          </div>


        </div>

        <div className="flex-1 bg-[url(../assets/img/Header.png)] bg-cover h-screen">
        </div>

        <button className="w-14 h-14 md:w-20 md:h-20 fixed bg-[#FF8906] rounded-full right-10 bottom-10 flex justify-center items-center" onClick={()=>setShowChat(!showChat)}><Ic.MessageCircle className="w-5 h-5 md:h-10 md:w-10"></Ic.MessageCircle></button>

        <div id="chat" className={`${!showChat ? 'hidden' : ''} w-72 rounded-xl fixed h-96 bg-white right-10 bottom-32 border-8 border-white border-t-[#FF8906] flex flex-col gap-4 overflow-scroll`}>
          <div className="flex items-center gap-3 h-2/12">
            <img className="w-3/12 rounded-full" src={CsImg} alt="" />
            <div className="flex-1">
              <p className="font-semibold">Maria Angela</p>
              <p className="text-[#FF8906]">Admin Support</p>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-2 text-xs">
            <img src={CsImg} alt="" className="w-8 h-8 rounded-full" />
            <div className="bg-[#F8F8F8] p-1 rounded-xl">Halo, Ada yang bisa kami bantu?</div>
          </div>
          <div className="flex items-center justify-end gap-2 text-xs">
            <div className="bg-[#F8F8F8] p-1 rounded-xl">Saya kesulitan mencari kopi</div>
            <img src={UserImg} alt="" className="w-8 h-8 rounded-full" />
          </div>
          <div className='mb-14'></div>
          <form className="fixed flex gap-4 mt-80">
            <input type="text" name="message" id="message" className="flex-1 pl-3 border rounded-xl h-11" placeholder="Masukan Pesan Anda" />
            <button type="submit" name="chat" className="h-11 w-11 flex items-center justify-center bg-[#FF8906] rounded-xl"><Ic.Send></Ic.Send></button>
          </form>
        </div>

      </header>

      <article className="md:h-[80vh] flex flex-col-reverse md:flex-row">

        <div className="flex justify-center flex-1 md:items-center">
          <div className="flex flex-col w-4/5 gap-10 md:w-3/5 h-2/5 md:h-4/5">

            <div className="flex items-center gap-4">
              <div className="h-16 w-3 bg-[#FF8906]"></div>
              <p className="text-3xl md:text-5xl">We Provide <span className="text-[#8E6447]">Good Coffee </span>and <span className="text-[#8E6447]">Healthy Meals</span></p>
            </div>

            <div>
              <p className="">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
            </div>

            <div className="flex flex-col gap-4">
            {point.map((item, index) => (
              <Article
              key={String(index)}
              desc={item.desc}
            />
          ))}
            </div>

          </div>
        </div>
        <div className="flex-1  bg-[url(../assets/img/Article.png)] bg-cover md:block hidden">
        </div>

      </article>

      <section className="flex flex-col md:h-[80vh] h-auto md:mb-0 mb-48 items-center mt-20 gap-10">
        <div className="flex flex-col items-center gap-8">
          <p className="text-3xl md:text-5xl">Here is People’s <span className="text-[#8E6447]">Favorite</span></p>
          <div className="h-1.5 w-16 bg-[#FF8906]"></div>
          <p className="text-center text-slate-500">Let’s choose and have Link bit taste of poeple’s favorite. It might be yours too!</p>
        </div>

        {loading ? <div className='flex items-center justify-center w-full h-full text-[#FF8906]'>
          <span className='w-16 loading loading-spinner'></span>
        </div> : ''}

        {loading ? '' : <div className="flex flex-col items-center justify-between w-4/5 h-auto gap-52 md:flex-row md:gap-0">
    
          {products && products.map((item) => (
            <ProductCard
              key={String(item.id)}
              name={item.name}
              price={item.basePrice}
              description={item.description}
              discount={item.discount}
              to={`/detail-product/${item.id}`}
              image={item.image}
              flashSale={item.discount ? true : false}
              small={true}
            />
          ))}

        </div>}
        
      </section>

      <section className="flex flex-col md:h-[115vh] h-[50vh] mt-28 items-center mb-5">
        <div>
          <div className="flex flex-col items-center gap-8">
            <p className="text-3xl text-center md:text-5xl"><span className="text-[#8E6447]">Visit Our Store </span>Visit Our Store in the Spot on the Map Below</p>
            <div className="h-1.5 w-16 bg-[#FF8906]"></div>
            <p className="mx-4 text-center text-slate-500">You can explore the menu that we provide with fun and have their<br className="hidden md:block" />own taste and make your day better.</p>
          </div>
        </div>

        <div className="w-full flex-1 bg-[url(../assets/img/wmap.png)] bg-contain bg-no-repeat mt-10 md:bg-cover">

        </div>

      </section>

      <section className="h-[80vh] md:h-[70vh] flex md:flex-row flex-col bg-gradient-to-b from-[#777c82] to-[#0b0909] text-white">

        <div className="flex items-center justify-center w-full mt-4 md:flex-1 md:justify-end md:mt-0 h-1/3 md:h-4/5 md:mt-7">
          <div className="md:w-3/5 md:h-4/5 h-full w-4/5 bg-[url(../assets/img/Testimony.png)] bg-cover"></div>
        </div>

        <div className="flex items-center justify-center flex-1 h-full md:justify-start">
          <div className="flex flex-col w-4/5 gap-6 ml-4 bg-cover md:3/5 h-3/4">
            <p className="hidden md:block">TESTIMONIAL</p>
            <div className="flex items-center">
              <div className="h-1.5 w-16 bg-[#FF8906] rotate-90 md:ml-0 -ml-9"></div>
              <p className="-ml-4 text-3xl md:text-5xl md:ml-0">Viezh Robert</p>
            </div>
            <p className="text-[#FF8906]">Manager Coffe Shop</p>
            <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
            <div className="flex items-center gap-4">
              <Ic.Star className="text-[#FF8906]"></Ic.Star>
              <Ic.Star className="text-[#FF8906]"></Ic.Star>
              <Ic.Star className="text-[#FF8906]"></Ic.Star>
              <Ic.Star className="text-[#FF8906]"></Ic.Star>
              <Ic.Star className="text-[#FF8906]"></Ic.Star>
              <p>5.0</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full"><Ic.ArrowLeft className="text-slate-500"></Ic.ArrowLeft></button>
              <button className="w-12 h-12 bg-[#FF8906] rounded-full flex items-center justify-center"><Ic.ArrowRight className="text-slate-500"></Ic.ArrowRight></button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-2 bg-[#FF8906] rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

      </section>

      <Footer />

    </>
  )
}

export default Home
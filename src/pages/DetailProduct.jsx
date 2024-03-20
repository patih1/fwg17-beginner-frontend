import Footer from '../component/Footer';
import * as Ic from 'react-feather';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../component/Navbar';
import Item1 from '../assets/img/card1.png';
import Item2 from '../assets/img/card2.png';
import Item3 from '../assets/img/card3.png';
import Item4 from '../assets/img/card4.jpeg';
import { useDispatch } from 'react-redux';
import { setProduct as setProductAction } from '../redux/reducer/product';


const DetailProduct = () => {
  const {id} = useParams()
  const [sizeId, setSizeId] = useState(1)
  const [variantId, setVariantId] = useState(2) 
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const option = (num) => {
    if(num === 1 || num === 2 || num === 3){
      if(num === 1){
        setSizeId(1)
      }else if(num === 2){
        setSizeId(2)
      }else{
        setSizeId(3)
      }
    }else if(num === 4 || num === 5){
      if(num === 4){
        setVariantId(2)
      }else{
        setVariantId(1)
      }
    }
  }

  const setDataItem = (event) =>{
    event.preventDefault()
    const {value: size} = event.target.size
    const {value: variant} = event.target.variant

    const data = {
      productId: id,
      name: product.name,
      price: product.basePrice + variantPrice + sizePrice,
      discount: product.discount,
      image: product.image,
      quantity: quantity,
      size: size,
      // additionalPrice: variantPrice + sizePrice,
      variant: variant,
      sizeId: sizeId,
      variantId: variantId
    }

    dispatch(setProductAction(data))
    
    navigate('/checkout-product')
  }
  
  const [products, setProducts] = useState()
  const getProducts = async () =>{
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {params: {
      itemLimit: 3
    }}) 
    
    setProducts(res.data.results)
  }

  const [product, setProduct] = useState()
  const [variantPrice, setVariantPrice] = useState()
  const [sizePrice, setSizePrice] = useState()
  const getProduct = async () =>{
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`) 
      const res2 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/productVariant/${variantId}`) 
      const res3 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/productSize/${sizeId}`) 
      
      setProduct(res.data.results)
      setVariantPrice(res2.data.results.additionalPrice)
      setSizePrice(res3.data.results.additionalPrice)
    }
    
    let price = product?.basePrice
    if(product?.discount){
      price = product?.basePrice - product?.discount
    }
    
    useEffect(() => {
      getProduct()
    },[product])
  
    useEffect(() => {
      getProducts()
    },[])

    const test = () => {
      console.log(product)
    }

  return(
    <>
      <div className='bg-black'>
      <Navbar/>
      </div>

      <header className="flex flex-col md:flex-row md:mt-14">
    
    <div className="flex justify-center flex-1">

      <div className="flex flex-col items-center justify-center w-full gap-5 text-white md:justify-start md:h-4/6 md:items-end">
        <div className='object-contain w-3/4 md:w-4/6 md:h-4/5 h-2/4 bg-slate-50'>
        <img src={product?.image ? `${product?.image}` : Item1} className="object-cover w-full h-full"/>
        </div>
        <div className="flex gap-4 md:w-8/12 h-1/3 md:h-1/4">
          <img src={Item2} className="object-cover w-24 h-24 md:w-1/3 md:h-full"/>
          <img src={Item3} className="object-cover w-24 h-24 md:w-1/3 md:h-full"/>
          <img src={Item4} className="object-cover w-24 h-24 md:w-1/3 md:h-full"/>
        </div>
      </div>

    </div>

    <div className="flex items-center flex-1 h-screen -mt-14">
      <div className="flex flex-col w-11/12 gap-5 ml-6 md:w-9/12 h-5/6">
        <div className="w-32 h-10 bg-[#D00000] rounded-full flex items-center justify-center text-white">FLASH SALE!</div>
        <h1 className="text-5xl">{product?.name}</h1>
        <div className="flex items-center gap-3">
          {product?.discount && <p className="text-[#D00000] line-through text-sm">IDR{product?.basePrice.toLocaleString('id')}</p>}
          <p className="text-xl text-[#FF8906]">IDR{price?.toLocaleString('id')}</p>
        </div>

        <div className="flex gap-3">
          <Ic.Star className="text-[#FF8906]"></Ic.Star>
          <Ic.Star className="text-[#FF8906]"></Ic.Star>
          <Ic.Star className="text-[#FF8906]"></Ic.Star>
          <Ic.Star className="text-[#FF8906]"></Ic.Star>
          <Ic.Star className="text-[#FF8906]"></Ic.Star>
          <p>5.0</p>
        </div>
        
        <div className="flex items-center gap-2">
          <p>200+ Review | Recommendation</p>
          <i data-feather="thumbs-up" className="text-[#FF8906]"></i>
        </div>

        <p>
          {product?.description}
        </p>

        <form action="" onSubmit={setDataItem}>
          <div className="flex">
            <button onClick={()=>{quantity > 1 ? setQuantity(quantity-1) : setQuantity(1)}} type='button' className="flex w-6 h-6 items-center justify-center border border-[#FF8906]">-</button>
            <div type="text" value={quantity} name="quantity" id="quantity" className="flex items-center justify-center w-6">{quantity}</div>
            <button onClick={()=>{setQuantity(quantity+1)}} type='button' className="flex w-6 h-6 items-center justify-center border border-[#FF8906] bg-[#FF8906]">+</button>
          </div>

          <div>
            <p>Choose Size</p>
            <div className="flex gap-3">
                <input checked="checked" type="radio" name="size" id="regular" className="hidden" value='regular'/>
                <input type="radio" name="size" id="medium" className="hidden" value='medium'/>
                <input type="radio" name="size" id="large" className="hidden" value='large'/> 

                <button type='button' onClick={()=>{option(1)}} className='flex-1'><label className={`${sizeId == 1 ? 'border-[#FF8906]' : ''} flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center`} htmlFor="regular">Regular</label></button>
              

                <button type='button' onClick={()=>{option(2)}} className='flex-1'><label className={`${sizeId == 2 ? 'border-[#FF8906]' : ''} flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center`} htmlFor="medium">Medium</label></button>
              

                <button type='button' onClick={()=>{option(3)}} className='flex-1'><label className={`${sizeId == 3 ? 'border-[#FF8906]' : ''} flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center`} htmlFor="large">Large</label></button>

            </div>
          </div>

          <div>
            <p>Hot/Ice?</p>
            <div className="flex gap-3">

                <button className='flex-1'type='button' onClick={()=>{option(4)}}><label htmlFor="ice" className={`${variantId == 2 ? 'border-[#FF8906]' : ''} flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center`}>Ice</label></button>
                <button className='flex-1'type='button' onClick={()=>{option(5)}}><label htmlFor="hot" className={`${variantId == 1 ? 'border-[#FF8906]' : ''} flex-1 flex justify-center border pl-4 hover:border-[#FF8906] h-8 items-center`}>Hot</label></button>
              
                <input checked="checked" type="radio" name="variant" id="ice" value='ice' className="hidden"/>
                <input type="radio" name="variant" id="hot" value='hot' className="hidden"/>

            </div>
          </div>

          <div className="flex gap-3">
            <button type="submit" className="flex-1 border border-[#FF8906] mt-10 h-10 bg-[#FF8906] rounded">Buy</button>
            <button type='button' className="flex-1 border border-[#FF8906] mt-10 h-10 flex justify-center items-center text-[#FF8906] rounded gap-3"><Ic.ShoppingCart className=""></Ic.ShoppingCart>add to cart</button>
          </div>

        </form>
        


      </div>
    </div>
  
      </header>

      <section className="flex flex-col items-center h-auto gap-10 mt-6 md:-mt-52">
    <div className="w-4/5">
      <p className="text-3xl md:text-5xl">Recommendation<span className="text-[#8E6447]"> For You</span></p>
    </div>

    <div className="flex flex-col items-center justify-between w-4/5 h-auto gap-56 md:flex-row mb-60 md:gap-0">
    
      {products && products.map((item) => (
        <ProductCard
          key={String(item.id)}
          name={item.name}
          price={item.basePrice}
          description={item.description}
          discount={item.discount}
          to={`/detail-product/${item.id}`}
          image={item.image}
        />
      ))}

    </div>

    
    <div className="flex gap-3">
      <button className="w-10 h-10 bg-[#FF8906] rounded-full">1</button>
      <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">2</button>
      <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">3</button>
      <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">4</button>
      <button onClick={test} className="w-10 h-10 bg-[#FF8906] rounded-full flex justify-center items-center"><Ic.ArrowRight className="text-white"></Ic.ArrowRight></button>
    </div>

      </section>

      <Footer/>

    </>
  )
}

export default DetailProduct


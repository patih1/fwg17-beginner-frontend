import * as Ic from 'react-feather';
// import { Link } from 'react-router-dom';
import Cp from '../assets/img/MotherDay.png';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import ProductCard from '../component/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const Products = ()=>{
  const [showFilter, setShowFilter] = useState(false)
  const [products, setProducts] = useState([{}])
  const [pageInfo, setPageInfo] = useState(null)
  const [keyword, setKeyword] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState([])
  const [choosedCategory, setChoosedCategory] = useState([])
  const [page, setPage] = useState()
  const [sortBy, setSortBy] = useState()
  const [loading, setLoading] = useState(true)

  const filterProduct = (event) =>{
    event.preventDefault()
    const {value: search} = event.target.search
    const {value: sortBy} = event.target.sortBy


    setSortBy(sortBy)
    setKeyword(search)
    setCategory(choosedCategory)
    // console.log(category)
  }

  // const getProductBySearchParams = async (search) => {
  //   const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {params: {
  //       search: search
  //     }})
      
  //   setProducts(res.data.results)
  // }

  useEffect(()=>{
    const getProducts = async () =>{
      setLoading(true)
      let res
      if(page === 'next' || page === 'next2'){
        res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {params: {
          page: pageInfo.nextPage,
          search: keyword,
          filter: category?.toString(),
          sortBy
        }})
      }else if(page === `1`){
        res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {params: {
          page: 1,
          search: keyword,
          filter: category?.toString(),
          sortBy
        }})
      }else if(page === `2`){
        res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {params: {
          page: 2,
          search: keyword,
          filter: category?.toString(),
          sortBy
        }})
      }else if(page === `3`){
        res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {params: {
          page: 3,
          search: keyword,
          filter: category?.toString(),
          sortBy
        }})
      }else if(page === `4`){
        res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {params: {
          page: 4,
          search: keyword,
          filter: category?.toString(),
          sortBy
        }})
      }else{
        res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products`, {params: {
          itemLimit: 6,
          search: keyword,
          filter: category?.toString(),
          sortBy
        }})
        setLoading(false)
    }
    
    setPageInfo(res.data.pageInfo)
    setProducts(res.data.results)
  }
  getProducts()
  }, [keyword, page, category, sortBy])

  const getCategory = (str) => {
    if(choosedCategory.includes(str)){
      const result = choosedCategory.filter((x)=>x != str)
      setChoosedCategory([result])
    }else{
      setChoosedCategory([...choosedCategory,str])
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

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
  
      <div className="flex gap-4 ml-auto overflow-hidden md:gap-24">
  
        <div className="flex bg-green-300 w-80 rounded-2xl">
          <div className="flex">
            <img src={Cp} alt="" className="object-contain max-h-24"/>
          </div>
          <div className="text-sm">
            <p><b>HAPPY MOTHER’S DAY!<br/></b>Get one of our favorite menu for free!</p>
            <p className="">Klaim Kupon</p>
          </div>
        </div>
  
        <div className="flex bg-green-300 w-80 rounded-2xl">
          <div className="flex">
            <img src={Cp} alt="" className="object-contain max-h-24"/>
          </div>
          <div className="text-sm">
            <p><b>HAPPY MOTHER’S DAY!<br/></b>Get one of our favorite menu for free!</p>
            <p className="">Klaim Kupon</p>
          </div>
        </div>
  
        <div className="flex bg-green-300 w-80 rounded-2xl">
          <div className="flex">
            <img src={Cp} alt="" className="object-contain max-h-24"/>
          </div>
          <div className="text-sm">
            <p><b>HAPPY MOTHER’S DAY!<br/></b>Get one of our favorite menu for free!</p>
            <p className="">Klaim Kupon</p>
          </div>
        </div>
  
        <div className="flex bg-green-300 w-80 rounded-2xl">
          <div className="flex">
            <img src={Cp} alt="" className="object-contain max-h-24"/>
          </div>
          <div className="text-sm">
            <p><b>HAPPY MOTHER’S DAY!<br/></b>Get one of our favorite menu for free!</p>
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
    


          <div className={`${loading ? '' : 'hidden'} flex items-center justify-center w-full h-[80vh]`}>
            <span className="text-[#FF8906] loading loading-spinner w-16"></span>
          </div>
    

            <aside className={`${loading ? 'hidden' : ''} flex flex-col w-5/6 gap-4 mb-16 text-white md:w-1/3 md:justify-end md:static md:items-end`}>
              <button onClick={()=>setShowFilter(!showFilter)} className="md:hidden bg-[#FF8906] flex justify-center h-12 items-center rounded"><Ic.Filter/></button>
              <form onSubmit={filterProduct} id="filter" className={`${!showFilter ? 'hidden' : ''} flex flex-col w-full gap-4 p-6 bg-black md:w-2/3 rounded-xl md:block md:h-auto`}>
  
                <div className="flex flex-wrap justify-between w-full gap-0 md:gap-0">
                  <p>Filter</p>
                  <button type="reset" onClick={()=>setChoosedCategory([])}>Reset Filter</button>
                </div>
  
                <div action="" className="flex flex-col w-full gap-8">
                  <label htmlFor="search">Search</label>
                  <input defaultValue={searchParams.get('search')} type="text" name="search" id="search" placeholder="Search Your Product" className="h-10 pl-4 text-black -mt-7"/>
                  <p>Category</p>
                  <div  className="relative flex gap-4">
                    <input type="checkbox" name="coffee" id="coffee"/>
                    <label onClick={()=>{getCategory('coffee')}} htmlFor="coffee" className='absolute pl-10 -top-[5px]'>Coffee</label>
                  </div>
                  <div className="relative flex gap-4">
                    <input type="checkbox" name="non-coffee" id="non-coffee"/>
                    <label onClick={()=>{getCategory('non coffee')}} htmlFor="non-coffee" className='absolute pl-10 -top-[5px]'>Non Coffee</label>
                  </div>
                  <div className="relative flex gap-4">
                    <input type="checkbox" name="foods" id="foods"/>
                    <label onClick={()=>{getCategory('food')}} htmlFor="foods" className='absolute pl-10 -top-[5px]'>Foods</label>
                  </div>
  
                  <p>Sort By</p>
                  <div className="flex gap-4">
                    <input type="radio" name="sortBy" id="name" value='name'/>
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="flex gap-4">
                    <input type="radio" name="sortBy" id="new" value='createdAt'/>
                    <label htmlFor="new">Newest Product</label>
                  </div>
                  <div className="flex gap-4">
                    <input type="radio" name="sortBy" id="cheap" value='basePrice'/>
                    <label htmlFor="cheap">Cheapest</label>
                  </div>
                  <label htmlFor="range-price">Range Price</label>
                  <input min={0} max={1000000} type="range" name="range-price" id="range-price"/>
                  <button className="w-full bg-[#FF8906] h-9" type="submit">Apply FIlter</button>
                </div>
  
              </form>
            </aside>

            <div className={`${loading ? 'hidden' : ''} w-full md:w-2/3`}>
      
              <div className="flex flex-col justify-between w-10/12 h-auto ml-6 gap-52 md:gap-72">
      
                <div className="flex flex-wrap justify-center w-full md:justify-between md:gap-y-72 gap-y-52">
        
                  {products && products.map((item) => (
                    <ProductCard
                      key={String(item.id)}
                      name={item.name}
                      price={item.basePrice}
                      description={item.description}
                      discount={item.discount}
                      flashSale={item.discount ? true : false}
                      to={`/detail-product/${item.id}`}
                      image={item.image}
                    />
                  ))}
                  
                </div>
                  
                <div className="flex justify-center w-full gap-3">
                  <button type='button' onClick={()=>setPage('1')} className="w-10 h-10 bg-[#FF8906] rounded-full">1</button>
                  <button type='button' onClick={()=>setPage('2')} className="w-10 h-10 bg-[#F8F8F8] rounded-full">2</button>
                  <button type='button' onClick={()=>setPage('3')} className="w-10 h-10 bg-[#F8F8F8] rounded-full">3</button>
                  <button type='button' onClick={()=>setPage('4')} className="w-10 h-10 bg-[#F8F8F8] rounded-full">4</button>
                  <button type='button' onClick={()=>{page == 'next2' ? setPage('next') : setPage('next2')}} className="w-10 h-10 bg-[#FF8906] rounded-full flex justify-center items-center"><Ic.ArrowRight className="text-white"></Ic.ArrowRight></button>
                </div>
                  
              </div>
                  
            </div>
                
        </div>
      </section>

      <Footer/>
    </>
  )
}

export default Products
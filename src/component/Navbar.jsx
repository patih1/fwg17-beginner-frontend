import * as Ic from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/icon/Logo.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducer/auth';
import { setProfile } from '../redux/reducer/profile';

const Navbar = () =>{
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const data = useSelector(state => state.product.data)
  const user = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(token){
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/customer/users`, {
        headers : {
          'Authorization' : `Bearer ${token}`
        }
      }).then(({data})=>{
        dispatch(setProfile(data.results))
        
      }).catch((err)=>{console.log(err)})
    }
  },[token, dispatch])

  const onLogout = () =>{
    dispatch(logout())
    navigate('/login')
  }

  return (
    <>
  
    <div id="navbar" className={`${!showMenu ? 'h-16' : ''} flex flex-row w-full p-4 overflow-hidden text-white bg-black md:bg-[rgba(1,1,1,0)]`}>
      
      <div className="flex flex-col items-center flex-1 gap-10 md:mx-20 md:flex-row">
        <Link to="/" className="flex items-center gap-3 font-[Sacramento]"><img src={Logo} alt=""/>Coffe Shop</Link>
        <Link to="/" className="">Home</Link>
        <Link to="/products" className="">Product</Link>
      </div>
  
      <div className="flex flex-col items-center justify-start flex-1 md:justify-end md:mx-20 gap-9 md:flex-row">
        <div className="flex flex-col-reverse gap-14 md:flex-row">
          <Link className={`relative`} to='/checkout-product'>{data.length > 0 ? <div className='font-bold absolute px-1 text-[10px] bg-red-600 rounded-full -right-3 -top-2'>{data?.length}</div> : ''}<Ic.ShoppingCart/></Link>
          <Link className={`${token ? '' : 'hidden'}`} to='/history-order'><Ic.Archive/></Link>
          <div className="flex items-center gap-10 mt-1">
            <button onClick={()=>setShowMenu(!showMenu)}><Ic.Menu className="ml-20 md:hidden"></Ic.Menu></button>
          </div>
        </div>
        {!token && <>
          <button className={`px-5 py-2 border border-white rounded`}><Link to='/login'>Sign In</Link></button>
        <button className="border border-[#FF8906] bg-[#FF8906] px-5 py-2 rounded text-black"><Link to='/register'>Sign Up</Link></button>
        </> }

        {token && <button onClick={onLogout} className="border border-[#FF8906] bg-[#FF8906] px-5 py-2 rounded text-black">Log Out</button>}
        {token && <Link to='/profile'><button className='overflow-hidden rounded-full'><img className='object-cover w-10 h-10' src={user?.picture? `${user?.picture}` : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}></img></button></Link>}

      </div>
    </div>

    </>
  )
}

export default Navbar
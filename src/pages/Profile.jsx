import Navbar from "../component/Navbar"
import Footer from '../component/Footer';
import { useEffect, useState } from "react";
import axios from "axios";
import * as Ic from "react-feather";
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from "../redux/reducer/profile";
// import * as Ic from 'react-feather';
// import { Link } from 'react-router-dom';
// import Item1 from '../assets/img/card1.png';
// import Item2 from '../assets/img/card2.png';
// import Item3 from '../assets/img/card3.png';
// import Item4 from '../assets/img/card4.jpeg';

const Profile = () => {
  // const [user, setUser] = useState({})
  const user = useSelector(state => state.profile.data)
  const token = useSelector(state => state.auth.token)
  // const token = window.localStorage.getItem('token')
  const [preview, setPreview] = useState()
  const dispatch = useDispatch()

  const updateProfileData = async (e) =>{
    if(e){
      e.preventDefault()
    }
    try{
      const form = new FormData()
      const fields = ['fullName', 'email', 'address', 'phoneNumber', 'password']
      
      fields.forEach((field)=>{
        if(e.target[field]){
          form.append(field, e.target[field].value)
          e.target[field].value = ""
        }
      })
      const {data} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/users`, form, {
        headers : {
          'Content-Type' : 'multipart/form-data',
          'Authorization' : `Bearer ${token}`
        }})
          dispatch(setProfile(data.results))
      
    }catch(err){
      ''
    }
  }
  
  useEffect(() => {
    updateProfileData().then(({data})=>{
      dispatch(setProfile(data.results))
    }).catch((err)=>{console.log(err)})
  },[])

  const changePicture = (e) =>{
    const pictureUrl = URL.createObjectURL(e.target.files[0])
    setPreview(pictureUrl)
  }

  const uploadPhoto = async (e) =>{
    if(e){
      e.preventDefault()

    }
    try{
      const [file] = e.target.picture.files
      console.log(file)
      if(file){
        const form = new FormData()
        form.append('picture', file)
        const {data} = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/customer/users`, form, {
        headers : {
          'Content-Type' : 'multipart/form-data',
          'Authorization' : `Bearer ${token}`
        }})
        
        dispatch(setProfile(data.results))
        setPreview(null)
      }
    }catch(err){
      window.alert(err.response.data.message)
    }
  }

  return(
    <>
      <div className='bg-black'>
      <Navbar/>
      </div>

      <header className="flex flex-col items-center w-full my-8">
    <h2 className="w-4/5 text-5xl">Profile</h2>
      </header>

      <section className="flex flex-col items-center gap-3 md:flex-row md:items-start">
    
    <div className="flex justify-center w-full md:w-2/6 md:justify-end">

      <form onSubmit={uploadPhoto} className="flex flex-col items-center w-4/5 gap-4 p-6 border md:w-3/5 border-slate-300">
        <p className="text-2xl font-semibold text-center">{user?.fullName}</p>
        <p className="">{user?.email}</p>
        <label className="flex flex-col items-center w-full gap-5">
          <img className="flex items-center object-cover overflow-hidden bg-black rounded-full w-28 h-28" src={preview ? preview : `${import.meta.env.VITE_BACKEND_URL}/uploads/users/${user?.picture}`} alt=""/>
          <input multiple={false} onChange={changePicture} type="file" name="picture" id="picture" className="hidden"/>
          
          <label htmlFor="picture" className={`${preview ? 'hidden' : ''} bg-[#FF8906] w-full rounded h-10 flex items-center justify-center`}>Upload New Photo</label>
          <div className={`${!preview ? 'hidden' : ''} flex justify-between w-full`}>
            <button type="submit" className={`bg-[#77de62] rounded h-10 flex items-center justify-center w-2/5`}><Ic.Check/> Confirm</button>
            <button type="reset" onClick={()=>{setPreview()}} className={`bg-[#f05d5d] rounded h-10 flex items-center justify-center w-2/5`}><Ic.X/> Cancel</button>
          </div>
        </label>
        <p>Since {user?.createdAt?.slice(0,-14)}</p>
      </form>

    </div>
    
    <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-1 md:items-start">
      
      <form onSubmit={updateProfileData} className="flex flex-col w-4/5 gap-4 p-6 border border-slate-300">

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="fullName">Full Name</label>
          <input className="px-5 border rounded h-9" type="text" name="fullName" id="fullName" placeholder={user?.fullName}/>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="email">Email</label>
          <input className="px-5 border rounded h-9" type="email" name="email" id="email" placeholder={user?.email}/>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="phoneNumber">Phone</label>
          <input className="px-5 border rounded h-9" type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder={user?.phoneNumber}/>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between">
            <label className="font-semibold" htmlFor="password">Password</label>
            <p className="text-[#FF8906] underline">Set New Password</p>
          </div>
          <input className="px-5 border rounded h-9" type="password" name="password" id="password" placeholder="**********"/>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="address">Address</label>
          <input className="px-5 border rounded h-9" type="text" name="address" id="address" placeholder={user?.address}/>
        </div>

        <div>
          <button className="w-full bg-[#FF8906] h-10 mt-4 rounded" type="submit">Submit</button>
        </div>

        
      </form>
      
    </div>
    
      </section>

      <Footer/>

    </>
  )
}

export default Profile

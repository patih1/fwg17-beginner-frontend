import * as Ic from 'react-feather';
import Logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import React from 'react';

const Login = ()=>{

  // const inputEmail = React.useRef()
  // const inputPassword = React.useRef()

  const processLogin = async (event) =>{
    event.preventDefault()
    const {value: email} = event.target.email
    const {value: password} = event.target.password

    // console.log(password)


    const form = new URLSearchParams()
    form.append('email', email)
    form.append('password', password)


    try{
      const {data} = await axios.post('http://localhost:5050/auth/login', form.toString())
      // const {token} = data.results
        window.location = '/'
        // alert('asdasdas')

    }catch(err){
      alert(err.response.data.message)
    }
  }

  return(
    <>
      <section className="flex ">
    <div className="h-screen w-1/5 bg-cover bg-[url('../assets/img/Login.png')] hidden md:block">
        
    </div>

    <header className="flex flex-col items-center justify-center flex-1 gap-4">
      <div className="w-4/5">  
        <img src={Logo} alt="" className="logo"/>
      </div>

      <div className="w-4/5">
        <h1 className="text-xl text-[#8E6447] font-semibold">Register</h1>
        <p className="font-normal text-gray-600">Fill out the form correctly</p>
      </div>

      
      <p className="hidden w-4/5 text-green-500 bg-slate-200" id="success">success</p>
      
      <form onSubmit={processLogin} className="flex flex-col w-4/5 gap-4" id="form">

        <label className="flex flex-col" htmlFor="email">
          <div className="font-semibold">Email</div>
          <div className="flex items-center border border-slate-300">
            <Ic.Mail className="w-5 ml-4"></Ic.Mail>
            <input className="flex-1 px-3 rounded outline-none h-9" type="email" name="email" id="email" placeholder="Enter Your Email"/>
          </div>
        </label>
        
        <label className="flex flex-col" htmlFor="password">
          <div className="font-semibold">Password</div>
          <div className="flex items-center border border-slate-300">
            <Ic.Key className="w-5 ml-4"></Ic.Key>
            <input className="flex-1 px-3 rounded outline-none h-9" type="password" name="password" id="password" placeholder="Enter Your Password"/>
          </div>
        </label>

        <div className="flex justify-end w-full">
          <Link to="/lupa-password" className="text-[#FF8906]">Lupa Password?</Link>
        </div>

        <div>
          <button className="w-full bg-[#FF8906] h-10 mt-4 rounded" type="submit"><p>Log In</p></button>
        </div>

        
      </form>

      <div className="w-4/5">
        <div className="flex flex-col items-center justify-center w-full">
          <p>Not Have An Account? <Link to="/register" className="text-[#FF8906]">Register</Link></p>
          <p className="text-[#AAA]">or</p>
        </div>
      </div>

      <div className="flex w-4/5 gap-4">

        <button className="flex items-center justify-center w-2/4 gap-3 bg-white rounded shadow-md h-14"><img className="w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqDwdp9Qvsf4FK_hEwhruVRAW5qLRvaWtow&usqp=CAU" alt=""/>Facebook</button>
        <button className="flex items-center justify-center w-2/4 gap-3 bg-white rounded shadow-md h-14"><img className="w-8" src="https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK" alt="google logo"/>Google</button>
      
      </div>
      
    </header>
      </section>
    </>
  )
}

export default Login
import * as Ic from 'react-feather';
import Logo from '../assets/img/Logo.png';

const LupaPassword = ()=>{
  return(
    <>
  
    <section className="flex ">
      <div className="h-screen w-1/5 bg-cover bg-[url('../assets/img/lupaPassword.png')] hidden md:block">
          
      </div>
  
      <div className="flex flex-col items-center justify-center flex-1 gap-4">
        <div className="w-4/5">  
          <img src={Logo} alt="" className="logo"/>
        </div>
  
        <div className="flex flex-col w-4/5 gap-4">
          <h1 className="text-xl text-[#8E6447] font-semibold">Fill out the form correctly</h1>
          <p className="font-normal text-gray-600">We will send new password to your email</p>
        </div>
        
        <form className="flex flex-col w-4/5 gap-4">
  
          <label className="flex flex-col" htmlFor="email">
            <div className="font-semibold">Email</div>
            <div className="flex items-center border border-slate-300">
              <Ic.Mail className="w-5 ml-4"></Ic.Mail>
              <input className="flex-1 px-3 rounded outline-none h-9" type="email" name="email" id="email" placeholder="Enter Your Email"/>
            </div>
          </label>
  
          <div>
            <button className="w-full bg-[#FF8906] h-10 mt-4 rounded" type="submit">Submit</button>
          </div>
  
          
        </form>
        
      </div>
    </section>

    </>
  )
}

export default LupaPassword
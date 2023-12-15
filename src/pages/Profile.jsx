import Navbar from "../component/Navbar"
import Footer from '../component/Footer';
// import * as Ic from 'react-feather';
// import { Link } from 'react-router-dom';
// import Item1 from '../assets/img/card1.png';
// import Item2 from '../assets/img/card2.png';
// import Item3 from '../assets/img/card3.png';
// import Item4 from '../assets/img/card4.jpeg';

const Profile = () => {
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

      <div className="flex flex-col items-center w-4/5 gap-4 p-6 border md:w-3/5 border-slate-300">
        <p className="text-2xl font-semibold">Ghaluh Wizard</p>
        <p>ghaluhwizz@gmail.com</p>
        <img className="rounded-full w-28 h-28" src="https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp" alt=""/>
        <button className="bg-[#FF8906] w-full rounded h-10">Upload New Photo</button>
        <p>Since 20 January 2022</p>
      </div>

    </div>
    
    <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-1 md:items-start">
      
      <form className="flex flex-col w-4/5 gap-4 p-6 border border-slate-300">

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="fullName">Full Name</label>
          <input className="px-5 border rounded h-9" type="text" name="fullName" id="fullName" placeholder="Ghaluh Wizard"/>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="email">Email</label>
          <input className="px-5 border rounded h-9" type="email" name="email" id="email" placeholder="ghaluhwizz@gmail.com"/>
        </div>

        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="phone">Phone</label>
          <input className="px-5 border rounded h-9" type="phone" name="phone" id="phone" placeholder="082116304338"/>
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
          <input className="px-5 border rounded h-9" type="password" name="address" id="address" placeholder="Griya Bandung Indah"/>
        </div>

        <div>
          <button className="w-full bg-[#FF8906] h-10 mt-4 rounded" type="submit">Register</button>
        </div>

        
      </form>
      
    </div>
    
      </section>

      <Footer/>

    </>
  )
}

export default Profile

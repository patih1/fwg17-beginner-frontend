import * as Ic from 'react-feather';
import { Link } from 'react-router-dom';
import BrownLogo from '../assets/icon/Frame.svg';

const Footer = () =>{
  return (
    <>

    <footer className="h-auto mt-20 py-4 md:px-28 px-3 bg-[#F8F8F8]">
      <div className="flex flex-col h-auto gap-20 md:my-20 md:flex-row">
        
        <div className="flex flex-col gap-10">
          <div className="flex items-center text-[#8E6447] gap-3">
            <img src={BrownLogo} alt=""/>
            <p className="font-[Sacramento]">Coffee Shop</p>
          </div>
          <p>Coffee Shop is Link store that sells some good<br className="hidden md:block"/>meals, and especially coffee. We provide<br className="hidden md:block"/>high quality beans</p>
          <p className="hidden md:block">©2020CoffeeStore</p>
        </div>
  
        <div className="flex flex-wrap gap-14">
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Product</p>
            <Link href="">Our Product</Link>
            <Link href="">Pricing</Link>
            <Link href="">Locations</Link>
            <Link href="">Countries</Link>
            <Link href="">Blog</Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Engage</p>
            <Link href="">Partner</Link>
            <Link href="">FAQ</Link>
            <Link href="">About Us</Link>
            <Link href="">Privacy Policy</Link>
            <Link href="">Terms of Service</Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Social Media</p>
            <div className="flex gap-4">
              <button className="w-9 h-9 bg-[#FF8906] rounded-full flex items-center justify-center"><Ic.Facebook></Ic.Facebook></button>
              <button className="w-9 h-9 bg-[#FF8906] rounded-full flex items-center justify-center"><Ic.Twitter></Ic.Twitter></button>
              <button className="w-9 h-9 bg-[#FF8906] rounded-full flex items-center justify-center"><Ic.Instagram></Ic.Instagram></button>
            </div>
          </div>
        </div>
        <p className="md:hidden">©2020CoffeeStore</p>
  
      </div>
    </footer>

    </>
  )
}

export default Footer
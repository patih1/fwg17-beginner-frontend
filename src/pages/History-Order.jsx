import * as Ic from 'react-feather';
import { Link } from 'react-router-dom';
// import Item1 from '../assets/img/card1.png';
// import Item2 from '../assets/img/card2.png';
// import Item3 from '../assets/img/card3.png';
// import Item4 from '../assets/img/card4.jpeg';

const HistoryOrder = () => {
  return(
    <>

    <header className="flex justify-center w-full my-8">
      <div className="flex items-center w-4/5 gap-10">
        <h2 className="text-5xl">History Order</h2>
        <div className="flex items-center justify-center w-8 h-8 bg-slate-100">2</div>
      </div>
    </header>
  
    <section className="flex flex-col gap-3 md:flex-row">
      <div className="flex flex-1 md:justify-end">
        <div className="flex flex-col gap-5 md:w-4/5">
    
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5 p-2 bg-slate-100">
              <div className="p-2 bg-white">
                <p>On Progress</p>
              </div>
              <div>
                <p>Sending Goods</p>
              </div>
              <div>
                <p>Finish Order</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-slate-100">
              <div className="flex items-center">
                <Ic.Calendar></Ic.Calendar>
                <p>January 2023</p>
                <Ic.ChevronDown></Ic.ChevronDown>
              </div>
            </div>
          </div>
  
          <div className="flex flex-col gap-3">
            
            <div className="flex justify-between w-full p-3 md:h-28 bg-slate-100">
              
              <div className="hidden md:block bg-[url(../assets/img/card1.png)] h-full w-2/12 bg-cover bg-center"></div>
  
              <div className="flex flex-wrap justify-between w-10/12 gap-3 md:gap-0">
                <div className="flex flex-col gap-1 py-2 ml-3">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>No.Order</p>
                  <p className="font-semibold">#12354-09893</p>
                  <Link to="/detail-order" className="text-[#FF8906] underline text-sm">Views Order Detail</Link>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Calendar className="h-4"></Ic.Calendar>Date</p>
                  <p className="font-semibold">23 January 2023</p>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>Total</p>
                  <p className="font-semibold">Idr 40.000</p>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>Status</p>
                  <div className="text-xs text-[#FF8906] bg-[rgba(255,137,6,0.20)] flex items-center justify-center rounded-full w-20 h-6">On Progress</div>
                </div>
              </div>
              
  
            </div>
            
            <div className="flex justify-between w-full p-3 md:h-28 bg-slate-100">
              
              <div className="hidden md:block bg-[url(../assets/img/card1.png)] h-full w-2/12 bg-cover bg-center"></div>
  
              <div className="flex flex-wrap justify-between w-10/12 gap-3 md:gap-0">
                <div className="flex flex-col gap-1 py-2 ml-3">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>No.Order</p>
                  <p className="font-semibold">#12354-09893</p>
                  <Link to="/detail-order" className="text-[#FF8906] underline text-sm">Views Order Detail</Link>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Calendar className="h-4"></Ic.Calendar>Date</p>
                  <p className="font-semibold">23 January 2023</p>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>Total</p>
                  <p className="font-semibold">Idr 40.000</p>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>Status</p>
                  <div className="text-xs text-[#FF8906] bg-[rgba(255,137,6,0.20)] flex items-center justify-center rounded-full w-20 h-6">On Progress</div>
                </div>
              </div>
              
  
            </div>
            
            <div className="flex justify-between w-full p-3 md:h-28 bg-slate-100">
              
              <div className="hidden md:block bg-[url(../assets/img/card1.png)] h-full w-2/12 bg-cover bg-center"></div>
  
              <div className="flex flex-wrap justify-between w-10/12 gap-3 md:gap-0">
                <div className="flex flex-col gap-1 py-2 ml-3">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>No.Order</p>
                  <p className="font-semibold">#12354-09893</p>
                  <Link to="/detail-order" className="text-[#FF8906] underline text-sm">Views Order Detail</Link>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Calendar className="h-4"></Ic.Calendar>Date</p>
                  <p className="font-semibold">23 January 2023</p>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>Total</p>
                  <p className="font-semibold">Idr 40.000</p>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>Status</p>
                  <div className="text-xs text-[#FF8906] bg-[rgba(255,137,6,0.20)] flex items-center justify-center rounded-full w-20 h-6">On Progress</div>
                </div>
              </div>
              
  
            </div>
            
            <div className="flex justify-between w-full p-3 md:h-28 bg-slate-100">
              
              <div className="hidden md:block bg-[url(../assets/img/card1.png)] h-full w-2/12 bg-cover bg-center"></div>
  
              <div className="flex flex-wrap justify-between w-10/12 gap-3 md:gap-0">
                <div className="flex flex-col gap-1 py-2 ml-3">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>No.Order</p>
                  <p className="font-semibold">#12354-09893</p>
                  <Link to="/detail-order" className="text-[#FF8906] underline text-sm">Views Order Detail</Link>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Calendar className="h-4"></Ic.Calendar>Date</p>
                  <p className="font-semibold">23 January 2023</p>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>Total</p>
                  <p className="font-semibold">Idr 40.000</p>
                </div>
                
                <div className="flex flex-col gap-1 py-2">
                  <p className="flex items-center gap-1"><Ic.Coffee className="h-4"></Ic.Coffee>Status</p>
                  <div className="text-xs text-[#FF8906] bg-[rgba(255,137,6,0.20)] flex items-center justify-center rounded-full w-20 h-6">On Progress</div>
                </div>
              </div>
              
  
            </div>
          
          </div>
  
          <div className="flex justify-center gap-3">
            <button className="w-10 h-10 bg-[#FF8906] rounded-full">1</button>
            <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">2</button>
            <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">3</button>
            <button className="w-10 h-10 bg-[#F8F8F8] rounded-full">4</button>
            <button className="w-10 h-10 bg-[#FF8906] rounded-full flex justify-center items-center"><Ic.ArrowRight className="text-white"></Ic.ArrowRight></button>
          </div>
  
        </div>
  
  
      </div>
      
      <div className="flex-1">
  
        <div className="flex flex-col gap-4 p-4 shadow-md md:w-3/5">
          <div className="flex items-center justify-center w-12 h-12 bg-black rounded-2xl">
            <Ic.MessageSquare className="text-white"></Ic.MessageSquare>
          </div>
          <p className="font-semibold">Send Us Message</p>
          <p>if your unable to find answer or find your product quickly, please describe your problem and tell us. we will give you solution.</p>
          <button className="bg-[#FF8906] h-10 rounded">Send Message</button>
        </div>
  
      </div>
    </section>

    </>
  )
}

export default HistoryOrder

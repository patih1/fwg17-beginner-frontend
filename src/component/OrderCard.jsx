import { Link } from "react-router-dom"
import * as Ic from "react-feather"

const OrderCard = () =>{
  return(
    <>
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
    </>
  )
}

export default OrderCard
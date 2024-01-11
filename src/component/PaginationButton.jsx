const PaginationButton = ({num, limit}) => {
  let x = num
  if(x > 1){
    return <>
      <button type='button' onClick={x--} className="w-10 h-10 bg-[#FF8906] rounded-full">{x-1}</button>
      <button type='button' onClick={x} className="w-10 h-10 bg-[#FF8906] rounded-full">{x}</button>
      <button type='button' onClick={x++} className="w-10 h-10 bg-[#FF8906] rounded-full">{x+1}</button>
    </>
  }else if(x == limit - 1){
    return <>
      <button type='button' onClick={x--} className="w-10 h-10 bg-[#FF8906] rounded-full">{x-1}</button>
      <button type='button' onClick={x} className="w-10 h-10 bg-[#FF8906] rounded-full">{x}</button>
      <button type='button' onClick={x++} className="w-10 h-10 bg-[#FF8906] rounded-full">{x+1}</button>
    </>
  }else if(x == limit){
    return <>
      <button type='button' onClick={x = x - 2} className="w-10 h-10 bg-[#FF8906] rounded-full">{x - 2}</button>
      <button type='button' onClick={x--} className="w-10 h-10 bg-[#FF8906] rounded-full">{x - 1}</button>
      <button type='button' onClick={x} className="w-10 h-10 bg-[#FF8906] rounded-full">{x}</button>
    </>
  }else if(x == 1){
    return <>
      <button type='button' onClick={x} className="w-10 h-10 bg-[#FF8906] rounded-full">{x}</button>
      <button type='button' onClick={x++} className="w-10 h-10 bg-[#FF8906] rounded-full">{x + 1}</button>
      <button type='button' onClick={x = x + 2} className="w-10 h-10 bg-[#FF8906] rounded-full">{x + 2}</button>
    </>
  }
}

export default PaginationButton
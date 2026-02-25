import React, { useEffect, useState } from 'react'

const Usehoks = () => {

    const[num, setNum] = useState(0)

    useEffect(function(){
        console.log("use effect is running.....")
    },[])

  return (
    <>
    <div className=''>
        <div className='text-4xl'>{num}</div>
        <button onClick={()=>{setNum(num+1)}} className='p-[20px_30px] rounded-4xl bg-amber-600'>click</button>
    </div>
    </>
  )
}

export default Usehoks
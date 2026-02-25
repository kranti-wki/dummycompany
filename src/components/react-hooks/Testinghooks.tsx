import React, { useState } from 'react'

const Testinghooks:React.FC = () => {

  const[title, setTitle] = useState("")
   const[password, setPassword] = useState("")
   const [data, setData] = useState<{ title: string, password: string } | null>(null);
   
  const submithandler = (e:any) =>{
    e.preventDefault()
    console.log("form submitted by",{title,password})
    setData({title,password});
    setTitle("")
    setPassword("")
  }
   
  return (
    <>
    <div className='form-box w-full min-h-screen bg-black flex flex-col items-center justify-center gap-10'>
      <form onSubmit={(e) => {submithandler(e)}} className='flex flex-col items-center justify-center gap-10'>
        <input onChange={(e)=>{setTitle(e.target.value)}} className='border-2 w-[500px] border-white text-white placeholder:text-white' type="text" placeholder='enter your name' value={title} />
        <input onChange={(e)=>{setPassword(e.target.value)}} className='border-2 w-[500px] border-white text-white placeholder:text-white' type="text" placeholder='enter your password' value={password} />
        <button className='text-white w-[100px]  bg-pink-900 p-[10px_20px]'>submit</button>
        </form>

        <div className='border-8 border-red-500 p-10'>
          <h1 className='text-white text-4xl'>this is your name: <span className='text-yellow-200 font-bold text-5xl'>{data?.title}</span></h1>
          <h1 className='text-white text-4xl'>this is your password: <span className='text-red-200 font-bold text-5xl'>{data?.password}</span></h1>
        </div>
    </div>
    </>
  )
}

export default Testinghooks
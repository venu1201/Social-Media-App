import React from 'react'
import {logo} from '../../assets'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const array=["Home","Explore","Chat","Profile","Settings"];
  const navigrate =useNavigate();
  return (
    <div className='flex bg-navbar px-5 justify-between h-[70px] w-full'> 
      <div onClick={()=>navigrate('/')} className='flex gap-4 justify-center items-center'>
          <img className='h-full ' src={logo} alt="" />
          <div className='flex font-bold text-[20px] justify-center items-center'>
            Social-Media-App
          </div>
      </div>
      <div className='flex justify-center items-center'>
        {array.map((item,index)=>(
          <li key={index} className='list-none mx-5'>
            
              {item}
             
          </li>
        ))}
      </div>
      <button onClick={()=>navigrate('/Auth')} >Login</button>
    </div>
  )
}

export default Navbar
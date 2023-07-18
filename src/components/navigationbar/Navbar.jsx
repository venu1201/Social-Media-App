import React from 'react'
import { avatar, logo } from '../../assets'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const array = ["Home", "Explore", "Chat","Notifications","Post", "Profile", "Settings"];
  
  const navigrate = useNavigate();
  return (
    <div className='flex flex-col bg-navbar px-5 gap-14 h-screen w-[25%]'>
      <div onClick={() => navigrate('/')} className='flex gap-4 w-full h-[70px] justify-center items-center'>
        <img className='h-full ' src={logo} alt="" />
        <div className='flex font-bold text-[20px] justify-center items-center'>
          Social-Media-App
        </div>
      </div>
      <div className='flex w-full justify-center items-center gap-5'>
        <div className='flex w-full gap-10 flex-col '>
          {array.map((item, index) => (
            <li key={index} className='list-none flex items-center  mx-5'>
                <span className='cursor-pointer'>{item}</span>
              

            </li>
          ))}

        </div>
        
        
      </div>


    </div>
  )
}

export default Navbar
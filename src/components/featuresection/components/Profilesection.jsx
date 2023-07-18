import React from 'react'
import { avatar } from '../../../assets/index'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Profilesection = () => {
    const data = JSON.parse(localStorage.getItem('profile'));
   const dispatch=useDispatch();
  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem('profile');
    dispatch({type:'CLEAR_GOOGLE'})
    navigate('/Auth');
  }
  return (
    <div className='text-white'>
      <div className='h-[70px] mt-4 w-full flex '>
        <div className='h-full  w-full flex gap-4 items-center'>
          <img src={avatar} className='h-[60px] cursor-pointer w-[62px] rounded-full object-fill' alt="" />
          <div className='flex cursor-pointer flex-col gap-1'>
            <div className=''>

              {data?.result?.username}
            </div>
            <div>
              {data?.result?.email}
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button onClick={handlelogout} className='bg-blue-700 rounded-lg h-[50px] w-[90px]'>
            Logout
          </button>
        </div>


      </div>
     
    </div>
  )
}

export default Profilesection
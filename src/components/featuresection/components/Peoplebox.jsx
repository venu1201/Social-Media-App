import React, { useState } from 'react'
import { avatar } from '../../../assets'
const Peoplebox = ({data}) => {
    const [clr, setclr] = useState('blue')
    const handleclick=()=>{
        if(clr==='gray')
            setclr('blue');
        else
            setclr('gray');

    }
  return (
    <div className='flex  w-full h-[60px] justify-around items-center '>
        <div className='flex gap-5 h-full w-full items-center '>
            <div className='flex  w-[50px] h-[50px]'>
                <img className='object-fill h-[50px] w-[50px] rounded-full' src={avatar} alt="" />
            </div>
            <div className=' flex flex-col gap-1 justify-center'>
                <h4>{data.username}</h4>
                <div>
                    {data.email}
                </div>            
            </div>
        </div>
        <div className='flex justify-center items-center'>
          <button onClick={handleclick} className={`${clr==='blue'?"bg-blue-700":"bg-blue-400"} bg-blue-700 rounded-lg h-[50px] w-[90px]`}>
                {clr==='blue'? "Add":"Pending"}
          </button>
        </div>
    </div>
  )
}

export default Peoplebox
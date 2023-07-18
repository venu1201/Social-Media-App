import React from 'react'
import { useSelector } from 'react-redux'
import Peoplebox from './Peoplebox';
const Suggestions = () => {
  const data = useSelector((state) => state.authReducer.users);
  const data2 = data?.result?.slice(0, 3);

  

  return (
    <div className='flex mt-4 flex-col gap-5'>
      <div>
        Suggestions :
      </div>
      <div className='flex flex-col gap-3'>
        {data2?.map((item,index) => (
          <div key={index}>
            <Peoplebox data={item}/>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Suggestions;
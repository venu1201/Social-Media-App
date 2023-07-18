import React from 'react'
import { getuser } from '../../actions/Auth'
import { useDispatch, useSelector } from 'react-redux';
const Posts = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  
  
 
  const data = useSelector((state) => state.authReducer);
  // dispath(getuser('/user/users',user.result.username));
  return (
    <div className='w-[70%] border-r-2 border-dimWhite h-screen overflow-y-scroll flex flex-col '>
        <div className=' bg-white  mt-4 w-[400px] min-h-[30vh]'>

        </div>
        <div className=' bg-white  mt-4 w-[400px] min-h-[30vh]'>

        </div>
        <div className=' bg-white  mt-4 w-[400px] min-h-[30vh]'>

        </div>
        <div className=' bg-white  mt-4 w-[400px] min-h-[30vh]'>

        </div>
        <div className=' bg-white  mt-4 w-[400px] min-h-[30vh]'>

        </div>
        <div className=' bg-white  mt-4 w-[400px] min-h-[30vh]'>

        </div>
        
    </div>
  )
}

export default Posts
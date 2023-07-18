import React, { useEffect, useState } from 'react'
import Posts from '../../components/postssection/Posts'
import Features from '../../components/featuresection/Features'
import Navbar from '../../components/navigationbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getuser } from '../../actions/Auth'


const Home = () => {
  
  const data=JSON.parse(localStorage.getItem('profile'));
 
  const navigate=useNavigate();
  useEffect(() => {
    if(!data)
    {
      navigate('/Auth');
    }
  }, [data])
  
  
  const dispatch=useDispatch();
  dispatch(getuser(data?.result));
  

  return (
    <div className='h-screen flex w-full'>
      <Navbar />
      <div className='w-full min-h-screen px-5 flex'>
        <Posts />
        <Features />
      </div>
    </div>
  )
}

export default Home
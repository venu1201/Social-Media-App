import React from 'react'
import Posts from '../../components/postssection/Posts'
import Features from '../../components/featuresection/Features'
import Navbar from '../../components/navigationbar/Navbar'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <>
    <Navbar />
    <div className='w-full mt-2 px-5 h-full flex'>
        <Posts/>
        <Features/>
        hey
    </div>
    <Footer />
    </>
  )
}

export default Home
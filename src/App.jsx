import React from 'react'
import Navbar from './components/navigationbar/Navbar'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Authpage from './Pages/Authpage/Authpage'



const App = () => {
  return (
    <BrowserRouter>
      <div className='text-white fixed h-[100vh] w-full '>
    
       
         
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Auth' element={<Authpage/>}/>
            </Routes>
      
        
      </div>

    </BrowserRouter>

  )
}

export default App
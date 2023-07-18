import React from 'react'
import Suggestions from './components/Suggestions.jsx'
import Profilesection from './components/Profilesection.jsx'
const Features = () => {
  return (
    <div className='w-[30%] gap-4 p-2 h-[100vh] flex flex-col'>
      <Profilesection/>
      <Suggestions/>
    </div>
  )
}

export default Features
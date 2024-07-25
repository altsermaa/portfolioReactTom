import React from 'react'
import Sec2con from './Sec2con'

function Section2A({toggleDarkMode}) {
  return (
      <div toggleDarkMode={toggleDarkMode} className="dark:bg-[#111827] dark:text-white bg-[#f9fafb] text-black w-screen h-auto">
        <div className='lg:w-[1280px] w-[343px] h-auto lg:py-24 py-16 m-auto'> 
          <Sec2con />
        </div>
      </div>
 )
}

export default Section2A

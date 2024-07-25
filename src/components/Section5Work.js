import React from 'react'
import Titles from './Titles'
import WorkDetails from './WorkDetails'

function Section5Work({toggleDarkMode}) {
  return (
    <div toggleDarkMode={toggleDarkMode} className="dark:bg-[#030712] dark:text-white bg-[#fff] text-black w-screen h-auto">
        <div className='lg:py-24 lg:px-20 lg:w-[1280px] w-[343px] m-auto px-4 py-16'> 
          <div>
            <Titles sections="Work"/>
            <p className='text-center mt-4 mb-12'>Some of the noteworthy projects I have built:</p>
          </div>
          <WorkDetails toggleDarkMode={toggleDarkMode}/>
        
        </div>  
    </div>
  )
}

export default Section5Work

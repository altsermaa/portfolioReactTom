import React from 'react'
import Titles from './Titles'
import Experience from './Experience'

function Section4Experience({toggleDarkMode}) {
  return (
    <div className=''>
      <div toggleDarkMode={toggleDarkMode} className="dark:bg-[#111827] dark:text-white bg-[#f9fafb] text-blackw-screen h-auto">
        <div className='py-24 px-20'> 
          <Titles sections="Experiences"/>
          <p toggleDarkMode={toggleDarkMode} className='text-center mt-4 mb-12 dark:text-white text-black'>Here is a quick summary of my most recent experiences:</p>
          <Experience />

        </div>
      </div>
    </div>
  )
}

export default Section4Experience

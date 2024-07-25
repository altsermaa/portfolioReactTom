import React from 'react'
import Navbar from './Navbar'
import HighlightHi from './HighlightHi'

function Section1Hi({ toggleDarkMode, isDark }) {
  return (
    <div className="dark:bg-[#030712] dark:text-white bg-white text-black w-screen h-auto">
      <Navbar toggleDarkMode={toggleDarkMode} isDark={isDark} />
      <HighlightHi />
    </div>
  )
}

export default Section1Hi

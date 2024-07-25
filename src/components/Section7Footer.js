import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Section7Footer({toggleDarkMode}) {
  return (
    <div toggleDarkMode={toggleDarkMode} className="dark:bg-[#111827] dark:text-white text-black bg-[#f9fafb] w-screen h-auto">
        <div className='py-6 px-20 flex justify-center items-center gap-1'> 
        <FaRegCopyright />
        <p>2024</p>
        <p>| Greetings with ❤️️ from Ulaanbaatar</p>
        
        </div>
      </div>
  )
}

export default Section7Footer

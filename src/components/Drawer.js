import React from 'react'
import { BsMoonStars } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import Button from './Button';

function Drawer({isOpen, closeDrawer, toggleDarkMode, isDark}) {
  return (
    <div 
    className={`fixed top-0 left-full ${
    isOpen ? "translate-x-[-400px]" : "translate-x-0"
    } h-screen w-[300px] p-6 bg-[#fff] dark:bg-[#030712] z-50 duration-300`}>

        <div className='flex justify-between py-4'>
            <h1>TOM</h1>
            <button onClick={closeDrawer}>X</button>
        </div>
        <div className='py-4 flex flex-col gap-4 border-y-2 border-[#f3f4f6]'>
            <h3>About</h3>
            <h3>Testimonials</h3>
            <h3>Contact</h3>
            <h3>Work</h3>
        </div>
        <div className='flex justify-between py-4'>
            <span>Switch theme</span>
            <button onClick={toggleDarkMode}>
                        {isDark ? <BsMoonStars/> : <IoSunnyOutline/>}
            </button>
        </div>
        <div className="flex justify-center">
            <Button />
        </div>
        
     

    </div>  
  )
}

export default Drawer

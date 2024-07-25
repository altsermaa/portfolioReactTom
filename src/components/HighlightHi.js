import React from 'react'
import Details from './Details';
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Icons from './Icons';


function HighlightHi() {
  return (
    <div className='lg:py-24 lg:px-20 px-4 py-16' >
      <div className='mx-auto lg:w-[1280px] lg:h-auto lg:flex lg:flex-row lg:items-center w-[343px] flex flex-col-reverse gap-12'>
        <div className='lg:flex-1'>
          <h1 className='lg:text-6xl text-3xl'>Hi, I’m Tom 👋</h1>
          <p className='mt-2 mb-12'>I specialize in full stack development, particularly with React.js and Node.js.
            My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.</p>
          <Details className="mt-12" icon={<IoLocationOutline />} text="Ulaanbaatar, Mongolia" />
          <Details icon={<GoDotFill style={{ color: "green" }} />} text="Available for new projects" />
          <Icons style={{fontSize:'32px'}}/>
        </div>
        <div className='lg:flex-1'>
          <div className='lg:flex lg:justify-end lg:w-full lg:h-auto'>
            <img src="/Profilepic.png" alt="Profile" className="object-cover lg:w-72 lg:h-80 lg:left-0 lg:shadow-[12px_12px_2px_1px_#374151] lg:border-none border-r-[10px] border-r-[#374151] border-b-[10px] border-b-[#374151] border-l-[10px]  border-l-[#374151]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HighlightHi

import React from 'react'
import LogoUpwork from '@/assets/LogoUpwork';
import Details from './Details';
import { GoDotFill } from "react-icons/go";


function Experience({toggleDarkMode}) {
  return (
    <div className='flex flex-col m-auto p-8 gap-12 w-fit'>
        <div toggleDarkMode={toggleDarkMode} className='flex m-auto p-8 dark:bg-[#1f2937] dark:text-white bg-[#fff] text-black rounded-lg gap-12 w-fit lg:flex-row flex-col'>
            <div className='flex-1'>
                <LogoUpwork />
            </div>
            <div className='flex-2 flex flex-col'>
                <h4 className='font-bold mb-4'>Sr. Frontend Developer</h4>
                <ul>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></li>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Ut pretium arcu et massa semper, id fringilla leo semper." /></li>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Sed quis justo ac magna." /></li>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></li>
                </ul>
            </div>
            <div className='flex-2'>
                <h4>Nov 2021 - Present</h4>
            </div>
        </div>
        <div toggleDarkMode={toggleDarkMode} className='flex m-auto p-8 dark:bg-[#1f2937] dark:text-white bg-[#fff] text-black rounded-lg gap-12 w-fit lg:flex-row flex-col'>
            <div className='flex-1'>
                <LogoUpwork />
            </div>
            <div className='flex-2 flex flex-col'>
                <h4 className='font-bold mb-4'>Sr. Frontend Developer</h4>
                <ul>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></li>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Ut pretium arcu et massa semper, id fringilla leo semper." /></li>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Sed quis justo ac magna." /></li>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></li>
                </ul>
            </div>
            <div className='flex-2'>
                <h4>Nov 2021 - Present</h4>
            </div>
        </div>
        <div toggleDarkMode={toggleDarkMode} className='flex m-auto p-8 dark:bg-[#1f2937] dark:text-white bg-[#fff] text-black rounded-lg gap-12 w-fit lg:flex-row flex-col'>
            <div className='flex-1'>
                <LogoUpwork />
            </div>
            <div className='flex-2 flex flex-col'>
                <h4 className='font-bold mb-4'>Sr. Frontend Developer</h4>
                <ul>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></li>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Ut pretium arcu et massa semper, id fringilla leo semper." /></li>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Sed quis justo ac magna." /></li>
                    <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." /></li>
                </ul>
            </div>
            <div className='flex-2'>
                <h4>Nov 2021 - Present</h4>
            </div>
        </div>
    </div>
  )
}

export default Experience

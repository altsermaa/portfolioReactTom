import React from 'react'
import Titles from './Titles'
import {TechIcon} from '../assets/TechIcon'

export const Skills = ({toggleDarkMode}) => {
  const arr = new Array(16).fill(0);
  return (
    <div toggleDarkMode={toggleDarkMode} className="dark:bg-[#030712] dark:text-white bg-[#fff] text-black w-screen h-auto">
        <div className='py-24 px-20'> 
          <div>
            <Titles sections="Skills"/>
            <p className='text-center mt-4 mb-12'>The skills, tools and technologies I am really good at:</p>
          </div>
          <div className='flex flex-wrap justify-center m-auto lg:w-[1216px] gap-16'>
            {arr.map((item) => (
              <TechIcon />
            ))}
          </div>
        </div>  
    </div>
  );
};



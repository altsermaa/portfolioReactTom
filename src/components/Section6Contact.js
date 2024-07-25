import React from 'react'
import Titles from './Titles'
import Contact from './Contact'
import LogoContact from '@/assets/LogoContact'
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Icons from './Icons';

function Section6Contact({toggleDarkMode}) {
  return (
    <div toggleDarkMode={toggleDarkMode} className="dark:bg-[#030712] dark:text-white bg-[#fff] text-black w-screen h-auto">
        <div className='py-24 px-20 '> 
          <div>
            <Titles sections="Get in touch"/>
            <p className='text-center mt-4 mb-12'>What’s next? Feel free to reach out to me if you're looking for <br></br>a developer, have a query, or simply want to connect.</p>
            <Contact icon={<MdOutlineEmail style={{fontSize: '32px'}}/>} text={<span style={{fontSize: '36px'}}>tom@pinecone.mn</span>} picture={<LogoContact />}/>
            <Contact icon={<FiPhoneCall style={{fontSize: '32px'}}/>} text={<span style={{fontSize: '36px' }}>+976 88112233</span>} picture={<LogoContact />}/>
            <p className='text-center mt-4 mb-12'>You may also find me on these platforms!</p>
            <div className='flex justify-center items-center' >
              <Icons /> 
            </div>
        </div> 
        </div>  
    </div>
  )
}

export default Section6Contact

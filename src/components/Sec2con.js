import React from 'react'
import Titles from './Titles'
import List from './List'

function Sec2con() {
  return (
    <div className='flex flex-col gap-12'>    
      <Titles sections="About me"/>
      <div className='flex lg:flex-row flex-col gap-12 items-center'>
        <div className='flex-1'>
          <img src='/Profilepic2.png' className='lg:w-[400px] lg:h-[480px] w-[280px] h-[360px] shadow-[-15px_19px_0px_0px_rgba(55,65,81,1)]'/>
        </div>
        <div className='flex-1'>
          <h2 className='mb-6 text-3xl'>Curious about me? Here you have it:</h2>
          <p className='mb-4'>I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.</p>
          <p className='mb-4'>Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</p>
          <p className='mb-4'>Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</p>
          <p className='mb-4'>Finally, some quick bits about me.</p>
          <List />
          <p className='mt-4'>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        </div>
      </div>
    
    </div>

  )
}

export default Sec2con

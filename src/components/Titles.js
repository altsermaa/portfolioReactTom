import React from 'react'

function Titles({sections}) {
  return (
      <div className='bg-[#374151] text-white py-2.5 px-6 rounded-lg border-none m-auto w-fit'>
        <p>{sections}</p>
      </div>
  )
}

export default Titles

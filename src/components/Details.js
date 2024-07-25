import React from 'react'

function Details({icon, text}) {
  return (
    <div className='flex gap-2 items-center'>
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default Details

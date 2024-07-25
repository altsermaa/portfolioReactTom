import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

function Details({icon, text, picture}) {
  return (
    <div className='flex gap-2 items-center justify-center'>
        {icon}
        <p>{text}</p>
        {picture}
    </div>
  )
}

export default Details
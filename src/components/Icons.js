import React from 'react'
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";

function Icons({icon}) {

    const icons = [
        <FiGithub key="github"/>,
        <CiTwitter key="twitter"/>,
        <FaFigma key="figma"/>,
    ] 

  return (
    <div className='flex gap-1.5 size-6 mt-12 text-3xl'>
      {icons.map((icon, index) => (
        <div key={index}>{icon}</div>
      ))}
    </div>
  )
}

export default Icons

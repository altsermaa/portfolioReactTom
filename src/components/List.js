import React from 'react'
import Details from './Details';
import { GoDotFill } from "react-icons/go";

function List({text}) {
  return (
    <ul>
        <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="B.E. in Computer Engineering" /></li>
        <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Full time freelancer" /></li>
        <li><Details icon={<GoDotFill style={{ color: "white" }} />} text="Avid learner" /></li>
    </ul>
      
  )
}

export default List

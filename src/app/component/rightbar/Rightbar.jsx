import React from 'react'
import Hero from '../Hero'
import Project from '../Project'
import { Technology } from '../Technology'
import "./rightbar.css"
const Rightbar = () => {
  return (
    <div className='height_right  px-4 py-2 '>
<Hero/>
<Project/>
<Technology/>
    </div>
  )
}

export default Rightbar
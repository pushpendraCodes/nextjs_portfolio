import React from 'react'
import Hero from '../Hero'
import Project from '../Project'
import { Technology } from '../Technology'
import "./rightbar.css"
import WorkEnquiry from '../WorkEnquiry'
import About from '../About'
const Rightbar = () => {
  return (
    <div className='height_right  px-4 py-2 '>
<Hero/>
<About/>
<Project/>
<Technology/>
<WorkEnquiry/>
    </div>
  )
}

export default Rightbar
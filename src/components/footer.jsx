import React from 'react'
import { NAVLINKS } from '../data'

const footer = () => {
  return (
    <div className='bg-[#000080] flex flex-col items-center justify-center'>
      <div className="flex flex-col md:flex-row gap-[1rem] items-center">
        {NAVLINKS.map((link, i) => (
          <a key={i} href="" className="text-[#FFFFFF] font-medium ">{link.name}</a>
        ))}
      </div>
      <span className="">Copyright Taiwo Akindele</span>
    </div>
  )
}

export default footer
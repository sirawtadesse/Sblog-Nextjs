import React from 'react'
import Heading from './Heading'
import {RiLightbulbFlashLine} from 'react-icons/ri'

const  WhatIDo = () => {
  return (
   <section clasName='container mx-auto py-10 px-4'>
   <div className="ml-10 mr-10">
   <Heading title='What I Do'  />

<div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>

  <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>

      <RiLightbulbFlashLine className='text-[28px]' />

      <h2 className='font-medium text-[20px]'>Frontend Development</h2>

      <p>Frontend development is a dynamic field that constantly evolves with new technologies and best practices. It requires a combination of design skills, programming knowledge, and attention to detail to create intuitive 
          and visually appealing user interfaces.</p>


  </div>

 <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>

      <RiLightbulbFlashLine className='text-[28px]' />

      <h2 className='font-medium text-[20px]'>Backend Development</h2>

      <p>A backend developer is a type of software developer who specializes in designing, building, and 
        maintaining the server-side components of web applications, mobile applications, or other software systems.
         </p>


  </div>


  <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>

      <RiLightbulbFlashLine className='text-[28px]' />

      <h2 className='font-medium text-[20px]'>Fullstack Development</h2>

      <p>A full-stack developer is a professional who has the skills and expertise to work on both the 
        frontend and backend components of web applications or software systems.</p>


  </div>



</div>

   </div>
   </section>

  )
}

export default WhatIDo
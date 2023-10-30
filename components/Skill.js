import React from 'react'
import Heading from './Heading'

const Skill = () => {
  return (
    <section clasName='container mx-auto py-10 px-4'>
   <div className="ml-10 mr-10">

   <Heading title='Skills'  />

   <p className='text-blue-600 -mt-10 mb-10'>I use content management systems (CMS) to make content changes easier
    for other developers or end-users who may lack technical skills.</p>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
                <p>React Js</p>
                     <div className='relative bg-gray-400 h-[2px] mt-2'>
                        <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'>

                        </div>
                     </div>
           </div>

           <div>
                <p>Express Js</p>
                     <div className='relative bg-gray-400 h-[2px] mt-2'>
                        <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'>
                            
                        </div>
                     </div>
           </div>

           <div>
                <p>Next Js</p>
                     <div className='relative bg-gray-400 h-[2px] mt-2'>
                        <div className='bg-[#ff4D41] absolute h-[4px] w-[80%]'>
                            
                        </div>
                     </div>
           </div>

           <div>
                <p>Django</p>
                     <div className='relative bg-gray-400 h-[2px] mt-2'>
                        <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'>
                            
                        </div>
                     </div>
           </div>

           <div>
                <p>Node Js</p>
                     <div className='relative bg-gray-400 h-[2px] mt-2'>
                        <div className='bg-[#ff4D41] absolute h-[4px] w-[70%]'>
                            
                        </div>
                     </div>
           </div>

           <div>
                <p>Laravel </p>
                     <div className='relative bg-gray-400 h-[2px] mt-2'>
                        <div className='bg-[#ff4D41] absolute h-[4px] w-[50%]'>
                            
                        </div>
                     </div>
           </div>
    </div>

   </div>
   </section>


  )
}

export default Skill
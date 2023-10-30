import React from 'react'
import Typewriter from 'typewriter-effect'
import Button from '../components/Button'

const Hero = () => {
  return (
    <div className='bg-[url("/img/b1.jpg")] h-screen  bg-cover bg-center bg-fixed flex items-center'>

      <div className='container mx-auto px-4'>\

      <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>

<div>

<h1 className='text-5xl text-black'>I am Siraw Tadesse</h1>

<h4 className='text-2xl mt-3 text-blue-500'>
      <Typewriter 
      options={{
          strings:[
            "Frontend Developer",
            "UI/UX Designer"
          ],

          changeDelay: 3,
          changeDeleteSpeed: 2,
          autoStart: true,
          loop: true,

      }}
      />
</h4>
</div>

  <div className='bg-[#ff4D41] h-[2px] w-[40px]'></div>
  <div>
       <p className='bg-gradient-to-r from-pink-400 to-yellow-300'>"A good web developer knows how to make things work, but a great web developer knows how to make things work beautifully."</p>
       
       <Button  />
  </div>

      </div>


      </div>

    </div>
  )
}

export default Hero
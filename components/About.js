import React from 'react'
import Heading from './Heading'
import {AiOutlineGift} from 'react-icons/ai'
import Link from 'next/link';


const About = () => {
  return (
   <section className='container mx-auto py-10 px-4' id="about">
<Heading title='About' />

<div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>

     <div>
          <img className='w-[400px]' src='/img/b.jpg' alt='' />
     </div>
     <div className='flex items-centejustify-between w-[300ppx]r'>
        <div className='flex flex-col gap-6'> 
        
        <div className='flex gap-4 items-center font-medium'>
            <AiOutlineGift className='text-[#ff4D41] text-[22px]' />
            A blog is an online platform or website where individuals or 
            organizations regularly publish written content in the form of articles or posts.
            </div>

            <div className='flex gap-4 items-center font-medium'>
            <AiOutlineGift className='text-[#ff4D41] text-[22px]' />
            Blogs cover a wide range of topics, including personal experiences, opinions, news, tutorials, guides, and more.
             They serve as a means of sharing information, expressing ideas, building communities, and engaging with readers.
            </div>

            <div className='flex gap-4 items-center font-medium'>
            <AiOutlineGift className='text-[#ff4D41] text-[22px]' />
            Whether you're an individual looking to share your thoughts or a business aiming to provide valuable information to your audience, 
            a blog can be an effective platform to communicate and connect with others in the online space.
            </div>

            <Link href="/blog.txt">
      <a className="bg-[#ff4D41] text-white py-2 px-4 rounded inline-block mt-10 font-medium border border-[#ff4D41] hover:bg-transparent hover:text-[#ff4D41] transition duration-200">
        Explore More
      </a>
    </Link>
     </div>
     </div>
</div>

   </section>
  )
}

export default About
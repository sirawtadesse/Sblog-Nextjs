import React from 'react'
import Link from 'next/link';


const Button = ({text, link}) => {
  return (
    <Link href="#blog">
      <a className="bg-[#ff4D41] text-white py-2 px-4 rounded inline-block mt-10 font-medium border border-[#ff4D41] hover:bg-transparent hover:text-[#ff4D41] transition duration-200">
        See More
      </a>
    </Link>

  )
}

export default Button
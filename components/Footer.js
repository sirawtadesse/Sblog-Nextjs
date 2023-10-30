import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-800 text-gray-200">
  <div className="container mx-auto flex flex-row justify-between">
    <div className="flex flex-col items-center justify-center">
      <img src="/img/logo.svg" alt="Logo" />
      <p className="mt-4">My Blog</p>
    </div>
    <ul className="flex flex-row justify-end">
    <li className="mr-4">
        <a href="/">Home </a>
      </li>
      <li className="mr-4">
        <a href="#about">About </a>
      </li>
      <li className="mr-4">
        <a href="#contact">Contact </a>
      </li>
      <li>
        <a href="#blog">Blog</a>
      </li>
    </ul>
  </div>
  <p className="text-center mt-8">&copy; {new Date().getFullYear()} Siraw tadesse. All rights reserved!</p>
</footer>


  )
}

export default Footer
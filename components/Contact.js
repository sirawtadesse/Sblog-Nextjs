import React from 'react';
import Heading from './Heading';

const Contact = () => {
  return (
    <section className='container mx-auto py-10 px-4' id="contact">
      <div className='ml-10 mr-10'>
        <Heading title='Contact Me' />
        <form className='flex flex-col gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <input
              type='text'
              placeholder='Name'
              className='inputstyle border border-gray-300 rounded-md p-2'
              required
            />
            <input
              type='email'
              placeholder='Email'
              className='inputstyle border border-gray-300 rounded-md p-2'
              required
            />
          </div>
          <input
            type='text'
            placeholder='Subject'
            className='inputstyle border border-gray-300 rounded-md p-2'
            required
          />
          <textarea
            rows='6'
            className='inputstyle border border-gray-300 rounded-md p-2'
            placeholder='Message'
            required
          ></textarea>

          <div>
            <button
              type='submit'
              className='btn bg-blue-500 text-white py-2 px-4 rounded-md'
            >
              Message Me
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
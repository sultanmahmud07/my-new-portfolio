import React from 'react';
import '../../Common/Common.css'
import SmallSpinner from '../SmallSpinner/SmallSpinner';

const Blog = () => {
  return (
    <div className='pt-16 h-screen flex items-center justify-center'>
      <div className='common-width'>
        <h1 className=' text-5xl font-bold text-center'>C<div className="w-7 h-7 border-2 inline-block border-dashed rounded-full animate-spin border-primary"></div>ming S<div className="w-7 h-7 border-2 inline-block border-dashed rounded-full animate-spin border-primary"></div><div className="w-7 h-7 border-2 inline-block border-dashed rounded-full animate-spin border-primary"></div>n..</h1>
        {/* <SmallSpinner></SmallSpinner> */}
      </div>
    </div>
  );
};

export default Blog;
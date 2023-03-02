import React from 'react';
import { Audio, Puff, Circles, BallTriangle } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className='w-full py-16 flex items-center justify-center'>
      ;<Audio
        height="100"
        width="100"
        radius="9"
        color="yellow"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;
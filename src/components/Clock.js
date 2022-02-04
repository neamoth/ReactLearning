import React from 'react';

export default function Clock(props) {
  return <div>
    <h1 className='heading'>
        <span className='text'>
            Time is: {new Date().toLocaleTimeString()}
        </span>
    </h1>
  </div>;
}


import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
setInterval(() => {

  const index = 0;
  const element = (
    <h1 className='heading' tabIndex={index}>
      <span className='time'>
        Hello {new Date().toLocaleTimeString()}
      </span>
      <img src="" alt="" />
    </h1>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}, 1000);


reportWebVitals();

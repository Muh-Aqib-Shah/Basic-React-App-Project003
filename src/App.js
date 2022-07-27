import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="App">
   Hello! my Name is <strong>{props.name}</strong>
   <br/>
   <p className='para'>By the time you are watching this App I've already learned React and moved onto learning some more libraries</p>
   <p className='para1'>All information you see on this page was created using Javascript,JSXElements</p>
    </div>
    
  )
  }

export default App;

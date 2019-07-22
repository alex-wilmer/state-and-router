import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    window.onmousemove = event => {
      document.body.style.backgroundColor = 
      `hsl(${event.clientX}, 60%, 60%)`
    }
  }, [])
  
  return ''
}

export default App;

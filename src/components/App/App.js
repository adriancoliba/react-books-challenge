import React, { useState, useEffect } from 'react';
import style from './App.css';
import BooksList from '../BooksList'; 
import Navigation from '../Navigation'

const App = (props) => {
  useEffect(() => {
    
  }, [])

  return (
    <div>
        <Navigation/>
        <BooksList />
    </div>
  )
}

export default App;


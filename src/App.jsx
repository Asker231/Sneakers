
import './App.css'

import React from 'react'


import Header from './components/header/Header'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
     <Header/>

      <Routes>
     <Route path='/'         element ={<Main  gender="men"/>} / >  
     <Route path='/womenPage' element ={<Main gender="women"/>} / >  
      </Routes> 
      </div>

  )
}

export default App

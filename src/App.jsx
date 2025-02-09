import React from 'react'
import Nav from './components/Nav'
import './index.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Projects'
import Skills from './pages/Skills'
const App = () => {
  return (
    <div>
      <Nav />
      <div className='h-14 max-sm:h-[4.5rem]'></div>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>}/>
        <Route path='skills' element={<Skills/>} />
        <Route path='projects' element={<Project/>} />
       </Routes>
    </div>
    
  )
}

export default App

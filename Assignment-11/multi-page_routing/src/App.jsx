import React from 'react'
import navbar from './component/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Students from './pages/Students'
import Navbar from './component/Navbar'
import Details from './pages/Details'

const App = () => {
  return (
    <div>
      <BrowserRouter  basename="/Mywork/" >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/students' element={<Students />}/>
        <Route path='/students/:id' element={<Details />}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

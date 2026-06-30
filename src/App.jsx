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
      <BrowserRouter  basename="/Mywork/Assignment-11/" >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Students' element={<Students />}/>
        <Route path='/Students/:id' element={<Details />}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import pages
import Home from './pages/Home.js'
import About from './pages/About.js'
import CocktailDetails from './pages/CocktailDetails.js'
import Error from './pages/Error.js'

//import components
import Navbar from './components/Navbar.js'


function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='cocktail/:id' element={<CocktailDetails />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>      
    </main>
  )
}

export default App
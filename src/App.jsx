import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path="/" element={<Hero />} />
       </Routes>
       <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

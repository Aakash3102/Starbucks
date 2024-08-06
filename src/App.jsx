import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Recomendation from "./components/Recomendation/Recomendation"
import AppBanner from './components/AppBanner/AppBanner'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero/>
      <Services/>
      <Recomendation/>
      <AppBanner/>
      <Footer/>
    </div>
  )
}

export default App
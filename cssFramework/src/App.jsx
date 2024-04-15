import React from 'react'
import "./App.css"
import Alert from './Components/Alert'
import Footer from './Components/Footer'
import Button from './Components/Button'
import Card from './Components/Card'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div>
        <Navbar />
        <div className='m-16 p-16 pb-24'>
        <Button />
          <Alert />
          <Card />
          </div>
          <Footer />
        </div>
  )
}

export default App
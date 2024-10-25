import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import Title from './components/Title/Title'
import { ValueProvider } from './contextAPI/ContextAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ValueProvider>

      <Title/>
      <Navbar/>
      <Body/>

      </ValueProvider>
      
    </>
  )
}

export default App

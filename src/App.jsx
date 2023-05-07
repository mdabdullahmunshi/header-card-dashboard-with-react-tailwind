import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pricelist from './components/Pricelist/Pricelist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-5xl text-purple-600 text-center">Hello from React-Tailwind</h1>
      <Pricelist></Pricelist>
    </div>
  )
}

export default App

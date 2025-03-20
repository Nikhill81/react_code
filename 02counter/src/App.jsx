import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 5

  const addValue = () => {
   // counter = counter + 1
    setCounter(counter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>    
    <h1>React Project</h1>
    <h2>Counter Value:{counter}</h2>

    <button
    onClick={addValue}>Add Value</button>
    <br />
    <button
    onClick={removeValue}>Remove Value</button>
    <p>Footer{counter}</p>
   
    </>
  )
}

export default App

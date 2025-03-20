import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15

  const addValue = () =>{    
   // counter = counter + 1
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>React Practice</h1>
    <h2>Count {counter}</h2>

    <button
    onClick={addValue}>Add</button>
    <br />
    <button
    onClick={removeValue}>Remove</button>
    <p>Footer{counter}</p>
    
    </>
  )
}

export default App

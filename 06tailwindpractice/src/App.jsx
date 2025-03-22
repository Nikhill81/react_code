import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("orange")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>

      <div>
        <button
        onClick={() => setColor('yellow')}
        style={{backgroundColor: 'yellow'}}>Yello</button>

        <button
        onClick={() => setColor('red')}
        style={{backgroundColor: 'red'}}
        
        >Red</button>

      </div>

    </div>
   

         

       
   
  )
}

export default App

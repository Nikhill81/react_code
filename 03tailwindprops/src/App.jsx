import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Nikhil",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Nikhil" btnText="click me" />
      <Card username="nikhil" btnText="visit me"/>
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        

        <Routes>
          <Route path='/input' element={<Input />} />
        </Routes>
       </div>
    </>
  )
}

export default App

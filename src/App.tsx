import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
import Blog from './Blog'
import Newsletter from './Newsletter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newsletters" element={<Blog />} />
        <Route path="/newsletter/id" element={<Newsletter />} />
      </Routes>
  </Router>
  )
}

export default App

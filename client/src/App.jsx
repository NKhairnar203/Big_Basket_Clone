import React from 'react'
import "./App.css"
import Navabar from './components/Navabar'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from './pages/Home';
const App = () => {
  return (
    <div>
      <Navabar/>
      <Home/>
    </div>
  )
}

export default App

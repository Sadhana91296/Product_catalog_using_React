import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'

function Home(){ return <div style={{padding:20}}>Home (after login)</div> }

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

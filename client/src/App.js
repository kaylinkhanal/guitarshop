import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/home'
import Admin from './pages/admin'
import Register from './pages/register'

import './App.css'
const App = ()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App
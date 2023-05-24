import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/home'
import Admin from './pages/admin'
import './App.css'
const App = ()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App
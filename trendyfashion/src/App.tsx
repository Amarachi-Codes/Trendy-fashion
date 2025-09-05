
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Product from './Pages/Product/Product'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product/>} />
        </Routes>
    </>
  )
}

export default App

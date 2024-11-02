import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Faqs from './pages/Faqs'
import ScrollToTop from '../ScrollToTop'
function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='faqs' element={<Faqs />} />
      {/* <Route path='*' element={<ErrorPage/>} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App

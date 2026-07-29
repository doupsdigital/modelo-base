import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { BasePage } from './pages/BasePage'
import { V1Page } from './pages/V1Page'
import { V2Page } from './pages/V2Page'
import { V3Page } from './pages/V3Page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<BasePage />} />
        <Route path="/v1" element={<V1Page />} />
        <Route path="/v2" element={<V2Page />} />
        <Route path="/v3" element={<V3Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

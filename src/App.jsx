import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Authentication from './auth/authentcator'
import IndexPage from './components'
import ProductSelectionPage from "./components/service";
import Check_out from "./components/checkout";

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/product" element={<ProductSelectionPage />} />
          <Route path="/checkout" element={<Check_out />} />

      </Routes>
    </Router>
  )
}

export default App

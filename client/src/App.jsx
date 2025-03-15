import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GETPage from './GETPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<GETPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

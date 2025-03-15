import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GETPage from './GETPage'
import POSTPage from './POSTPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<GETPage />} />
          <Route path='/post' element={<POSTPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

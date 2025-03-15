import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GETPage from './GETPage'
import POSTPage from './POSTPage'
import PUTPage from './PUTPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<GETPage />} />
          <Route path='/post' element={<POSTPage />} />
          <Route path='/put/:ID' element={<PUTPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import MilitaryService from './MilitaryService'
// import LeadershipStyle from './LeadershipStyle'
// import TechnicalLeadership from './TechnicalLeadership'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/military" element={<MilitaryService />} />
        {/* <Route path="/leadership" element={<LeadershipStyle />} /> */}
        {/* <Route path="/technical" element={<TechnicalLeadership />} /> */}
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './tailwind.css'
import './App.css'
import Home from './pages/Home';
import ChunkFind from './pages/ChunkFind';
import PortalLink from './pages/PortalLink';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chunkfind" element={<ChunkFind />} />
        <Route path="/portallink" element={<PortalLink />} />
      </Routes>
    </Router>
  )
}

export default App

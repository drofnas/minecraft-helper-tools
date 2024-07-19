import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import ChunkFind from './pages/ChunkFind';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chunkfind" element={<ChunkFind />} />
      </Routes>
    </Router>
  )
}

export default App

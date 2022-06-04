
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home.js'
import Fsd from './pages/Fsd.js'
import Ds from './pages/Ds.js'

function App() {
  return (
    <div className="App">
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fsd" element={<Fsd />}/>
        <Route path="/ds" element={<Ds />}/>
      </Routes>
    </main>
  </div>

  );
}

export default App;

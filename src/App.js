import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Infos from './components/Infos'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:pokemon" element={<Infos />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
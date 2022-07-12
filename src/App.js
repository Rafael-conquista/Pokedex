import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Infos from './components/Infos'
import Minigame from './components/Minigame'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:pokemon" element={<Infos />} ></Route>
        <Route path="/minigame" element={<Minigame />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
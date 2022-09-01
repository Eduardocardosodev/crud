import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import NavBar from './components/layout/NavBar';
import Containers from './components/layout/Containers';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/listContainers' element={<Containers />}/>
      </Routes>
    </Router>
  );
}

export default App;

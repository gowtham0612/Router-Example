import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Preview from './Components/Preview';

function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Preview' element={<Preview/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;

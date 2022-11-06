
import { BrowserRouter,Route, Routes,NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React router Task</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Service">Service</NavLink>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Service' element={<Service />}/>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;

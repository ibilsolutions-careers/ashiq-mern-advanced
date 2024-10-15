import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import {  Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {

  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="Home" element={<Home />} />
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;

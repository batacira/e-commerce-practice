import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import OurProducts from './components/OurProducts';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-300'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-products" element={<OurProducts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );

}

export default App;

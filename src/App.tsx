import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import BackBlings from './components/BackBlings';
import Gliders from './components/Gliders';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Pickaxes from './components/Pickaxes';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-300'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/back-blings" element={<BackBlings />} />
          <Route path="/gliders" element={<Gliders />} />
          <Route path="/pickaxes" element={<Pickaxes />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );

}

export default App;

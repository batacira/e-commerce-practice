import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import BackBlings from './components/BackBlings';
import Gliders from './components/Gliders';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Pickaxes from './components/Pickaxes';
import Pets from './components/Pets';


function App() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-300 tw-flex-col tw-min-h-screen'>
      <Router>
        <Header />
        <Routes>
          <Route path="/en" element={<Home />} />

          <Route path="/:lang/back-blings" element={<BackBlings />} />
          <Route path="/:lang/gliders" element={<Gliders />} />
          <Route path="/:lang/pickaxes" element={<Pickaxes />} />
          <Route path="/:lang/pets" element={<Pets />} />
          <Route path="/:lang/sign-up" element={<SignUp />} />
          <Route path="/:lang/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );

}

export default withTranslation()(App);

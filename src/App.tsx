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

function withUpperCase(Component: any) { // 3. HOC (prima Component i vraca funkciju koja vraca Component) prima Component koja je ustvari MyComponent a vraca Funkcionalnu komponentu WithUpperCase koja ima glavnu logiku da
  return function WithUpperCase(props: any) { // promeni neke stvari i ona (WithUpperCase) u sustini vraca istu tu komponentu koju je primila kao parameter (MyComponent) ali sa izmenjenim nekim stvarima
    const { text } = props;
    const upperCaseText = text.toUpperCase();

    return <Component upperCaseText={upperCaseText} /* {...props} */ />;
  };
}
function MyComponent(props: any) { // 4. argument funkcije withUpperCase
  const { upperCaseText } = props;

  return <div className='tw-bg-red-500 tw-mb-56 tw-absolute tw-bottom-16'>{upperCaseText}</div>;
}

const EnhancedMyComponent = withUpperCase(MyComponent); // 2. Od jedanako pa desno se sve svodi da poziv te funkcije withUpperCase(MyComponent) vrati izmenjenu komponentu (Poboljsanu Funkcionalnu Komponentu)


function App() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-300 tw-flex-col tw-min-h-screen'>
      <Router>
        <Header />
        <EnhancedMyComponent text="Hello, World!" /> {/* 1. */}

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

// KAKO PROSLEDJUJE PROPS SA <EnhancedMyComponent> komponentu na MyComponent komponentu 
// 
/* U kontekstu Higher-Order komponente (HOC), možemo reći da je EnhancedMyComponent roditeljska komponenta MyComponent komponente. Razlog za to je što EnhancedMyComponent omotava MyComponent i pruža dodatnu funkcionalnost ili propertije koji su prošireni ili manipulirani od strane HOC-a.

Kada koristimo EnhancedMyComponent kao roditeljsku komponentu, MyComponent postaje "dijete" EnhancedMyComponent komponente, što znači da je MyComponent unutar hijerarhije komponenata pozicioniran unutar EnhancedMyComponent komponente.

Kao roditeljska komponenta, EnhancedMyComponent ima kontrolu nad načinom na koji MyComponent prima i obrađuje propertije, jer HOC može manipulirati ili proširiti props objekt koji se prenosi MyComponent-u.

Ukratko, možemo reći da je EnhancedMyComponent roditeljska komponenta koja omotava MyComponent i pruža dodatnu funkcionalnost ili propertije. */
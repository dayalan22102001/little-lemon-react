import './App.css';
import NavbarComponent from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import Menu from './components/Menu';



function App() {
  return (
    <>
    <NavbarComponent/>
    <Intro />
    <About />
    <WhyChooseUs />
    <Menu />
    <Booking />
    <Footer /> 
    </>
  );
}

export default App;

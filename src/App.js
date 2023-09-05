
import './App.css';
import Mission from './components/mission';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './components/home';
import WhyMzaziConnect from './components/whyUs';
import Testimonials from './components/testimonials';
import Download from './components/Download';



function App() {
  return (
    <div>
    <Home/>
    <Mission/>
    <WhyMzaziConnect/>
    <Download/>
    <Testimonials/>
    <Footer/>
  
   
    </div>
  );
}

export default App;


import './App.css';
import Mission from './components/mission';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './components/home';
import WhyMzaziConnect from './components/whyUs';
import Testimonials from './components/testimonials';



function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <Mission/>
    <WhyMzaziConnect/>
    <Testimonials/>
    <Footer/>
  
   
    </div>
  );
}

export default App;

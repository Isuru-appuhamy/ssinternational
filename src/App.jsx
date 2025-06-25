import './App.css'
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <AboutUs />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App

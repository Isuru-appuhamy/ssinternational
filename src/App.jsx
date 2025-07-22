import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import TrackingDetails from "./components/TrackingDetails";
import Dashboard from "./components/Dashboard"; // Add dashboard component

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Features />
            <AboutUs />
            <Services />
            <ContactForm />
            <Footer />
          </>
        } />
        <Route path="/track/:trackingId" element={<TrackingDetails />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* New dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;

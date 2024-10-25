import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      {/* <FeedbackSection /> */}
      <Footer />
    </div>
  );
}

export default App;

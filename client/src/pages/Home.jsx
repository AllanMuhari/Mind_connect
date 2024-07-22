import React from "react";
import HeroSection from "../components/HeroSection";
import PersonalizedCare from "../components/PersonalizedCare";
import SecureCareSection from "../components/SecureCareSection";
import SecuritySection from "../components/SecuritySection";
import ServicesSection from "../components/ServicesSection";
import TrustedBySection from "../components/TrustedBySection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <main>
        <HeroSection />
        <PersonalizedCare />
        <SecureCareSection />
        <SecuritySection />
        <ServicesSection />
        <TrustedBySection />
        <Footer />
      </main>
    </div>
  );
};

export default Home;

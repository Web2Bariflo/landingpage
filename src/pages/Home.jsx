import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Workflow from "../components/Workflow";
// import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <Features />
        
        <Workflow />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Home;

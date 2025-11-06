import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Workflow from "../components/WorkDetails";
import CompanyScroll from "./Scroll";
// import ScrollToTop from "../components/ScrollToTop";
import TeamManagement from "../components/TeamManagement";
import TaskFlow from "../components/TaskFlow";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="pt-16 bg-blue-50">
        <HeroSection />

        <Features />
        <Workflow />
        <TaskFlow />
        <CompanyScroll />
        {/* <TeamManagement /> */}
      </main>
    </>
  );
};

export default Home;

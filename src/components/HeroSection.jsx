import { motion } from "framer-motion";
import heroImg from "../assets/images/dashboardimg.jpg";
import { useNavigate } from "react-router-dom";

// Temporary image from Unsplash




const HeroSection = () => {

  const navigate = useNavigate();

  return (
    <section
      className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between
      bg-gradient-to-b from-blue-700 via-blue-600 to-blue-400 text-white px-6 md:px-20 overflow-hidden"
    >
      {/* LEFT SIDE - TEXT AREA */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        // animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.0, delay: 0.1 }}
        className="flex-1 max-w-xl text-center md:text-left space-y-6 mt-16 md:mt-8 mb-8"
      >
        {/* Top Tag */}
        <p className="text-sm text-blue-200 uppercase tracking-widest">
          ✨ Manage Every Task — From Idea to Completion
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Organize, Assign, and Track{" "}
          <span className="text-blue-200">Multiple Tasks Effortlessly </span>
        </h1>

        {/* Description Paragraph */}
        <p className="text-lg text-blue-100 leading-relaxed">
          TaskFlow lets you create and manage multiple tasks just like Google
          Tasks — assign work to different team members, set due dates, verify
          completion, and track progress all from one intuitive dashboard.
          Whether you’re an admin managing teams or a member completing tasks,
          everything stays in sync.
        </p>


        {/* Button */}
        <button
          onClick={() => navigate("/pricing")}
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
        >
          Start Free Trial
        </button>

        {/* Bottom Line */}
        <div className="pt-4 text-sm text-blue-200">
          Trusted by <b>1,000+</b> teams • Rated <b>4.9/5</b> globally
        </div>
      </motion.div>

      {/* RIGHT SIDE - IMAGE */}
      {/* <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      > */}
      <img
        src={heroImg}
        alt="TaskFlow Dashboard"
        className="w-[320px] md:w-[480px] md:h-[450px] rounded-2xl shadow-2xl border border-blue-300/30"
      />
      {/* </motion.div> */}
    </section>
  );
};

export default HeroSection;

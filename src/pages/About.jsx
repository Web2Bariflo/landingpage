import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
            About <span className="text-blue-500">TaskFlow</span>
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            TaskFlow is built to help teams plan, collaborate, and execute efficiently.
            Our mission is to bring clarity and accountability to every project
            through an intuitive workflow system.
          </p>
          <p className="text-gray-700 text-lg">
            From startups to enterprises, TaskFlow adapts to your team’s workflow —
            empowering you to focus on what matters most: <span className="font-semibold text-blue-600">getting things done.</span>
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9363/9363918.png"
            alt="About illustration"
            className="w-[80%] rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

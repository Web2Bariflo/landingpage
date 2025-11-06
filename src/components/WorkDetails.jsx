import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Added import
import workflowImg from "../assets/images/dashboardimg.jpg";
import { FaTasks, FaUserCheck, FaChartLine, FaUsers } from "react-icons/fa";

const Workflow = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-16">
      <div className="max-w-8xl mx-auto px-20 flex flex-col md:flex-row items-center gap-20">

        {/* --- Left Image --- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <img
            src={workflowImg}
            alt="Workflow illustration"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </motion.div>

        {/* --- Right Content --- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
            Simplified <span className="text-blue-500">Task Flow</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Manage, assign, and track your team's progress seamlessly with our smart
            workflow engine — designed for admins, managers, and team members.
          </p>

          {/* --- Cards --- */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg">
              <FaTasks className="text-xl" />
              Task Assignment
            </div>
            <div className="flex items-center gap-3 bg-blue-500 text-white px-4 py-2 rounded-xl shadow-lg">
              <FaUserCheck className="text-xl" />
              Team Review
            </div>
          </div>

          {/* --- List --- */}
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <FaUsers className="text-blue-500" />
              Assign tasks to multiple team members easily.
            </li>
            <li className="flex items-center gap-3">
              <FaChartLine className="text-blue-500" />
              Manager reviews progress and approves completion.
            </li>
            <li className="flex items-center gap-3">
              <FaUserCheck className="text-blue-500" />
              Admin oversees reports and workflow analytics.
            </li>
            <li className="flex items-center gap-3">
              <FaTasks className="text-blue-500" />
              Auto-generate performance summaries for each project.
            </li>
          </ul>

          {/* --- CTA Button (Fixed) --- */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block"
          >
            <Link
              to="/TaskFlow" // ✅ Correct navigation
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all inline-block"
            >
              Explore Workflow →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;

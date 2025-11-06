import { motion } from "framer-motion";
import { FaTasks, FaUserTie, FaCheckCircle } from "react-icons/fa";
import dashboardImg from "../assets/images/dashboardimg.jpg"; // Replace later with your own

const features = [
  {
    icon: <FaTasks className="text-blue-600 text-3xl" />,
    title: "Assign Multiple Tasks",
    desc: "Admins can create and assign multiple tasks across teams instantly with smart categorization.",
  },
  {
    icon: <FaUserTie className="text-blue-600 text-3xl" />,
    title: "Review by Managers",
    desc: "Managers can track, review, and provide feedback on team progress from a unified dashboard.",
  },
  {
    icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    title: "Approve & Verify",
    desc: "Admins get verified task reports and performance metrics once each task cycle is completed.",
  },
];

const TaskManagement = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        {/* --- Left Illustration --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <img
            src={dashboardImg}
            alt="Task management dashboard"
            className="rounded-3xl shadow-2xl border border-blue-100 w-full object-cover"
          />
        </motion.div>

        {/* --- Right Content --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
            Smart <span className="text-blue-500">Task Management</span>
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Streamline your workflow from task assignment to final verification.
            TaskFlow enables teams, managers, and admins to collaborate efficiently and transparently —
            making productivity effortless.
          </p>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
              >
                <div className="p-3 bg-blue-100 rounded-xl">{f.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-700">{f.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TaskManagement;

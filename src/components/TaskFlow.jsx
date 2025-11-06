import { motion } from "framer-motion";
import {
  FaUserShield,
  FaTasks,
  FaUserCheck,
  FaClipboardList,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const steps = [
  {
    id: 1,
    title: "Admin Creates Tasks",
    desc: "Admin defines project goals, creates multiple tasks, and assigns priorities for each task.",
    icon: <FaUserShield size={40} />,
  },
  {
    id: 2,
    title: "Multiple Tasks Assigned",
    desc: "Tasks are distributed to multiple team members for execution — like Google Task assignment flow.",
    icon: <FaTasks size={40} />,
  },
  {
    id: 3,
    title: "Manager Reviews & Verifies",
    desc: "The manager monitors task progress, verifies completion, and ensures quality output.",
    icon: <FaUserCheck size={40} />,
  },
  {
    id: 4,
    title: "Admin Final Review",
    desc: "Admin reviews verified tasks, checks reports, and closes the workflow cycle.",
    icon: <FaClipboardList size={40} />,
  },
];

const TaskFlow = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 mt-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
          Smart Task Management Flow
        </h2>
        <p className="text-blue-700 max-w-2xl mx-auto">
          From task creation to final review — a streamlined process ensuring
          every step is tracked, verified, and completed efficiently.
        </p>
      </motion.div>

      {/* Flow layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Circle Icon */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-full p-5 shadow-md">
              {step.icon}
            </div>
            <h3 className="font-bold text-lg text-blue-800 mt-4">{step.title}</h3>
            <p className="text-blue-700 text-sm max-w-[220px] mt-2">
              {step.desc}
            </p>

            {/* Arrow between steps (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 right-[-70px] text-blue-500">
                <FaArrowRightLong size={30} />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100/60 to-transparent rounded-t-[50%]" />
    </section>
  );
};

export default TaskFlow;

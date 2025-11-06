import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Amit Verma",
      role: "Project Manager, Nexify",
      feedback:
        "TaskFlow transformed how we manage projects — tracking tasks and approvals is effortless now.",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      name: "Priya Sharma",
      role: "Team Lead, Infotask",
      feedback:
        "The collaboration between team members and managers feels seamless. It keeps everyone in sync.",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    },
    {
      name: "Rohit Kumar",
      role: "Operations Head, Taskly",
      feedback:
        "We save nearly 40% of our time thanks to TaskFlow’s automation and review workflow system.",
      image: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-50 py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-blue-700 mb-4"
        >
          What Our <span className="text-blue-500">Clients Say</span>
        </motion.h2>
        <p className="text-gray-600 mb-12">
          Real stories from real teams who simplified their workflow using TaskFlow.
        </p>

        <div className="grid md:grid-cols-3 gap-20">
          {feedbacks.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-xl transition-all"
            >
              <FaQuoteLeft className="text-blue-400 text-2xl mb-4 mx-auto" />
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                “{f.feedback}”
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-16 h-16 rounded-full mb-3 border-2 border-blue-200"
                />
                <h4 className="text-blue-700 font-bold">{f.name}</h4>
                <p className="text-gray-500 text-sm">{f.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { motion } from "framer-motion";

const companies = [
  { name: "Google", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg" },
  { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg" },
  { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg" },
  { name: "Meta", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg" },
  { name: "IBM", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ibm.svg" },
  { name: "Adobe", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg" },
  { name: "Netflix", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg" },
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg" },
  { name: "Zoom", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zoom.svg" },
  { name: "Dropbox", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dropbox.svg" },
];

const CompanyScroll = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 py-16 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-blue-800 mb-16">
        Trusted by Innovative Teams
      </h2>

      {/* --- Glow Background --- */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 via-blue-300/30 to-blue-200/50 blur-3xl opacity-60"></div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-20 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center justify-center group"
            >
              <div className="p-4 rounded-2xl bg-white/80 shadow-md backdrop-blur-sm group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-20 h-20 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 filter invert-0 brightness-75"
                />
              </div>
              <p className="text-blue-700 text-sm mt-3 font-semibold">{company.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyScroll;

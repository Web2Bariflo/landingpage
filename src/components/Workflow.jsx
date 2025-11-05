import React from "react";
// import workflowIllustration from "../assets/hero-bg.svg";
 // placeholder image

const workflowSteps = [
  {
    title: "Admin",
    description: "Create tasks, assign priorities, and monitor overall progress.",
    icon: "🛠️",
    bg: "bg-blue-200",
  },
  {
    title: "Manager",
    description: "Review tasks, approve assignments, and coordinate with team members.",
    icon: "📋",
    bg: "bg-green-200",
  },
  {
    title: "Team",
    description: "Complete assigned tasks, update status, and provide feedback.",
    icon: "👷",
    bg: "bg-yellow-200",
  },
];

const Workflow = () => {
  return (
    <section className="bg-blue-50 py-24">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Task Assignment <span className="text-blue-600">Workflow</span>
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-lg">
            Understand how tasks flow from Admin to Manager to Team, ensuring smooth collaboration and accountability.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${step.bg}`}
              >
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {step.title}
              </h3>
              <p className="text-blue-700 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div className="mt-20 text-center">
          {/* <img
            src={workflowIllustration}
            alt="Workflow Illustration"
            className="mx-auto w-full max-w-2xl rounded-xl shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Workflow;

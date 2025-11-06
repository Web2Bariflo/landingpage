// src/components/Features.jsx
import React from "react";
// import heroImg from "../assets/hero-bg.svg";

// Updated task-focused features but same design
const featuresData = [
  {
    title: "Task Assignment",
    description:
      "Easily assign tasks to team members and track progress in real-time. Assign priorities and deadlines for each task.",
    icon: "📝",
    iconBg: "bg-blue-200",
    extraContent: (
      <div className="mt-4 text-sm text-blue-600">
        <ul className="space-y-1">
          <li><span className="font-semibold">Task:</span> Design Homepage</li>
          <li><span className="font-semibold">Assigned To:</span> Alice</li>
          <li><span className="font-semibold">Deadline:</span> Nov 10, 2025</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Task Verification",
    description:
      "Verify completed tasks with approval workflows, ensuring accountability and quality for all assignments.",
    icon: "✅",
    iconBg: "bg-green-200",
    extraContent: (
      <div className="mt-4 text-sm text-blue-600">
        <div className="flex justify-between mb-1">
          <span>Pending Approval</span>
          <span className="text-yellow-500 font-semibold">2 Tasks</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Verified</span>
          <span className="text-green-500 font-semibold">5 Tasks</span>
        </div>
      </div>
    ),
  },
  {
    title: "Multi-Level Workflow",
    description:
      "Supports Admin → Manager → Team flow. Track responsibilities, approvals, and status updates seamlessly.",
    icon: "🔄",
    iconBg: "bg-purple-200",
    extraContent: (
      <div className="mt-4 text-sm text-blue-600">
        <ul className="space-y-1">
          <li>Admin: Review Tasks</li>
          <li>Manager: Assign & Monitor</li>
          <li>Team: Complete & Report</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Multitasking & Collaboration",
    description:
      "Handle multiple tasks at once, assign subtasks, and collaborate with team members to boost efficiency.",
    icon: "⚡",
    iconBg: "bg-yellow-200",
    extraContent: (
      <div className="mt-4 text-sm text-blue-600">
        <ul className="space-y-1">
          <li>Task 1: Homepage Layout</li>
          <li>Task 2: Payment Integration</li>
          <li>Task 3: QA Testing</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Insights & Reports",
    description:
      "Generate actionable insights and performance reports to analyze team efficiency and task completion trends.",
    icon: "📊",
    iconBg: "bg-blue-300",
    extraContent: (
      <div className="mt-4 text-sm text-blue-600">
        <div className="h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-400 mt-16">
          Reports
        </div>
      </div>
    ),
  },
];

const Features = () => {
  return (
    <section className="bg-blue-50">
      <div className="container mx-auto px-6 lg:px-7 mt-12">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Empowering Business{" "}
            <span className="text-blue-600">Key Features</span>
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto text-lg mb-8">
            Our platform helps you manage tasks, collaborate effectively, and
            boost productivity with ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:px-12">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${feature.iconBg}`}
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-700 text-sm">{feature.description}</p>
              {feature.extraContent}
            </div>
          ))}
        </div>

        {/* Illustration at bottom */}
        <div className="mt-20 text-center">
          {/* <img
            src={heroImg}
            alt="Features Illustration"
            className="mx-auto w-full max-w-2xl"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Features;

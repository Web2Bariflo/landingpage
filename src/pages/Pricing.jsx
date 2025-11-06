// PricingSection.jsx
import React, { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "For individuals & small shops just starting out",
    priceMonthly: 199,
    priceYearly: 199 * 12,
    features: [
      "Admin can assign tasks to team members",
      "Track task progress in real-time",
      "Manager confirms task completion",
      "Team collaboration dashboard",
      "Basic notifications & reminders",
    ],
  },
  {
    name: "Basic",
    description: "For growing small teams needing more coordination",
    priceMonthly: 499,
    priceYearly: 499 * 12,
    features: [
      "Multi-person task assignment",
      "Task priority & deadlines",
      "Manager oversight and approval",
      "Progress analytics",
      "Export tasks & reports",
      "Email & in-app notifications",
    ],
  },
  {
    name: "Standard",
    description: "Ideal for medium teams with complex workflows",
    priceMonthly: 999,
    priceYearly: 999 * 12,
    features: [
      "Assign tasks to multiple teams",
      "Track, observe & confirm completion",
      "Admin monitoring & analytics",
      "Priority task management",
      "Collaborative task dashboard",
      "Advanced reporting & notifications",
    ],
  },
  {
    name: "Premium",
    description: "For large-scale operations with advanced needs",
    priceMonthly: 1999,
    priceYearly: 1999 * 12,
    features: [
      "Unlimited multi-team task assignments",
      "Task tracking with deadlines & reminders",
      "Manager confirmations & admin oversight",
      "Advanced analytics & reporting",
      "Customizable workflows for multiple teams",
      "Full multi-tasking app integration",
      "24/7 support & premium features",
    ],
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-10 mt-10">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900">Pricing</h2>
        <p className="mt-2 text-blue-700">
          Manage your team efficiently with our multi-tasking app — assign tasks, track progress, and confirm completion all in one place.
        </p>

        <div className="mt-4 flex justify-center gap-2">
          <button
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              billing === "monthly" ? "bg-blue-600 text-white" : "bg-blue-200 text-blue-900"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              billing === "yearly" ? "bg-blue-600 text-white" : "bg-blue-200 text-blue-900"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-xl p-6 flex flex-col justify-between cursor-pointer bg-white border-blue-200 group transition-colors duration-300 hover:bg-blue-600"
          >
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-semibold text-blue-900 group-hover:text-white transition-colors">
                {plan.name}
              </h4>
              <p className="text-blue-700 group-hover:text-white transition-colors">{plan.description}</p>
              <p className="text-2xl font-bold text-blue-900 group-hover:text-white transition-colors">
                ₹{billing === "monthly" ? plan.priceMonthly : plan.priceYearly}/
                {billing === "monthly" ? "mo" : "yr"}
              </p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-blue-700 group-hover:text-white transition-colors"
                  >
                    <span className="text-green-500 font-bold group-hover:text-green-200">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 w-full py-2 rounded-md font-semibold bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-800 transition-colors duration-300">
              Get started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

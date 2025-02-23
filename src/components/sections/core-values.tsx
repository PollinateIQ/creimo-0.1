"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation",
    description: "Pioneering advanced coating technologies for the future",
    icon: "✨",
    color: "from-brand-magenta/20 to-brand-magenta/5"
  },
  {
    title: "Sustainability",
    description: "Eco-friendly solutions for a greener tomorrow",
    icon: "🌱",
    color: "from-brand-yellow/20 to-brand-yellow/5"
  },
  {
    title: "Excellence",
    description: "Delivering superior quality in every project",
    icon: "⭐",
    color: "from-brand-navy/20 to-brand-navy/5"
  },
  {
    title: "Empowerment",
    description: "Supporting youth and women in technology",
    icon: "💪",
    color: "from-brand-magenta/20 to-brand-yellow/5"
  }
];

export function CoreValues() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#E6007E0D,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,#1E38750D,transparent)]" />
      </div>
      
      <div className="container px-4 mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-navy via-brand-magenta to-brand-navy">
            Our Core Values
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Driving innovation and excellence in surface technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`h-full rounded-2xl bg-gradient-to-br ${value.color} p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-magenta transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-brand-navy/70">{value.description}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-magenta via-brand-navy to-brand-yellow rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 group-hover:duration-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
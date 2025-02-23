"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Award, Users, Leaf, Target } from "lucide-react";

const stats = [
  {
    label: "Years of Experience",
    value: "15+",
    icon: Award,
    color: "text-brand-magenta"
  },
  {
    label: "Team Members",
    value: "50+",
    icon: Users,
    color: "text-brand-yellow"
  },
  {
    label: "Eco-friendly Solutions",
    value: "20+",
    icon: Leaf,
    color: "text-green-500"
  },
  {
    label: "Projects Completed",
    value: "500+",
    icon: Target,
    color: "text-brand-navy"
  }
];

export function About() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_200px,#1E38750D,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_800px,#E6007E0D,transparent)]" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-navy via-brand-magenta to-brand-navy">
              Advancing Surface Technology
            </h2>
            <p className="text-lg text-brand-navy/70 mb-6">
              At Creimo, we&apos;re pioneering the future of surface coating technology. Our innovative solutions combine cutting-edge research with sustainable practices to deliver exceptional results across industries.
            </p>
            <p className="text-lg text-brand-navy/70 mb-8">
              From nano-ceramic coatings to eco-friendly alternatives, we&apos;re committed to pushing the boundaries of what&apos;s possible in surface protection and enhancement.
            </p>
            
            <Button
              size="lg"
              className="bg-brand-magenta hover:bg-brand-magenta/90 text-white group"
            >
              Learn More
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Advanced Coating Technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 left-4 right-4">
              <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className={`inline-flex p-2 rounded-lg ${stat.color} bg-opacity-10 mb-3`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-brand-navy">
                        {stat.value}
                      </div>
                      <div className="text-sm text-brand-navy/60">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

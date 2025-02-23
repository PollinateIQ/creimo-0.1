"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Emily Chen",
    role: "Chief Technology Officer",
    bio: "Leading innovation in advanced coating technologies with over 15 years of research experience.",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1200",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:emily@creimo.com"
    }
  },
  {
    name: "Marcus Johnson",
    role: "Head of R&D",
    bio: "Specializing in eco-friendly coating solutions and sustainable manufacturing processes.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:marcus@creimo.com"
    }
  },
  {
    name: "Sarah Williams",
    role: "Quality Assurance Director",
    bio: "Ensuring the highest standards in coating applications and product performance.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1200",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:sarah@creimo.com"
    }
  },
  {
    name: "David Lee",
    role: "Operations Manager",
    bio: "Streamlining production processes and optimizing coating applications.",
    image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1200",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:david@creimo.com"
    }
  }
];

export function Team() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#1E38750D,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,#E6007E0D,transparent)]" />
      </div>

      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-navy via-brand-magenta to-brand-navy">
            Meet Our Team
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Experts dedicated to advancing coating technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-brand-magenta/80 text-white backdrop-blur-sm transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-brand-magenta/80 text-white backdrop-blur-sm transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.socials.email}
                      className="p-2 rounded-full bg-white/10 hover:bg-brand-magenta/80 text-white backdrop-blur-sm transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-magenta transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand-magenta font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-brand-navy/70">
                    {member.bio}
                  </p>
                </div>
              </div>
              
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-magenta via-brand-navy to-brand-yellow rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 group-hover:duration-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

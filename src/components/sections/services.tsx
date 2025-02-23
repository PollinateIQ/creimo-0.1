"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Advanced Surface Coating",
    description: "State-of-the-art coating solutions for industrial applications",
    details: [
      "Nano-ceramic coatings",
      "Anti-corrosion treatments",
      "Thermal barrier coatings"
    ],
    image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/services/surface-coating"
  },
  {
    title: "Green Coating Technology",
    description: "Environmentally conscious coating solutions",
    details: [
      "Low-VOC formulations",
      "Biodegradable options",
      "Energy-efficient application"
    ],
    image: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/services/green-technology"
  },
  {
    title: "Protective Finishes",
    description: "Durable protection for various surfaces",
    details: [
      "UV-resistant coatings",
      "Chemical-resistant layers",
      "Wear-resistant finishes"
    ],
    image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/services/protective-finishes"
  }
];

export function Services() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#E6007E0D,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,#1E38750D,transparent)]" />
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
            Our Services
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Comprehensive coating solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                </div>
                
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-magenta transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-brand-navy/70">
                    {service.description}
                  </p>
                  
                  <div className="mt-4 space-y-2">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-brand-navy/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-magenta mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost"
                    className="mt-6 text-brand-magenta hover:text-brand-navy transition-colors group/btn"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
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
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "Creimo's advanced coating solutions have revolutionized our manufacturing process. The durability and efficiency of their products are unmatched in the industry.",
    name: "Sarah Chen",
    designation: "Chief Technology Officer, TechManufacture Inc.",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    quote: "The eco-friendly coating options provided by Creimo have helped us achieve our sustainability goals while maintaining the highest quality standards.",
    name: "Michael Rodriguez",
    designation: "Sustainability Director, GreenTech Solutions",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    quote: "Working with Creimo has been a game-changer for our automotive division. Their protective finishes offer superior performance and longevity.",
    name: "David Anderson",
    designation: "Head of R&D, AutoInnovate Corp",
    image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [rotations, setRotations] = useState<number[]>([]);

  // Initialize rotations on mount
  useEffect(() => {
    setRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_200px,#E6007E0D,transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_800px,#1E38750D,transparent)]" />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-navy via-brand-magenta to-brand-navy">
            Client Testimonials
          </h2>
          <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">
            Hear what our clients say about our coating solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            {/* Images */}
            <div className="relative h-96 md:h-[500px]">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.image}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: rotations[index] || 0,
                    }}
                    animate={{
                      opacity: index === active ? 1 : 0.7,
                      scale: index === active ? 1 : 0.95,
                      rotate: index === active ? 0 : rotations[index] || 0,
                      zIndex: index === active ? 10 : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: rotations[index] || 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                  >
                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 text-6xl text-brand-magenta opacity-20">
                    "
                  </div>
                  <motion.p className="text-xl md:text-2xl text-brand-navy/80 mb-8 italic">
                    {testimonials[active].quote.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.02,
                        }}
                        className="inline-block mr-1"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {testimonials[active].name}
                  </h3>
                  <p className="text-brand-navy/60">
                    {testimonials[active].designation}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={handlePrev}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                  className="p-2 rounded-full bg-brand-navy/5 hover:bg-brand-magenta/20 text-brand-navy transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  onMouseEnter={() => setAutoplay(false)}
                  onMouseLeave={() => setAutoplay(true)}
                  className="p-2 rounded-full bg-brand-navy/5 hover:bg-brand-magenta/20 text-brand-navy transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

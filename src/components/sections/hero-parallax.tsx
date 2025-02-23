"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Advanced Surface Coating",
    link: "/services/surface-coating",
    thumbnail: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Green Coating Technology",
    link: "/services/green-coating",
    thumbnail: "https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Protective Finishes",
    link: "/services/protective-finishes",
    thumbnail: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Nano-ceramic Solutions",
    link: "/services/nano-ceramic",
    thumbnail: "https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Anti-corrosion Systems",
    link: "/services/anti-corrosion",
    thumbnail: "https://images.pexels.com/photos/3862137/pexels-photo-3862137.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Thermal Barrier Coatings",
    link: "/services/thermal-barrier",
    thumbnail: "https://images.pexels.com/photos/3862139/pexels-photo-3862139.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "UV-resistant Coatings",
    link: "/services/uv-resistant",
    thumbnail: "https://images.pexels.com/photos/3862141/pexels-photo-3862141.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Chemical-resistant Layers",
    link: "/services/chemical-resistant",
    thumbnail: "https://images.pexels.com/photos/3862143/pexels-photo-3862143.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Wear-resistant Finishes",
    link: "/services/wear-resistant",
    thumbnail: "https://images.pexels.com/photos/3862145/pexels-photo-3862145.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Low-VOC Solutions",
    link: "/services/low-voc",
    thumbnail: "https://images.pexels.com/photos/3862147/pexels-photo-3862147.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Biodegradable Coatings",
    link: "/services/biodegradable",
    thumbnail: "https://images.pexels.com/photos/3862149/pexels-photo-3862149.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Energy-efficient Systems",
    link: "/services/energy-efficient",
    thumbnail: "https://images.pexels.com/photos/3862151/pexels-photo-3862151.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Smart Coating Technology",
    link: "/services/smart-coating",
    thumbnail: "https://images.pexels.com/photos/3862153/pexels-photo-3862153.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Industrial Solutions",
    link: "/services/industrial",
    thumbnail: "https://images.pexels.com/photos/3862155/pexels-photo-3862155.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  },
  {
    title: "Custom Coating Services",
    link: "/services/custom",
    thumbnail: "https://images.pexels.com/photos/3862157/pexels-photo-3862157.jpeg?auto=compress&cs=tinysrgb&w=200&q=40"
  }
];

export function HeroParallax() {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[150vh] py-10 overflow-hidden bg-brand-navy antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16 mb-16">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-16 space-x-16">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function Header() {
  return (
    <div className="max-w-7xl relative mx-auto py-10 px-4 w-full left-0 top-0">
      <h1 className="font-bold text-4xl md:text-7xl text-brand-white font-sans">
        Advanced Coating <br /> 
        <span className="text-brand-magenta">Solutions</span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-6 text-brand-gray font-light">
        Discover our innovative range of coating technologies, designed to protect and enhance surfaces across industries. From eco-friendly solutions to high-performance industrial coatings, we deliver excellence in every layer.
      </p>
    </div>
  );
}

function ProductCard({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="group/product h-80 w-[25rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={600}
          height={600}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-xl transition-all duration-300"
          unoptimized
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=200&q=40";
          }}
        />
        <div className="absolute inset-0 bg-brand-navy/60 group-hover/product:bg-brand-navy/40 transition-colors rounded-xl" />
        <div className="absolute inset-0 flex items-end p-8">
          <div>
            <h2 className="font-bold text-brand-white text-2xl group-hover/product:text-brand-magenta transition-all">
              {product.title}
            </h2>
            <div className="h-0.5 w-0 group-hover/product:w-full bg-brand-magenta transition-all duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
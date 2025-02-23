"use client";

import { HeroParallax } from "@/components/sections/hero-parallax";
import { About } from "@/components/sections/about";
import { CoreValues } from "@/components/sections/core-values";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Subscribe } from "@/components/sections/subscribe";
import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero section - introduces the company */}
      <HeroParallax />
      
      {/* About section - company overview */}
      <About />
      
      {/* Core Values - what we stand for */}
      <CoreValues />
      
      {/* Services - what we offer */}
      <Services />
      
      {/* Team - who we are */}
      <Team />
      
      {/* Testimonials - what clients say */}
      <Testimonials />
      
      {/* Subscribe - stay connected */}
      <Subscribe />
      
      {/* Footer - navigation and contact */}
      <Footer />
    </main>
  );
}

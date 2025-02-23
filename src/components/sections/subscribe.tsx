"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#E6007E_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_#FDB813_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-white">
            Stay Updated
          </h2>
          <p className="text-lg text-brand-gray mb-8">
            Subscribe to our newsletter for the latest updates on coating technologies and industry insights.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-brand-white/20 text-brand-white placeholder:text-brand-white/50 focus:border-brand-magenta"
            />
            <Button 
              type="submit"
              disabled={status === "loading"}
              className="bg-brand-magenta hover:bg-brand-magenta/90 text-brand-white"
            >
              {status === "loading" ? (
                "Subscribing..."
              ) : status === "success" ? (
                "Subscribed!"
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-yellow mt-4"
            >
              Thank you for subscribing! 🎉
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
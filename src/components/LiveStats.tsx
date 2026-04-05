"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // ease out quad
        const easeProgress = progress * (2 - progress);
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function LiveStats() {
  return (
    <section className="bg-[var(--color-navy)] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <h3 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-gold)]">
              <Counter from={0} to={30} suffix="+" />
            </h3>
            <p className="text-white/80 font-medium text-sm md:text-base">Years of Experience</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-gold)]">
              <Counter from={0} to={3000} suffix="+" />
            </h3>
            <p className="text-white/80 font-medium text-sm md:text-base">Families Served</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <h3 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-gold)]">
              <Counter from={0} to={300} suffix="+" />
            </h3>
            <p className="text-white/80 font-medium text-sm md:text-base">Policies Per Year</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-gold)]">
              ₹<Counter from={0} to={50} suffix="Cr+" />
            </h3>
            <p className="text-white/80 font-medium text-sm md:text-base">Wealth Secured</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

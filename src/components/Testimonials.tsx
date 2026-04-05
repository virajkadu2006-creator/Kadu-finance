"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Deshmukh",
      role: "Business Owner",
      quote: "He didn't just sell a policy, he planned my entire financial future. When my business faced a tough time, the contingency funds Dilip ji set up 10 years ago saved me.",
      problem: "Needed business and personal wealth separation.",
      result: "Achieved complete financial independence and stress-free living."
    },
    {
      name: "Sneha Patil",
      role: "Medical Professional",
      quote: "As a doctor, I have zero time to track markets. Dilip ji acts as my personal CFO. His transparency and dedication to my child's education planning gave me immense peace of mind.",
      problem: "No time for wealth management, worried about child's future.",
      result: "Guaranteed education funds established without daily tracking."
    },
    {
      name: "Mohan Kale",
      role: "Retiree",
      quote: "The retirement strategy he built means I earn more every month now than when I was working. His claim-settlement support for my wife's medical emergency was instantaneous.",
      problem: "Feared outliving his savings post-retirement.",
      result: "Consistent, inflation-beating monthly pension."
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-navy)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10 mix-blend-overlay" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-3">Client Success</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">Trusted by 3000+ Families</h3>
          <p className="text-lg text-white/70">
            Real outcomes from people who took the right step years ago.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative flex flex-col hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[var(--color-gold)]/20" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>

              <p className="text-white/90 text-lg leading-relaxed italic mb-8 flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="mb-6 space-y-2 bg-white/5 p-4 rounded-xl">
                <p className="text-sm text-white/60"><strong className="text-[var(--color-gold)] font-medium">Problem:</strong> {testimonial.problem}</p>
                <p className="text-sm text-white/60"><strong className="text-[#25D366] font-medium">Result:</strong> {testimonial.result}</p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg font-serif">{testimonial.name}</h4>
                <p className="text-[var(--color-gold)] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

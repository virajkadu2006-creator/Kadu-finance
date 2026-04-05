"use client";

import { motion } from "framer-motion";
import { Award, Users, CheckCircle2 } from "lucide-react";

export default function About() {
  const steps = [
    { title: "Consultation", desc: "Understanding your deep monetary goals." },
    { title: "Strategy", desc: "Customizing a low-risk, high-return plan." },
    { title: "Execution", desc: "Securing your wealth with premium products." },
    { title: "Lifecycle Support", desc: "Yearly reviews and absolute claim assistance." }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-3">About The Advisor</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-navy)] mb-6 leading-tight">
              30 Years of Unwavering Trust & Financial Excellence
            </h3>
            
            <p className="text-lg text-[var(--color-charcoal)]/80 mb-8 leading-relaxed">
              Since 1994, Dilip Rupraoji Kadu has been the cornerstone of financial security for thousands of families in Amravati and Vidarbha. As a recognized MDRT qualified advisor, he doesn&apos;t just sell plans; he takes personal responsibility for your financial future.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 bg-[var(--color-warm-white)] p-4 rounded-xl border border-[var(--color-navy)]/5">
                <Award className="w-8 h-8 text-[var(--color-gold)] shrink-0" />
                <div>
                  <h4 className="font-bold text-[var(--color-navy)]">MDRT Qualified Performer</h4>
                  <p className="text-sm text-[var(--color-charcoal)]/70">Top 1% of financial professionals worldwide.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-[var(--color-warm-white)] p-4 rounded-xl border border-[var(--color-navy)]/5">
                <Users className="w-8 h-8 text-[var(--color-gold)] shrink-0" />
                <div>
                  <h4 className="font-bold text-[var(--color-navy)]">3000+ Secured Families</h4>
                  <p className="text-sm text-[var(--color-charcoal)]/70">Generations of wealth protected successfully.</p>
                </div>
              </div>
            </div>

            <a href="tel:8208315130" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-[var(--color-navy)] text-white font-semibold hover:bg-[var(--color-navy)]/90 transition-all shadow-lg hover:-translate-y-1">
              Speak Directly with Dilip ji
            </a>
          </motion.div>

          {/* Right Content - Process */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--color-navy)] rounded-3xl p-8 md:p-12 text-white relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)]/10 rounded-full blur-3xl -z-10" />
            
            <h3 className="text-2xl font-serif font-bold text-[var(--color-gold)] mb-8">The Proven 4-Step Process</h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--color-gold)] before:to-transparent">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-navy)] text-[var(--color-gold)] border-2 border-[var(--color-gold)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative left-0 md:left-1/2 -mt-1 md:mt-0">
                    <CheckCircle2 className="w-5 h-5 bg-[var(--color-navy)] rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                    <h4 className="font-bold text-white text-lg mb-1">{step.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

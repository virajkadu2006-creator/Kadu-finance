"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Landmark, Calculator, Baby, Home, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Financial Security Planning",
      description: "Comprehensive protection through tailored life and term insurance plans ensuring your family's future is bulletproof.",
      icon: Shield,
    },
    {
      title: "Wealth Creation",
      description: "Strategic mutual funds and SIP investments designed to beat inflation and maximize your long-term wealth growth.",
      icon: TrendingUp,
    },
    {
      title: "Retirement Planning",
      description: "Secure a stress-free retirement with dedicated pension strategies that maintain your lifestyle forever.",
      icon: Landmark,
    },
    {
      title: "Tax Saving Strategies",
      description: "Intelligent Section 80C and beyond optimizations to legally minimize your tax burden and retain more income.",
      icon: Calculator,
    },
    {
      title: "Child Future Planning",
      description: "Guaranteed education and marriage funds so your children's dreams are never compromised by financial constraints.",
      icon: Baby,
    },
    {
      title: "Real Estate Advisory",
      description: "Expert guidance for secure land and property investments that add tangible, generational assets to your portfolio.",
      icon: Home,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[var(--color-warm-white)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-3">Tailored Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-navy)] mb-6">Expert Solutions for Your Complete Financial Journey</h3>
          <p className="text-lg text-[var(--color-charcoal)]/80">
            We don&apos;t sell products; we architect lifelong financial security. Choose the solution that aligns with your current life stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-navy)]/5 hover:shadow-xl hover:border-[var(--color-gold)]/30 transition-all group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-navy)]/5 flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/10 transition-colors">
                <service.icon className="w-7 h-7 text-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors" />
              </div>
              
              <h4 className="text-xl font-bold text-[var(--color-navy)] mb-4">{service.title}</h4>
              <p className="text-[var(--color-charcoal)]/70 flex-grow mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <a href="tel:8208315130" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors">
                Discuss This Solution <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner inside Services */}
        <div className="mt-16 bg-[var(--color-navy)] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold)]/20 to-transparent opacity-50" />
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-serif font-bold mb-4">Not sure where to start?</h4>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">Book a no-obligation financial health check. We&apos;ll analyze your current standing and map out exactly what you need to hit your future goals.</p>
            <a href="https://wa.me/918208315130?text=Hi%20Dilip%20ji,%20I%20would%20like%20a%20financial%20health%20check" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20BE5C] transition-all shadow-lg hover:shadow-xl">
              Get Free Assessment via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

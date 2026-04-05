"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-warm-white)] via-white to-[#E8ECEF] -z-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-gold)]/5 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-navy)]/5 border border-[var(--color-navy)]/10">
              <ShieldCheck className="w-5 h-5 text-[var(--color-gold)]" />
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-navy)]">MDRT Qualified | 30+ Years Experience</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-serif leading-tight text-[var(--color-navy)]">
                Amravati&apos;s Most Trusted <span className="text-[var(--color-gold)]">Financial Advisor</span>
              </h1>
              <p className="text-lg lg:text-xl text-[var(--color-charcoal)]/80 max-w-xl leading-relaxed">
                Helping 3000+ families across Vidarbha secure their future with smart insurance and investment planning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8208315130" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-[var(--color-navy)] text-white font-semibold hover:bg-[var(--color-navy)]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a href="https://wa.me/918208315130?text=Hi%20Dilip%20ji,%20I%20want%20financial%20advice" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20BE5C] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>

            <div className="pt-8 border-t border-[var(--color-navy)]/10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[var(--color-charcoal)]/70">
              <span className="flex items-center gap-2">✓ 30+ Years</span>
              <span className="flex items-center gap-2">✓ 3000+ Clients</span>
              <span className="flex items-center gap-2">✓ 300+ Policies/Year</span>
              <span className="flex items-center gap-2">✓ MDRT Performer</span>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-[var(--color-gold)]/30 shadow-[0_0_40px_rgba(201,168,76,0.3)] animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[var(--color-gold)]/50 bg-white shadow-2xl overflow-hidden">
                <Image 
                  src="/images/dilip_portrait.png" 
                  alt="Dilip Rupraoji Kadu" 
                  fill 
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -right-4 bottom-12 bg-white px-6 py-3 rounded-2xl shadow-xl border border-[var(--color-gold)]/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[var(--color-gold)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-navy)]">Trusted Since</p>
                    <p className="text-[var(--color-gold)] font-bold">1994</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

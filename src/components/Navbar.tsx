"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-[var(--color-gold)]/10 shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-navy)] flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-[var(--color-gold)]" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-serif text-[var(--color-navy)] leading-tight">Dilip R. Kadu</h1>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-charcoal)]/80 font-semibold">Financial Advisor</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-[var(--color-charcoal)] hover:text-[var(--color-gold)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:8208315130"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-navy)] text-white text-sm font-semibold hover:bg-[var(--color-navy)]/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[var(--color-gold)]" />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[var(--color-navy)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="block text-base font-medium text-[var(--color-charcoal)] py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="tel:8208315130"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[var(--color-navy)] text-white font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 text-[var(--color-gold)]" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

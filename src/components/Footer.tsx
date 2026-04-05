import { MapPin, Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white pt-16 pb-8 border-t-[6px] border-[var(--color-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[var(--color-navy)]" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-serif leading-tight">Dilip R. Kadu</h2>
                <p className="text-[10px] uppercase tracking-widest text-[#E8ECEF] font-semibold">Financial Advisor</p>
              </div>
            </Link>
            <p className="text-[#E8ECEF]/80 text-sm leading-relaxed">
              Serving Amravati and the Vidarbha region for over 30 years. Dedicated to securing your wealth and building your future with absolute trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold text-[var(--color-gold)] mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-[#E8ECEF]/80">
              <li><Link href="#" className="hover:text-white hover:pl-1 transition-all">Home</Link></li>
              <li><Link href="#services" className="hover:text-white hover:pl-1 transition-all">My Services</Link></li>
              <li><Link href="#about" className="hover:text-white hover:pl-1 transition-all">About Dilip ji</Link></li>
              <li><Link href="#contact" className="hover:text-white hover:pl-1 transition-all">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold text-[var(--color-gold)] mb-6">Contact Details</h3>
            <ul className="space-y-4 text-sm text-[#E8ECEF]/80">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <a href="tel:8208315130" className="hover:text-white">+91 8208315130</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <a href="https://wa.me/918208315130" target="_blank" rel="noopener noreferrer" className="hover:text-white">Chat on WhatsApp</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <a href="mailto:contact@kadufinance.com" className="hover:text-white break-all">contact@kadufinance.com</a>
              </li>
            </ul>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-lg font-serif font-bold text-[var(--color-gold)] mb-6">Office Address</h3>
            <div className="flex items-start gap-3 text-sm text-[#E8ECEF]/80">
              <MapPin className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Malveshpura,<br />
                Near Main Market,<br />
                Achalpur, Amravati,<br />
                Maharashtra - 444806
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E8ECEF]/60">
          <p>© {new Date().getFullYear()} Dilip R. Kadu Financial Services. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for High Conversion
          </p>
        </div>
      </div>
    </footer>
  );
}

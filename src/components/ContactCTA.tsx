"use client";

import { MessageCircle, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactCTA() {
  const [formData, setFormData] = useState({ name: "", phone: "", goal: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fallback simply to open WhatsApp with the details if they submit the form
    const text = `Hi Dilip ji, my name is ${formData.name}. My contact number is ${formData.phone}. I am looking for help with: ${formData.goal}.`;
    window.open(`https://wa.me/918208315130?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-navy)]/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-warm-white)] rounded-[2.5rem] border border-[var(--color-gold)]/20 p-8 md:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-gold)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            
            {/* Left Box: Value Prop & Direct Action */}
            <div>
              <h2 className="text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm mb-3">Take Action</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-navy)] mb-6 leading-tight">
                Secure Your Family&apos;s Financial Future Today.
              </h3>
              
              <div className="flex items-center gap-2 mb-8 inline-flex px-4 py-2 bg-[#FF3B30]/10 text-[#FF3B30] rounded-full text-sm font-semibold border border-[#FF3B30]/20">
                <Clock className="w-4 h-4" />
                <span>Limited consultation slots available this week.</span>
              </div>

              <p className="text-lg text-[var(--color-charcoal)]/80 mb-10 leading-relaxed">
                Don&apos;t wait for a crisis to realize you needed a plan. Connect directly with Dilip ji for a confidential, no-nonsense financial consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918208315130?text=Hi%20Dilip%20ji,%20I%20want%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20BE5C] transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto text-lg">
                  <MessageCircle className="w-6 h-6" />
                  Chat on WhatsApp
                </a>
                <a href="tel:8208315130" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white text-[var(--color-navy)] border-2 border-[var(--color-navy)] font-semibold hover:bg-[var(--color-navy)]/5 transition-all w-full sm:w-auto text-lg">
                  <Phone className="w-6 h-6" />
                  Call Directly
                </a>
              </div>
            </div>

            {/* Right Box: Minimal Lead Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-[var(--color-navy)]/5">
              <h4 className="text-2xl font-serif font-bold text-[var(--color-navy)] mb-2">Request a Call Back</h4>
              <p className="text-[var(--color-charcoal)]/60 text-sm mb-8">Drop your details and we will reach out to you directly.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-navy)] mb-1">Full Name</label>
                  <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[var(--color-warm-white)] border-none focus:ring-2 focus:ring-[var(--color-gold)] transition-shadow text-[var(--color-charcoal)] outline-none" placeholder="e.g. Ramesh Kumar" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-navy)] mb-1">Phone Number</label>
                  <input type="tel" id="phone" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[var(--color-warm-white)] border-none focus:ring-2 focus:ring-[var(--color-gold)] transition-shadow text-[var(--color-charcoal)] outline-none" placeholder="+91 00000 00000" />
                </div>

                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-[var(--color-navy)] mb-1">Primary Financial Goal</label>
                  <select id="goal" required value={formData.goal} onChange={(e) => setFormData({...formData, goal: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[var(--color-warm-white)] border-none focus:ring-2 focus:ring-[var(--color-gold)] transition-shadow text-[var(--color-charcoal)] outline-none cursor-pointer">
                    <option value="" disabled>Select an option</option>
                    <option value="Life & Term Insurance">Life & Term Insurance</option>
                    <option value="Mutual Funds & SIP">Mutual Funds & SIP</option>
                    <option value="Retirement Planning">Retirement Planning</option>
                    <option value="Child's Future">Child&apos;s Future Education/Marriage</option>
                    <option value="General Financial Advice">General Financial Advice</option>
                  </select>
                </div>

                <button type="submit" className="w-full flex justify-center items-center gap-2 py-4 rounded-xl bg-[var(--color-navy)] text-white font-bold text-lg hover:bg-[var(--color-navy)]/90 transition-all shadow-md mt-2">
                  Submit Details
                  <Send className="w-5 h-5" />
                </button>
                <p className="text-center text-xs text-[var(--color-charcoal)]/50 mt-4">100% Secure & Confidential. We respect your privacy.</p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

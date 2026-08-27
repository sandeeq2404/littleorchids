import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { 
  CheckCircle, Phone, Building2, IndianRupee, 
  PackageCheck, Percent, Send, Sparkles 
} from "lucide-react";
import React from "react";

const details = [
  {
    icon: Building2,
    label: "Space Required",
    value: "2,000 sq. ft. min",
    color: "#00B4D8", // Cyan
  },
  {
    icon: IndianRupee,
    label: "Franchise Fee",
    value: "₹30,000 (One-time)",
    color: "#F59E0B", // Orange
  },
  {
    icon: Percent,
    label: "Royalty",
    value: "30% of Collections",
    color: "#EC4899", // Pink
  },
  {
    icon: PackageCheck,
    label: "Student Kit",
    value: "Provided by HQ",
    color: "#84CC16", // Green
  },
];

const whyUs = [
  "20+ years of trusted preschool experience",
  "Proven curriculum & comprehensive training",
  "Full operational support from HQ",
  "Strong brand recognition in Tamil Nadu",
  "Student kits & marketing materials provided",
  "Dedicated franchise team assistance",
];

const Franchise = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      await addDoc(collection(db, "franchiseEnquiries"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setSuccess("Thank you! Our franchise team will contact you shortly.");
      setForm({ name: "", phone: "", email: "", city: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] overflow-x-hidden font-sans pb-24">

      {/* ═══════════════════════════════════════════════════════
          HERO BANNER (Vibrant Orange Theme)
      ═══════════════════════════════════════════════════════ */}
      <section 
        className="relative pt-28 pb-32 px-6 overflow-hidden text-center flex flex-col items-center justify-center min-h-[45vh]"
        style={{ background: "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-20 bg-white" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white mt-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-bold uppercase tracking-widest">Franchise Opportunity</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-sm">
            Partner with Little Orchids
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Join a trusted preschool brand with over 20 years of experience. We are inviting passionate partners to grow and succeed with us.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          KEY METRICS (Floating Cards)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((d, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${d.color}15` }}
              >
                <d.icon className="w-7 h-7" style={{ color: d.color }} />
              </div>
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">{d.label}</p>
              <p className="font-extrabold text-slate-800 text-xl">{d.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAIN CONTENT — Why Us & Form
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

          {/* ── LEFT: Why Us (Cols 1-5) ── */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[3px] w-8 rounded-full bg-[#EC4899]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                The Advantage
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
              Why Partner With Us?
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              We don't just give you a brand name — we provide a complete, proven system and the ongoing support needed to run a thriving preschool.
            </p>

            <ul className="space-y-5 mb-12">
              {whyUs.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#84CC16] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {/* Contact Strip */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#00B4D8]" />
              </div>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">Direct Enquiry</p>
                <a href="tel:+919003124400" className="font-extrabold text-slate-800 text-xl hover:text-[#00B4D8] transition-colors block">
                  +91 90031 24400
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Enquiry Form (Cols 6-12) ── */}
          <div className="lg:col-span-7">
            <div id="enquiry-form" className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-slate-800 mb-2">Request Information</h3>
                <p className="text-slate-500">Fill in your details below to receive our complete franchise prospectus.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">Full Name *</label>
                    <input
                      type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">Phone Number *</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange} required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">Email Address *</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">City of Interest *</label>
                    <input
                      type="text" name="city" value={form.city} onChange={handleChange} required
                      placeholder="e.g., Chennai"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-extrabold mb-2">Message (Optional)</label>
                  <textarea
                    rows={4} name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us a bit about your background or any specific questions..."
                    className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:bg-white transition-all resize-none"
                  />
                </div>

                {success && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 text-emerald-700 font-bold text-sm">
                    {success}
                  </div>
                )}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 text-red-700 font-bold text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-[#F59E0B] text-white font-bold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Franchise Enquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Franchise;
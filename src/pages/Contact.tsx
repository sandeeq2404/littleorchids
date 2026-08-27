import { useState } from "react";
import { MapPin, Phone, Mail, Send, Clock, Sparkles } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import React from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSuccess("Message sent successfully! We'll respond within 24 hours.");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] overflow-x-hidden font-sans">

      {/* ═══════════════════════════════════════════════════════
          HERO BANNER (Trustworthy Blue Theme)
      ═══════════════════════════════════════════════════════ */}
      <section 
        className="relative pt-28 pb-32 px-6 overflow-hidden text-center flex flex-col items-center justify-center min-h-[40vh]"
        style={{ background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20 bg-white" />
        
        <div className="relative z-10 max-w-2xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-bold uppercase tracking-widest">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto leading-relaxed font-medium">
            Have a question about admissions, programs, or anything else? We're here to help.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAIN CONTENT — Info & Form
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

          {/* ── LEFT: Contact Info (Cols 1-5) ── */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[3px] w-8 rounded-full bg-[#3B82F6]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                Contact Details
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
              We'd Love to Hear from You
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12">
              Reach out directly or fill in the form, and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              {/* Address (Cyan) */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#00B4D8]/10 transition-transform group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-[#00B4D8]" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">Address</p>
                  <a
                    href="https://www.google.com/maps?q=34/2,+Pooram+Prakasam+Road,+Balaji+Nagar,+Royapettah,+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-800 font-bold text-base leading-relaxed hover:text-[#00B4D8] transition-colors"
                  >
                    34/2, Pooram Prakasam Road<br />
                    Balaji Nagar, Royapettah<br />
                    Chennai, Tamil Nadu 600014
                  </a>
                </div>
              </div>

              {/* Phone (Pink) */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#EC4899]/10 transition-transform group-hover:scale-110">
                  <Phone className="w-5 h-5 text-[#EC4899]" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                  <a href="tel:+919003124400" className="text-slate-800 font-bold text-base hover:text-[#EC4899] transition-colors">
                    +91 90031 24400
                  </a>
                </div>
              </div>

              {/* Email (Orange) */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#F59E0B]/10 transition-transform group-hover:scale-110">
                  <Mail className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                  <a href="mailto:info@littleorchids.in" className="text-slate-800 font-bold text-base hover:text-[#F59E0B] transition-colors">
                    info@littleorchids.in
                  </a>
                </div>
              </div>

              {/* Hours (Green) */}
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-[#84CC16]/10 transition-transform group-hover:scale-110">
                  <Clock className="w-5 h-5 text-[#84CC16]" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">School Hours</p>
                  <p className="text-slate-800 font-bold text-base leading-relaxed">
                    Mon – Fri: 9:30 AM – 12:30 PM<br />
                    Sat: 9:00 AM – 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form (Cols 6-12) ── */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-slate-800 mb-2">
                  Send a Message
                </h3>
                <p className="text-slate-500">
                  Fill out the form below and our admissions team will be in touch.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="Admission Enquiry">Admission Enquiry</option>
                      <option value="Fee Details">Fee Details</option>
                      <option value="School Timings">School Timings</option>
                      <option value="Campus Visit">Campus Visit</option>
                      <option value="Franchise">Franchise</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-extrabold mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:bg-white transition-all resize-none"
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
                  className="w-full mt-2 bg-[#3B82F6] text-white font-bold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FULL-WIDTH MAP
      ═══════════════════════════════════════════════════════ */}
      <section className="w-full h-[400px] md:h-[500px] relative mt-10">
        <iframe
          title="Little Orchids Location"
          src="https://www.google.com/maps?q=34/2,%20Pooram%20Prakasam%20Road,%20Balaji%20Nagar,%20Royapettah,%20Chennai,%20Tamil%20Nadu%20600014&output=embed"
          className="absolute inset-0 w-full h-full border-0 grayscale-[20%] contrast-[95%] hover:grayscale-0 transition-all duration-700"
          loading="lazy"
          allowFullScreen
        />
      </section>

    </div>
  );
};

export default Contact;
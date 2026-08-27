import { useState, useEffect } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import {
  CheckCircle,
  GraduationCap,
  Calendar,
  FileText,
  Clock,
  Send,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useScrollAnimation, useStaggerAnimation } from "../hooks/useScrollAnimation";
import { useSearchParams } from "react-router-dom";
import React from "react";

const guidelines = [
  "Registration for Playgroup, Pre-KG, LKG & UKG 2026–27 will be OFFLINE only.",
  "Eligibility: Minimum age of 3.5 years completed as on 31.03.2025 for LKG.",
  "Registration form must be submitted to block the seat.",
  "Xerox copy of Birth Certificate, Aadhaar Copy, and Passport size photo must be submitted.",
  "School timing: 9:30 AM to 12:30 PM.",
  "Registration Form & Fee details will be available at the school office.",
];

const infoCards = [
  {
    icon: Calendar,
    title: "Admission Period",
    value: "25 Mar – 31 Mar 2026",
    sub: "No extensions beyond this date",
    color: "#EC4899", // Pink
  },
  {
    icon: GraduationCap,
    title: "Classes Available",
    value: "Playgroup · Pre-KG · LKG · UKG",
    sub: "Academic Year 2026–2027",
    color: "#00B4D8", // Cyan
  },
  {
    icon: Clock,
    title: "School Hours",
    value: "9:30 AM – 12:30 PM",
    sub: "Monday to Friday",
    color: "#F59E0B", // Orange
  },
  {
    icon: FileText,
    title: "Documents Required",
    value: "Birth Certificate + Aadhaar",
    sub: "Xerox copies + Passport photo",
    color: "#84CC16", // Green
  },
];

const Admissions = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    dob: "",
    classApplying: "",
    phone: "",
    email: "",
  });

  /* ── Auto-fill program from URL param ── */
  useEffect(() => {
    const prog = searchParams.get("program");
    if (prog) {
      setFormData((prev) => ({ ...prev, classApplying: prog }));
      /* Scroll to form after a short delay */
      setTimeout(() => {
        document.getElementById("admissions-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 400);
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  /* ── Scroll animations ── */
  const heroAnim = useScrollAnimation();
  const infoAnim = useScrollAnimation();
  const guideAnim = useScrollAnimation();
  const formAnim = useScrollAnimation();
  const { setRef: setCardRef, visibleItems: cardVisible } = useStaggerAnimation(4);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await addDoc(collection(db, "admissions"), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      setSuccess("🎉 Your admission enquiry has been submitted successfully! We'll reach out within 24 hours.");
      setFormData({ parentName: "", childName: "", dob: "", classApplying: "", phone: "", email: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const animClass = (visible: boolean) =>
    `transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <div className="bg-[#F8FAFC] overflow-x-hidden font-sans pb-24">
      {/* ═══════════════════════════════════════════════════════
          HERO (Clean Cyan Theme)
      ═══════════════════════════════════════════════════════ */}
      <section 
        className="relative pt-28 pb-32 px-6 overflow-hidden text-center flex flex-col items-center justify-center min-h-[45vh]"
        style={{ background: "linear-gradient(135deg, #0096C7 0%, #00B4D8 100%)" }}
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[#48CAE4]" />
        
        <div
          ref={heroAnim.ref as React.RefObject<HTMLDivElement>}
          className={`relative z-10 max-w-4xl mx-auto text-center text-white ${animClass(heroAnim.isVisible)}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-bold uppercase tracking-widest">Admissions 2026–2027</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-sm">
            Begin Your Child's Journey
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Dear Parents, admissions are now open. All formalities must be completed strictly between{" "}
            <strong className="text-white">25th March and 31st March 2026.</strong>
          </p>
          <a
            href="#admissions-form"
            className="inline-flex items-center gap-3 bg-white text-[#0096C7] px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Apply Now <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INFO CARDS (Pakka Minimal)
      ═══════════════════════════════════════════════════════ */}
      <section
        ref={infoAnim.ref as React.RefObject<HTMLElement>}
        className={`relative z-20 -mt-8 px-6 ${animClass(infoAnim.isVisible)}`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, i) => (
            <div
              key={i}
              ref={setCardRef(i) as any}
              className={`group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 ${
                cardVisible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ backgroundColor: `${card.color}15` }}
              >
                <card.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" style={{ color: card.color }} />
              </div>
              <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">{card.title}</p>
              <p className="text-lg font-extrabold text-slate-800 mb-1">{card.value}</p>
              <p className="text-xs text-slate-500">{card.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAIN CONTENT — Guidelines + Minimal Form
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ── LEFT: Guidelines (Cols 1-5) ── */}
          <div
            ref={guideAnim.ref as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-5 ${animClass(guideAnim.isVisible)}`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[3px] w-8 rounded-full bg-[#84CC16]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                Registration Guidelines
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-8 leading-tight">
              Everything You Need to Know
            </h2>

            <ul className="space-y-4 mb-10">
              {guidelines.map((g, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#84CC16] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 leading-relaxed font-medium">{g}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-slate-600 leading-relaxed">
                Warm regards,
                <br />
                <span className="font-extrabold text-slate-800 text-lg">Management</span>
                <br />
                <span className="text-slate-500 text-sm font-bold uppercase tracking-wider">Little Orchids Preschool</span>
              </p>
            </div>
          </div>

          {/* ── RIGHT: Form (Cols 6-12) ── */}
          <div
            id="admissions-form"
            ref={formAnim.ref as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-7 ${animClass(formAnim.isVisible)}`}
          >
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Admission Enquiry</h2>
                <p className="text-slate-500">Fill in your details and we'll be in touch within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                      placeholder="Child's full name"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Class Applying For *
                    </label>
                    <select
                      name="classApplying"
                      value={formData.classApplying}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                    >
                      <option value="">Select Program</option>
                      <optgroup label="Core Programs">
                        <option value="Playgroup Program">Playgroup Program</option>
                        <option value="Pre-KG">Pre-KG</option>
                        <option value="LKG">LKG</option>
                        <option value="UKG">UKG</option>
                        <option value="Daycare Services">Daycare Services</option>
                      </optgroup>
                      <optgroup label="Enrichment Activities">
                        <option value="Bharatanatyam">Bharatanatyam</option>
                        <option value="Abacus Class">Abacus Class</option>
                        <option value="Carnatic Music">Carnatic Music</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Tuition Classes">Tuition Classes</option>
                        <option value="Karate Classes">Karate Classes</option>
                        <option value="Phonics Class">Phonics Class</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-extrabold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                    />
                  </div>
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
                  id="admission-submit-btn"
                  className="w-full mt-4 bg-[#EC4899] text-white font-bold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Admission Enquiry
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

export default Admissions;
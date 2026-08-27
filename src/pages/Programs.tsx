import { useNavigate } from "react-router-dom";
import { useReveal } from "../hooks/useScrollAnimation";
import {
  Baby, Sun, Music2, Calculator, Mic2, Leaf,
  BookOpen, Sword, Headphones, Clock, ArrowRight
} from "lucide-react";
import React from "react";

/* ─── Program data with Logo-Inspired Colors ─── */
const programs = [
  {
    id: "playgroup",
    title: "Playgroup Program",
    tag: "Core Program",
    description: "A joyful early learning experience that builds social skills, creativity, and school readiness in young children.",
    time: "9:00 AM – 12:00 PM",
    days: "Mon – Fri",
    icon: Baby,
    image: "/images/image1.webp",
    accent: "#00B4D8", // Butterfly Cyan
  },
  {
    id: "daycare",
    title: "Daycare Services",
    tag: "Full Day",
    description: "Safe, nurturing full-day care with loving supervision and engaging activities.",
    time: "8:00 AM – 6:00 PM",
    days: "Mon – Sat",
    icon: Sun,
    image: "/images/image2.webp",
    accent: "#EC4899", // Butterfly Pink
  },
  {
    id: "bharatanatyam",
    title: "Bharatanatyam",
    tag: "Dance",
    description: "Classical dance that builds grace, rhythm, posture, and cultural pride.",
    time: "5:30 PM – 6:30 PM",
    days: "Weekdays",
    icon: Music2,
    image: "/images/programs/barathanatyam.webp",
    accent: "#F59E0B", // Logo Yellow/Orange
  },
  {
    id: "abacus",
    title: "Abacus Class",
    tag: "Math & Logic",
    description: "Mental arithmetic training that sharpens concentration, memory and numerical speed.",
    time: "3:30 PM – 5:30 PM",
    days: "Weekdays",
    icon: Calculator,
    image: "/images/programs/abacus.webp",
    accent: "#84CC16", // Logo Bright Green
  },
  {
    id: "carnatic",
    title: "Carnatic Music",
    tag: "Music",
    description: "Vocal music training that nurtures talent, rhythm and artistic discipline.",
    time: "5:30 PM – 6:30 PM",
    days: "Weekdays",
    icon: Mic2,
    image: "/images/programs/carnatic.webp",
    accent: "#EF4444", // Logo Red
  },
  {
    id: "yoga",
    title: "Yoga",
    tag: "Wellness",
    description: "Yoga sessions promoting flexibility, calmness, focus and emotional balance.",
    time: "4:30 PM – 5:30 PM",
    days: "Weekdays",
    icon: Leaf,
    image: "/images/programs/yoga.webp",
    accent: "#14B8A6", // Logo Teal/Green
  },
  {
    id: "tuition",
    title: "Tuition Classes",
    tag: "Academic",
    description: "Personalised academic support to strengthen understanding and exam performance.",
    time: "6:30 PM – 7:30 PM",
    days: "Weekdays",
    icon: BookOpen,
    image: "/images/programs/tution.webp",
    accent: "#00B4D8", // Butterfly Cyan
  },
  {
    id: "karate",
    title: "Karate Classes",
    tag: "Martial Arts",
    description: "Builds discipline, confidence, strength and self-defense skills.",
    time: "6:30 PM – 7:30 PM",
    days: "Weekdays",
    icon: Sword,
    image: "/images/programs/karate.webp",
    accent: "#EC4899", // Butterfly Pink
  },
  {
    id: "phonics",
    title: "Phonics Class",
    tag: "Language",
    description: "Foundational language program improving reading, pronunciation and communication.",
    time: "3:30 PM – 4:30 PM",
    days: "Weekdays",
    icon: Headphones,
    image: "/images/programs/phonics.webp",
    accent: "#F59E0B", // Logo Yellow/Orange
  },
];

/* ─────────────────────────────────────────────
   PAKKA MINIMAL CARD COMPONENT
───────────────────────────────────────────── */
const ProgramCard = ({
  p, onClick, delay,
}: {
  p: typeof programs[0];
  onClick: () => void;
  delay: number;
}) => {
  const ref = useReveal();
  const Icon = p.icon;

  return (
    <div
      ref={ref}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className="reveal group cursor-pointer bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 flex flex-col h-full"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Minimal Image Area */}
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Sleek Frosted Tag with Logo Accent Color */}
        <div 
          className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm"
          style={{ color: p.accent }}
        >
          {p.tag}
        </div>
      </div>

      {/* Clean Content Area */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="font-extrabold text-slate-800 text-xl mb-3 flex items-center gap-3">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: `${p.accent}15` }}
          >
            <Icon className="w-4 h-4" style={{ color: p.accent }} />
          </div>
          {p.title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
          {p.description}
        </p>

        {/* Minimal Footer Info */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs font-bold text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" style={{ color: p.accent }} />
            <span className="text-slate-600">{p.time}</span>
          </div>
          <span className="uppercase tracking-widest text-[10px]">{p.days}</span>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
const OurPrograms = () => {
  const navigate = useNavigate();
  const heroRef = useReveal();
  const gridRef = useReveal();

  const goToAdmissions = (programTitle: string) => {
    navigate(`/admissions?program=${encodeURIComponent(programTitle)}`);
  };

  return (
    <div className="bg-[#F8FAFC] overflow-x-hidden font-sans pb-24">

      {/* ══════════════════════════════════════════════════════
          PLAYFUL BUT PROFESSIONAL HERO (Red Theme)
      ══════════════════════════════════════════════════════ */}
      <section 
        className="relative pt-28 pb-32 px-6 overflow-hidden text-center flex flex-col items-center justify-center min-h-[45vh]"
        style={{ background: "linear-gradient(135deg, #DC2626 0%, #EF4444 100%)" }}
      >
        {/* Soft Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-30"
             style={{ background: "#F87171" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20"
             style={{ background: "#FFFFFF" }} />

        <div ref={heroRef} className="reveal relative z-10 max-w-3xl mx-auto mt-10">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-xs font-bold uppercase tracking-widest bg-white/20 border border-white/30 text-white backdrop-blur-md shadow-sm">
            <BookOpen className="w-4 h-4 text-white" />
            Our Programs
          </div>
          <h1 className="text-white font-extrabold leading-tight mb-5 drop-shadow-sm"
              style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-0.02em" }}>
            Every Child Has a<br />Unique Gift to Discover
          </h1>
          <p className="text-white/90 max-w-xl mx-auto leading-relaxed text-lg font-medium">
            From core schooling to co-curricular enrichment, explore programs designed to nurture curiosity, confidence, and creativity.
          </p>
        </div>
        
        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#F8FAFC"/> 
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLEAN PROGRAMS GRID
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-20 -mt-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={gridRef} className="reveal text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="h-[3px] w-8 rounded-full bg-[#EF4444]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                Select a program to enroll
              </span>
              <span className="h-[3px] w-8 rounded-full bg-[#F59E0B]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <ProgramCard
                key={p.id}
                p={p}
                onClick={() => goToAdmissions(p.title)}
                delay={i * 100} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MINIMAL CTA BANNER (Red/Orange Theme)
      ══════════════════════════════════════════════════════ */}
      <section className="mt-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div 
            className="reveal flex flex-col md:flex-row items-center justify-between rounded-3xl p-10 md:p-14 shadow-xl relative overflow-hidden" 
            ref={useReveal()}
            style={{ background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)" }}
          >
            {/* White overlay accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
              <h2 className="text-white font-extrabold mb-3" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
                Ready to Enroll Your Child?
              </h2>
              <p className="text-white/90 text-lg max-w-lg font-medium">
                Admissions are open for 2026–27. Let's start building a bright future together.
              </p>
            </div>

            <button
              onClick={() => navigate("/admissions")}
              className="relative z-10 flex-shrink-0 group inline-flex items-center gap-2 bg-white text-[#DC2626] px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              Start Admissions <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurPrograms;
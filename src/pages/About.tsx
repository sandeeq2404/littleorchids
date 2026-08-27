import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Star, Sparkles, BookOpen, Music, Dumbbell, Users, Award, ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useScrollAnimation";

/* ─── Animated Counter Hook ─── */
const AnimatedNumber = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

/* ─── Timeline milestones (Logo Colors) ─── */
const milestones = [
  { year: "2003", title: "Founded",         desc: "Little Orchids opened its doors with a vision to nurture curious young minds.", color: "#84CC16" },
  { year: "2008", title: "First Expansion", desc: "Added co-curricular programs: Karate, Music and Bharathanatyam.", color: "#00B4D8" },
  { year: "2015", title: "10,000 Students", desc: "Crossed the milestone of 10,000 children nurtured over the years.", color: "#EC4899" },
  { year: "2023", title: "20 Years Strong", desc: "Celebrating two decades of joyful, holistic early education.", color: "#F59E0B" },
];

/* ─── Upgraded Programs / Activities ─── */
const programs = [
  { icon: BookOpen, label: "Phonics & Abacus", desc: "Building strong foundational reading skills and lightning-fast mental math abilities.", color: "#84CC16" },
  { icon: Music,    label: "Carnatic Music",   desc: "Fostering cultural appreciation and vocal discipline through classical rhythms.", color: "#EC4899" },
  { icon: Dumbbell, label: "Karate & Yoga",    desc: "Promoting physical fitness, flexibility, mindfulness, and essential self-defense.", color: "#00B4D8" },
  { icon: Users,    label: "Bharathanatyam",   desc: "Expressive classical dance classes that enhance coordination and grace.", color: "#F59E0B" },
  { icon: Star,     label: "Daycare Services", desc: "A safe, nurturing, and engaging home-away-from-home for your little ones.", color: "#84CC16" },
  { icon: Award,    label: "Tuition Classes",  desc: "Personalized academic support to ensure every child reaches their full potential.", color: "#EC4899" },
];

const About = () => {
  const heroRef       = useReveal();
  const founderRef    = useReveal();
  const founderImgRef = useReveal();
  const timelineRef   = useReveal();
  const activitiesRef = useReveal();
  const facilitiesRef = useReveal();

  return (
    <div className="bg-[#F8FAFC] overflow-x-hidden font-sans pb-20">

      {/* ══════════════════════════════════════════════════════
          HERO — Fresh Green Theme (No Banner Image)
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative pt-28 pb-36 px-6 overflow-hidden text-center flex flex-col items-center justify-center min-h-[44vh]"
        style={{ background: "linear-gradient(135deg, #84CC16 0%, #65A30D 100%)" }}
      >
        {/* Soft background light glows */}
        <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full blur-[110px] pointer-events-none opacity-25 bg-white" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none opacity-20 bg-[#EC4899]" />

        <div
          ref={heroRef}
          className="reveal relative z-10 max-w-3xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-xs font-bold uppercase tracking-widest bg-white/20 border border-white/30 text-white backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-white" /> Since 2003
          </div>
          <h1
            className="text-white font-extrabold leading-tight mb-5 drop-shadow-sm"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-0.02em" }}
          >
            About Little Orchids
          </h1>
          <p className="text-white/95 max-w-2xl mx-auto leading-relaxed text-lg md:text-xl font-medium">
            Two decades of nurturing curious minds, building confident hearts, and creating a joyful home for every child.
          </p>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FLOATING STATS BAR (Dynamic Counter)
      ══════════════════════════════════════════════════════ */}
      <section className="relative z-20 -mt-12 max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row justify-around items-center text-center gap-8 border border-gray-100">
          {[
            { end: 2003, label: "Year Founded", isYear: true, color: "#84CC16" },
            { end: 10000, suffix: "+", label: "Students Nurtured", color: "#00B4D8" },
            { end: 20, suffix: "+", label: "Expert Faculty", color: "#EC4899" },
          ].map((stat, i) => (
            <div key={i} className="w-full md:w-1/3">
              <p className="font-extrabold mb-1" style={{ fontSize: "clamp(2.5rem,4vw,3rem)", color: stat.color }}>
                {stat.isYear ? stat.end : <AnimatedNumber end={stat.end} suffix={stat.suffix} />}
              </p>
              <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOUNDER SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div ref={founderImgRef} className="reveal-left relative">
            <div className="absolute -top-8 -left-8 w-72 h-72 rounded-full opacity-30 pointer-events-none bg-[#84CC16] blur-3xl" />
            <img
              src="/images/founder_nima.webp"
              alt="Mrs. Nima Radhakrishnan — Founder"
              className="relative z-10 w-full rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border-4 border-white"
              style={{ height: 460, objectFit: "cover", objectPosition: "left center" }}
            />
            <div className="absolute z-20 -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <p className="text-xs text-[#84CC16] font-extrabold uppercase tracking-widest mb-1">Founder & Director</p>
              <p className="font-extrabold text-slate-800 text-xl leading-tight">Mrs. Nima Radhakrishnan</p>
              <p className="text-sm text-slate-400 font-bold mt-1">M.A., MTT, DYT</p>
            </div>
          </div>

          <div ref={founderRef} className="reveal-right">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-[3px] w-8 rounded-full bg-[#84CC16]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Leadership</span>
            </div>
            <h2 className="font-extrabold text-slate-800 leading-tight mb-6"
                style={{ fontSize: "clamp(2rem,3vw,2.8rem)" }}>
              Nurturing Young Minds with Purpose
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5 text-lg">
              With over a decade of experience in early childhood education, Mrs. Nima Radhakrishnan’s philosophy centers on cultivating emotional well-being and unshakable confidence in every child.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-lg">
              Under her compassionate guidance, Little Orchids has blossomed into a premier educational community where children feel entirely safe, immensely valued, and inspired to explore.
            </p>
            <blockquote className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-[#84CC16]">
              <p className="italic text-slate-600 font-medium leading-relaxed">
                "Nurturing curiosity is the foundation of lifelong learning. Every child deserves to feel seen, heard, and encouraged to shine."
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROGRAMS & ACTIVITIES (Pakka Minimal)
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div ref={activitiesRef} className="reveal max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="h-[3px] w-8 rounded-full bg-[#84CC16]" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Holistic Education</span>
              </div>
              <h2 className="font-extrabold text-slate-800" style={{ fontSize: "clamp(2rem,3vw,2.8rem)" }}>
                Our Signature Programs
              </h2>
            </div>
            <Link to="/programs" className="group inline-flex items-center gap-2 bg-[#84CC16] hover:bg-[#65A30D] text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg">
              View All Programs <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <div key={i} className="group bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ backgroundColor: `${prog.color}15` }}
                >
                  <prog.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" style={{ color: prog.color }} />
                </div>
                <h3 className="font-extrabold text-xl text-slate-800 mb-3">{prog.label}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TIMELINE SECTION (Logo Colors)
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div ref={timelineRef} className="reveal max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-[3px] w-8 rounded-full bg-[#84CC16]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Our Journey</span>
              <span className="h-[3px] w-8 rounded-full bg-[#EC4899]" />
            </div>
            <h2 className="font-extrabold text-slate-800" style={{ fontSize: "clamp(2rem,3vw,2.8rem)" }}>
              Milestones & Memories
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-4 -mt-4 z-0 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${m.color}15` }}
                />
                <div className="relative z-10">
                  <div className="font-extrabold text-3xl mb-3" style={{ color: m.color }}>{m.year}</div>
                  <h3 className="text-slate-800 font-extrabold text-lg mb-2">{m.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FACILITIES (Clean & Minimal)
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div ref={facilitiesRef} className="reveal max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-[3px] w-8 rounded-full bg-[#84CC16]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Our Campus</span>
              <span className="h-[3px] w-8 rounded-full bg-[#00B4D8]" />
            </div>
            <h2 className="font-extrabold text-slate-800" style={{ fontSize: "clamp(2rem,3vw,2.8rem)" }}>
              A World Built for Children
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: "/images/photo3.webp",
                title: "Modern Classrooms",
                desc: "Bright, spacious, and child-friendly environments designed to encourage vibrant exploration and interactive learning.",
                badge: "Learning Spaces",
                color: "#EC4899",
              },
              {
                img: "/images/photo5.webp",
                title: "Outdoor Play Area",
                desc: "A safe, energetic outdoor campus where children develop physical strength, coordination, and lasting friendships.",
                badge: "Play & Grow",
                color: "#84CC16",
              },
            ].map((f, i) => (
              <div key={i} className="group bg-white rounded-3xl border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-widest shadow-sm"
                    style={{ color: f.color }}
                  >
                    {f.badge}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-extrabold text-slate-800 text-2xl mb-3">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
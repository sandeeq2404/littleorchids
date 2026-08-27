import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // <-- Make sure this is here
import { BookOpen, GraduationCap, ShieldCheck, Award, ArrowRight } from "lucide-react"; // <-- Make sure ArrowRight is here
/* ─── Hero Data (Images & Dynamic Quotes) ─── */
const heroData = [
  {
    image: "/images/image1.webp",
    line1: "A joyful place",
    line2: "where little minds",
    highlight: "bloom",
    hlColor: "bg-[#84CC16]", // Logo Green
  },
  {
    image: "/images/image2.webp",
    line1: "Sparking curiosity",
    line2: "in every little",
    highlight: "learner",
    hlColor: "bg-[#00B4D8]", // Logo Cyan
  },
  {
    image: "/images/image3.webp",
    line1: "Building confidence",
    line2: "one step at a",
    highlight: "time",
    hlColor: "bg-[#F59E0B]", // Logo Orange
  },
];

const Home: React.FC = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % heroData.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════
          HERO (Ultra-Minimal Cinematic Layout with Buttons)
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full h-[95vh] min-h-[650px] flex items-start">
        
        {/* Background Images with Subtle Shadow Overlay */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          {heroData.map((data, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                slide === i ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={data.image}
                alt={`Campus slide ${i + 1}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              {/* Subtle shadow overlay for perfect text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
            </div>
          ))}
        </div>

        {/* Foreground Content - Shifted Upwards */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-start pt-32 sm:pt-40 md:pt-48">
          
          {/* Dynamic Text Container */}
          <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]">
            {heroData.map((data, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col justify-start transition-all duration-1000 ease-in-out ${
                  slide === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-extrabold text-white drop-shadow-2xl leading-[1.05] tracking-tight">
                  {data.line1} <br />
                  {data.line2} <br />
                  <span className="relative inline-block z-10 mt-2 md:mt-3">
                    {data.highlight}
                    {/* Colorful highlight behind the word */}
                    <span className={`absolute bottom-2 md:bottom-4 left-0 w-full h-4 md:h-6 ${data.hlColor} -z-10 rounded-sm`}></span>
                  </span>
                </h1>
              </div>
            ))}
          </div>

          {/* Static Subtitle & Buttons */}
          <div className="mt-4 md:mt-6 max-w-2xl">
            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-8 drop-shadow-md">
              A nurturing space for young children, offering programs that inspire confidence, curiosity, and lifelong joy.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/programs"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-[#EC4899] hover:bg-[#D93885] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(236,72,153,0.3)] hover:shadow-[0_15px_40px_rgba(236,72,153,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/admissions"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Admissions 2026–27
              </Link>
            </div>
          </div>

          {/* Slide dots */}
          <div className="absolute bottom-10 left-6 flex gap-3 z-20">
            {heroData.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: slide === i ? 32 : 10,
                  height: 10,
                  background: slide === i ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STATS (Minimal & Clean)
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white relative z-20">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {[
            { value: "2003",    label: "Year Established", color: "#00B4D8" },
            { value: "10,000+", label: "Students Enrolled", color: "#EC4899" },
            { value: "20+",     label: "Expert Faculty", color: "#F59E0B" },
          ].map((s, i) => (
            <div key={i} className="pt-6 md:pt-0 flex flex-col items-center justify-center">
              <p className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2" style={{ color: s.color }}>
                {s.value}
              </p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[3px] w-8 rounded-full bg-[#84CC16]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
                About Us
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-8">
              Welcome to Little Orchids
            </h2>
            <p className="text-slate-500 leading-relaxed text-lg mb-6">
              Little Orchids is a nurturing learning space for young children, offering Play Group,
              Pre-KG, LKG, and UKG programs along with enriching activities such as Karate,
              Bharathanatyam, Abacus, Carnatic Music, Yoga, Phonics, and Daycare.
            </p>
            <p className="text-slate-500 leading-relaxed text-lg">
              Our approach blends academics, creativity, physical development, and emotional
              well-being—helping every child grow with confidence, curiosity, and joy.
            </p>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-3xl border-l-4 shadow-sm" style={{ borderColor: "#F59E0B" }}>
            <h3 className="text-xl font-extrabold text-slate-800 mb-4">Founder's Message</h3>
            <p className="text-slate-600 leading-relaxed text-base italic mb-6">
              "With over a decade of experience in early childhood education, our philosophy centers on the belief 
              that nurturing curiosity is the foundation of lifelong learning. Every child deserves a home of joyful 
              discovery—where they feel seen, heard, and encouraged to shine."
            </p>
            <div>
              <span className="font-extrabold text-slate-800 block text-lg">
                Mrs. Nima Radhakrishnan
              </span>
              <span className="text-sm font-bold text-[#F59E0B]">M.A., MTT, DYT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHY LITTLE ORCHIDS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="h-[3px] w-8 rounded-full bg-[#00B4D8]" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
              Why Choose Us
            </span>
            <span className="h-[3px] w-8 rounded-full bg-[#EC4899]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Why Little Orchids?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed mb-16">
            We provide a holistic, joyful, and secure environment that nurtures every child's
            intellectual, emotional, and physical growth.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: BookOpen,    color: "#00B4D8", title: "Holistic Learning",       desc: "Balanced development through academics, creativity, and physical activities." },
              { Icon: GraduationCap, color: "#F59E0B", title: "Experienced Faculty",     desc: "Caring, trained educators focused on each child's unique growth." },
              { Icon: ShieldCheck,   color: "#84CC16", title: "Safe & Nurturing",        desc: "Secure, hygienic, and child-friendly infrastructure." },
              { Icon: Award,         color: "#EC4899", title: "After-School Enrichment", desc: "Wide range of co-curricular programs under one roof." },
            ].map(({ Icon, color, title, desc }, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl p-8 text-left border border-gray-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-sm transition-transform duration-500 group-hover:scale-110" 
                >
                  <Icon className="w-6 h-6" style={{ color: color }} />
                </div>
                <h3 className="text-lg font-extrabold mb-3 text-slate-800">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
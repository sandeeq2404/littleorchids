import React from "react";
import { Calendar, Clock, MapPin, Youtube, Sparkles } from "lucide-react";
import { useReveal } from "../hooks/useScrollAnimation"; 

const NewsEvents = () => {
  const event = {
    title: "Annual Day Celebration",
    date: "March 15, 2026",
    time: "04:00 PM - 8:00 PM",
    location: "RR Sabha, Mylapore",
    description:
      "Join us for our Annual Day celebration filled with spectacular performances, awards, and joyful moments as we celebrate the milestones of our little orchids.",
    youtubeLink: "https://www.youtube.com/live/Q0h89FlGCG4?si=vyft8ufI8Fjw7eS4",
  };

  const cardRef = useReveal();

  const getVideoId = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.searchParams.get("v")) return parsedUrl.searchParams.get("v");
      if (parsedUrl.hostname === "youtu.be") return parsedUrl.pathname.slice(1);
      if (parsedUrl.pathname.includes("/live/")) return parsedUrl.pathname.split("/live/")[1];
      return "";
    } catch {
      return "";
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans pb-24 overflow-x-hidden">
      
      {/* ═══════════════════════════════════════════════════════
          HERO BANNER (Vibrant Violet Theme)
      ═══════════════════════════════════════════════════════ */}
      <section 
        className="relative pt-28 pb-40 px-6 overflow-hidden text-center flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)" }}
      >
        {/* Soft Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-30 bg-[#A855F7]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-20 bg-white" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white mt-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-bold uppercase tracking-widest">News & Events</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-sm">
            Latest Updates
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Stay connected with the latest happenings, celebrations, and announcements from Little Orchids.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MAIN EVENT CARD
      ═══════════════════════════════════════════════════════ */}
      <section className="px-6 relative z-20 -mt-24">
        <div 
          ref={cardRef}
          className="reveal max-w-5xl mx-auto bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col"
        >
          {/* 🎥 YouTube Video Area */}
          <div className="w-full aspect-video bg-slate-100 relative">
            {getVideoId(event.youtubeLink) ? (
              <iframe
                src={`https://www.youtube.com/embed/${getVideoId(event.youtubeLink)}`}
                title={event.title}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                Video Unavailable
              </div>
            )}
          </div>

          {/* 📄 Event Details Area */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
              
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-4">
                  Live Stream Event
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4 leading-tight">
                  {event.title}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
                  {event.description}
                </p>
              </div>

              {/* Watch Button */}
              <div className="flex-shrink-0">
                <a
                  href={event.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <Youtube className="w-6 h-6 group-hover:animate-pulse" />
                  Watch on YouTube
                </a>
              </div>
            </div>

            {/* Quick Info Grid (Logo Colors for contrast) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              
              {/* Date (Orange) */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#F59E0B]/10 transition-transform duration-300 group-hover:scale-110">
                  <Calendar className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">Date</p>
                  <p className="font-bold text-slate-800 text-base">{event.date}</p>
                </div>
              </div>

              {/* Time (Cyan) */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#00B4D8]/10 transition-transform duration-300 group-hover:scale-110">
                  <Clock className="w-6 h-6 text-[#00B4D8]" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">Time</p>
                  <p className="font-bold text-slate-800 text-base">{event.time}</p>
                </div>
              </div>

              {/* Location (Green) */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#84CC16]/10 transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-[#84CC16]" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">Location</p>
                  <p className="font-bold text-slate-800 text-base">{event.location}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default NewsEvents;
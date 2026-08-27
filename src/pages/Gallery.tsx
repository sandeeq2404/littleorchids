import React, { useState, useEffect, useCallback } from "react";
import { Search, X, ChevronLeft, ChevronRight, ImageIcon, Sparkles } from "lucide-react";
import { useReveal } from "../hooks/useScrollAnimation";

type GalleryEvent = {
  title: string;
  coverImage: string;
  images: string[];
  color: string;
};

const Gallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroRef = useReveal();
  const gridRef = useReveal();

  /* ─── Mock Data with Logo Accent Colors ─── */
  const events: GalleryEvent[] = [
    {
      title: "Annual Day Celebration 2026",
      coverImage: "/images/image2.webp",
      color: "#EC4899", // Pink
      images: [
        "/images/photo1.webp",
        "/images/photo2.webp",
        "/images/photo3.webp",
      ],
    },
    {
      title: "Sports Meet & Yoga Day",
      coverImage: "/images/image3.webp",
      color: "#00B4D8", // Cyan
      images: [
        "/images/photo3.webp",
        "/images/image1.webp",
      ],
    },
    {
      title: "Cultural Festival",
      coverImage: "/images/photo5.webp",
      color: "#F59E0B", // Orange
      images: [
        "/images/photo5.webp",
        "/images/image2.webp",
      ],
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextImage = useCallback(() => {
    if (!selectedEvent) return;
    setCurrentIndex((prev) =>
      prev < selectedEvent.images.length - 1 ? prev + 1 : 0
    );
  }, [selectedEvent]);

  const prevImage = useCallback(() => {
    if (!selectedEvent) return;
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : selectedEvent.images.length - 1
    );
  }, [selectedEvent]);

  /* ─── Keyboard Navigation for Lightbox ─── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedEvent) return;
      if (e.key === "Escape") setSelectedEvent(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEvent, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-24 overflow-x-hidden">
      
      {/* ═══════════════════════════════════════════════════════
          HERO BANNER (Orange to Pink Theme)
      ═══════════════════════════════════════════════════════ */}
      <section 
        className="relative pt-28 pb-32 px-6 overflow-hidden text-center flex flex-col items-center justify-center min-h-[40vh]"
        style={{ background: "linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)" }}
      >
        {/* Soft Background Blobs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20 bg-white" />
        
        <div
          ref={heroRef}
          className="reveal relative z-10 max-w-3xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-bold uppercase tracking-widest">Our Memories</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-sm">
            Glimpses of Joy
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Explore the beautiful moments, celebrations, and everyday learning experiences at Little Orchids.
          </p>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SEARCH BAR
      ═══════════════════════════════════════════════════════ */}
      <div className="relative z-20 -mt-8 max-w-2xl mx-auto px-6">
        <div className="relative shadow-[0_12px_40px_rgb(0,0,0,0.08)] rounded-full">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search albums (e.g., Annual Day)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-full bg-white border-none text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-[#00B4D8]/20 transition-all font-medium text-lg"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          GALLERY GRID
      ═══════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No albums found matching "{searchTerm}".</p>
          </div>
        ) : (
          <div ref={gridRef} className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedEvent(event);
                  setCurrentIndex(0);
                }}
                className="group cursor-pointer bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden"
              >
                {/* Cover Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Action Button on Hover */}
                  <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white text-slate-800 p-3 rounded-full shadow-lg">
                    <Search className="w-5 h-5" style={{ color: event.color }} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-800 mb-3 group-hover:text-[#00B4D8] transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                    <ImageIcon className="w-4 h-4" style={{ color: event.color }} />
                    <span>{event.images.length} {event.images.length === 1 ? "Photo" : "Photos"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════════════════════════
          MODAL LIGHTBOX
      ═══════════════════════════════════════════════════════ */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm">
          
          {/* Header & Close Button */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 bg-gradient-to-b from-black/50 to-transparent z-10">
            <h3 className="text-white font-bold text-lg drop-shadow-md">
              {selectedEvent.title}
            </h3>
            <button
              onClick={() => setSelectedEvent(null)}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all backdrop-blur-md"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-all backdrop-blur-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div 
            className="relative flex items-center justify-center w-full h-full p-4 md:p-16"
            onClick={() => setSelectedEvent(null)} // Click outside to close
          >
            <img
              src={selectedEvent.images[currentIndex]}
              alt={`${selectedEvent.title} - ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 z-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-all backdrop-blur-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Footer Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest">
            {currentIndex + 1} / {selectedEvent.images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
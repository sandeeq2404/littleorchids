import React, { useState } from "react";

type GalleryEvent = {
  title: string;
  coverImage: string;
  images: string[];
};

const Gallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const events: GalleryEvent[] = [
    {
      
      title: "Annual Day Celebration 2026",
      coverImage: "/images/image2.webp",
      images: [
        "/images/photo1.webp",
        "/images/photo2.webp",
        "/images/photo3.webp",
      ],
    },
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const nextImage = () => {
    if (!selectedEvent) return;
    setCurrentIndex((prev) =>
      prev < selectedEvent.images.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    if (!selectedEvent) return;
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : selectedEvent.images.length - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔝 Banner */}
      <div className="w-full h-[300px]">
        <img
          src="images/image1.webp"
          alt="Gallery Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔍 Search */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <input
          type="text"
          placeholder="Search by event name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* 🖼️ Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedEvent(event);
              setCurrentIndex(0);
            }}
            className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={event.coverImage}
              alt={event.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* 🪟 Modal Slider */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Close */}
          <button
            onClick={() => setSelectedEvent(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-4xl font-bold"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={selectedEvent.images[currentIndex]}
            alt="Event"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

          {/* Next */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-4xl font-bold"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;







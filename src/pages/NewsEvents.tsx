import { Calendar, Clock, MapPin } from "lucide-react";

const NewsEvents = () => {
  const event = {
    title: "Annual Day Celebration",
    date: "March 15, 2026",
    time: "04:00 PM - 8:00 PM",
    location: "RR Sabha, Mylapore",
    description:
      "Join us for our Annual Day celebration filled with performances, awards, and joyful moments.",
    youtubeLink: "https://www.youtube.com/live/Q0h89FlGCG4?si=vyft8ufI8Fjw7eS4",
  };

  const getVideoId = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    // Standard watch URL
    if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v");
    }

    // youtu.be short link
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }

    // live link
    if (parsedUrl.pathname.includes("/live/")) {
      return parsedUrl.pathname.split("/live/")[1];
    }

    return "";
  } catch {
    return "";
  }
};

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* 🎥 YouTube Video */}
        <div className="w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${getVideoId(event.youtubeLink)}`}
            title="YouTube video"
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        </div>

        {/* 📄 Event Details */}
        <div className="p-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            {event.title}
          </h2>

          <p className="text-gray-600">{event.description}</p>

          <div className="space-y-2 text-gray-700">

            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-red-500" />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-500" />
              <span>{event.time}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>{event.location}</span>
            </div>

          </div>

          {/* ▶ Watch Live Button */}
          <a
            href={event.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition"
          >
            ▶ Watch on YouTube
          </a>
        </div>

      </div>
    </div>
  );
};

export default NewsEvents;
import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

type CalendarEvent = {
  date: number;
  type: "holiday" | "celebration" | "working";
  title?: string;
  description?: string;
};

const NewsEvents = () => {
  const upcomingEvents = [
    {
      title: "Annual Day Celebration",
      date: "March 15, 2024",
      time: "04:00 PM - 8:00 PM",
      location: "RR Sabha Mylapore",
      category: "Event",
      mapLink: "https://www.google.com/maps/search/?api=1&query=RR+Sabha+Mylapore",
    },
  ];

  const calendarEvents: CalendarEvent[] = [
    {
      date: 5,
      type: "holiday",
      title: "Public Holiday",
      description: "School closed due to public holiday.",
    },
    {
      date: 14,
      type: "celebration",
      title: "Children’s Day Celebration",
      description: "Fun activities, performances, and games for students.",
    },
    {
      date: 23,
      type: "celebration",
      title: "Sports Day",
      description: "Annual sports events and competitions.",
    },
  ];

  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const getEventForDate = (date: number) =>
    calendarEvents.find((event) => event.date === date);

  const daysInFebruary = 28;

  return (
    <div className="bg-white">
      {/* 🔹 Upcoming Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-pink-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full">
                    {event.category}
                  </span>
                  <Calendar className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
>
                  <MapPin className="h-4 w-4" />
                    View on Google Maps
                      </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📅 Event Calendar Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Event Calendar — February
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 📆 Calendar Grid */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="grid grid-cols-7 gap-4 text-center font-semibold text-gray-600 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-4">
                {Array.from({ length: daysInFebruary }, (_, i) => {
                  const date = i + 1;
                  const event = getEventForDate(date);

                  return (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`relative w-10 h-10 mx-auto rounded-full flex items-center justify-center font-medium transition-all
                        ${
                          selectedDate === date
                            ? "bg-red-500 text-white"
                            : "bg-gray-100 hover:bg-red-100 text-gray-700"
                        }`}
                    >
                      {date}

                      {/* 🔴 Celebration */}
                      {event?.type === "celebration" && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
                      )}

                      {/* 🟡 Holiday */}
                      {event?.type === "holiday" && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 📝 Event Details */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex items-center justify-center">
              {selectedDate ? (
                (() => {
                  const event = getEventForDate(selectedDate);
                  if (event) {
                    return (
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    );
                  }
                  return (
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Working Day
                      </h3>
                      <p className="text-gray-600">
                        No special events scheduled for this day.
                      </p>
                    </div>
                  );
                })()
              ) : (
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">
                    Click a date to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;

import { useNavigate } from "react-router-dom";

const programs = [
  {
    title: "Playgroup Program",
    description:
      "A joyful early learning program that builds social skills, creativity, and school readiness in young children.",
    time: "Morning: 9:00 AM – 12:00 PM",
    image: "/images/image1.webp",
  },
  {
    title: "Daycare Services",
    description:
      "A safe, nurturing, and comfortable daycare environment with caring supervision throughout the day.",
    time: "Full Day: 8:00 AM – 6:00 PM",
    image: "/images/image2.webp",
  },
  {
    title: "Bharatanatyam",
    description:
      "Classical dance training that improves posture, rhythm, grace, and cultural appreciation.",
    time: "Evening: 5:30 PM – 6:30 PM",
    image: "/images//programs/barathanatyam.webp",
  },
  {
    title: "Abacus Class",
    description:
      "Mental math training to improve concentration, memory, and numerical speed.",
    time: "Evening: 3:30 PM – 4:30 PM & 4:30 PM – 5:30 PM",
    image: "/images/programs/abacus.webp",
  },
  {
    title: "Carnatic Music",
    description:
      "Vocal music classes that nurture musical talent, rhythm, and vocal discipline.",
    time: "Evening: 5:30 PM – 6:30 PM",
    image: "/images/programs/carnatic.webp",
  },
  {
    title: "Yoga",
    description:
      "Yoga sessions that promote flexibility, calmness, focus, and emotional balance.",
    time: "Evening: 4:30 PM – 5:30 PM",
    image: "/images/programs/yoga.webp",
  },
  {
    title: "Tuition Classes",
    description:
      "Personalized academic support to strengthen understanding and exam performance.",
    time: "Evening: 6:30 PM – 7:30 PM",
    image: "/images/programs/tution.webp",
  },
  {
    title: "Karate Classes",
    description:
      "Martial arts training that builds discipline, confidence, strength, and self-defense skills.",
    time: "Evening: 6:30 PM – 7:30 PM",
    image: "/images/programs/karate.webp",
  },
  {
    title: "Phonics Class",
    description:
      "Foundational language program to improve reading, pronunciation, and communication skills.",
    time: "Evening: 3:30 PM – 4:30 PM",
    image: "/images/programs/phonics.webp",
  },
];

const OurPrograms = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              onClick={() => navigate("/admissions")}
              className="group cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {program.description}
                </p>
                <p className="text-blue-600 font-medium text-sm">
                  {program.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;

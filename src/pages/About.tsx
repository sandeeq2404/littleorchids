import { Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="/images/photo2.webp"
          alt="Little Orchids School"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Discover the Little Orchids difference
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/founder_nima.webp"
              alt="Founder of Little Orchids"
              className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-6 py-4">
              <p className="text-sm text-gray-500">Founder</p>
              <p className="text-lg font-semibold text-gray-900">
                Mrs. Nima Radhakrishnan
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nurturing Young Minds with Purpose
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Mrs. Nima Radhakrishnan, M.A., MTT, DYT, brings over a decade of
              experience in early childhood education. Her philosophy centers on
              nurturing curiosity, emotional well-being, and confidence in every
              child.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Under her compassionate leadership, Little Orchids has grown into
              a joyful learning community where children feel safe, valued, and
              inspired to explore the world around them.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SCHOOL SECTION ================= */}
      <section className="py-20 px-6 bg-[#FAF7FD]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Home of Joyful Learning
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
            Little Orchids is a nurturing learning space for young children,
            offering Play Group, Pre-KG, LKG, and UKG programs along with
            enriching after-school activities such as Karate, Bharathanatyam,
            Abacus, Carnatic Music, Yoga, Phonics, and Daycare.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
            Our approach blends academics, creativity, physical development, and
            emotional well-being—helping every child grow with confidence,
            curiosity, and joy.
          </p>
        </div>
      </section>

      {/* ================= FACULTY SECTION ================= */}
     

      {/* ================= FACILITIES SECTION ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Facilities
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Classrooms */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/images/photo3.webp"
              alt="Modern Classrooms"
              className="w-full h-[320px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />
            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">
                Modern Classrooms
              </h3>
              <p className="text-white/90 leading-relaxed">
                Bright, spacious, and child-friendly classrooms designed to
                encourage exploration, interaction, and joyful learning.
              </p>
            </div>
          </div>

          {/* Outdoor Play Area */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/images/photo5.webp"
              alt="Outdoor Play Area"
              className="w-full h-[320px] object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />
            <div className="absolute bottom-0 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">
                Outdoor Play Area
              </h3>
              <p className="text-white/90 leading-relaxed">
                A safe and vibrant outdoor space where children develop
                physical strength, coordination, and social skills through
                play.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from "react";

const bannerImages = [
  "/images/image1.webp",
  "/images/image2.webp",
  "/images/image3.webp",
];



const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[90vh] md:h-[90vh] w-full overflow-hidden">
  {bannerImages.map((img, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        currentSlide === index ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={img}
        alt="Little Orchids Banner"
        className="w-full h-full object-cover"
      />
      {/* Premium color grading overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2E1A47]/70 via-[#5B2E8A]/60 to-[#F28C28]/50" />
    </div>
  ))}

  {/* Hero Content */}
  <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
    <div className="max-w-4xl text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
        Little Orchids
      </h1>
      <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-white/90">
        A nurturing learning space for young children, offering Play Group,
        Pre-KG, LKG, and UKG programs along with enriching after-school
        activities that inspire confidence, curiosity, and joy.
      </p>
    </div>
  </div>

  {/* 🔢 Stats Section */}
  <div className="absolute bottom-0 left-0 right-0 z-20">
    <div className="bg-green-600/90 backdrop-blur-md py-4">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 text-center text-white">
        <div>
          <p className="text-2xl md:text-3xl font-bold">2015</p>
          <p className="text-sm md:text-base mt-1">Year Established</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold">500+</p>
          <p className="text-sm md:text-base mt-1">Students Enrolled</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold">40+</p>
          <p className="text-sm md:text-base mt-1">Faculty</p>
        </div>
      </div>
    </div>
  </div>
</section>


      

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E1A47]">
              Welcome to Little Orchids
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              Little Orchids is a nurturing learning space for young children,
              offering Play Group, Pre-KG, LKG, and UKG programs along with
              enriching activities such as Karate, Bharathanatyam, Abacus,
              Carnatic Music, Yoga, Phonics, and Daycare.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-lg">
              Our approach blends academics, creativity, physical development,
              and emotional well-being—helping every child grow with confidence,
              curiosity, and joy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F28C28]/10 via-[#5B2E8A]/10 to-[#2E1A47]/10 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-semibold text-[#2E1A47]">
              Founder’s Message
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <span className="font-semibold">
                Mrs. Nima Radhakrishnan, M.A., MTT, DYT
              </span>
              <br />
              With over a decade of experience in early childhood education, our
              founder believes that nurturing curiosity is the foundation of
              lifelong learning. Her compassionate leadership and dedication to
              holistic education continue to shape Little Orchids into a home of
              joyful discovery—where every child feels seen, heard, and
              encouraged to shine.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY LITTLE ORCHIDS ================= */}
      <section className="bg-[#FAF7FD] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E1A47]">
            Why Little Orchids?
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We provide a holistic, joyful, and secure environment that nurtures
            every child’s intellectual, emotional, and physical growth.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Holistic Learning",
                desc: "Balanced development through academics, creativity, and physical activities.",
              },
              {
                title: "Experienced Faculty",
                desc: "Caring, trained educators focused on each child’s unique growth.",
              },
              {
                title: "Safe & Nurturing Space",
                desc: "Secure, hygienic, and child-friendly infrastructure.",
              },
              {
                title: "After-School Enrichment",
                desc: "Wide range of co-curricular programs under one roof.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-[#2E1A47] group-hover:text-[#F28C28] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;

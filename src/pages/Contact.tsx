import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSuccess("✅ Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: CONTACT DETAILS */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    34/2, Pooram Prakasam Road<br />
                    Balaji Nagar, Royapettah<br />
                    Chennai, Tamil Nadu 600014
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">9003124400</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@littleorchids.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Admission Enquiry">Admission Enquiry</option>
                    <option value="Fee Details">Fee Details</option>
                    <option value="School Timings">School Timings</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Campus Visit">Campus Visit</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                {success && <p className="text-green-600 font-medium">{success}</p>}
                {error && <p className="text-red-600 font-medium">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Find Us on the Map
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-md h-96">
            <iframe
              title="Little Orchids Location"
              src="https://www.google.com/maps?q=34/2,%20Pooram%20Prakasam%20Road,%20Balaji%20Nagar,%20Royapettah,%20Chennai,%20Tamil%20Nadu%20600014&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

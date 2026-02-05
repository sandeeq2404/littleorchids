import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    dob: "",
    classApplying: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "admissions"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setSuccess("Your admission request has been submitted successfully!");
      setFormData({
        parentName: "",
        childName: "",
        dob: "",
        classApplying: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* ================= LEFT SIDE — ADMISSION DETAILS ================= */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Admissions – Academic Year 2026–2027
          </h1>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Dear Parents,
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Admissions for the Academic Year 2026–2027 are now open.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            All admission formalities and submission of required documents must
            be completed strictly between{" "}
            <span className="font-semibold">
              25th March 2026 and 31st March 2026
            </span>. No requests or extensions will be entertained beyond the
            above-mentioned dates under any circumstances.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Classes for Playgroup, Pre-KG, LKG & UKG will be conducted from{" "}
            <span className="font-semibold">
              3rd April 2026 to 28th April 2026.
            </span>
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Registration Guidelines
          </h2>

          <ul className="space-y-3 text-gray-700 leading-relaxed list-decimal pl-6">
            <li>
              Registration for Playgroup, Pre-KG, LKG & UKG 2026–27 will be
              <span className="font-semibold"> OFFLINE only.</span>
            </li>
            <li>
              Eligibility: Minimum age of 3.5 years completed as on{" "}
              <span className="font-semibold">31.03.2025</span> for LKG.
            </li>
            <li>Registration form must be submitted to block the seat.</li>
            <li>
              Xerox copy of Birth Certificate, Aadhaar Copy, and Passport size
              photo must be submitted along with the Registration form.
            </li>
            <li>School timing: 9:30 AM to 12:30 PM.</li>
            <li>
              Registration Form & Fee details will be available at the school
              office.
            </li>
          </ul>

          <p className="mt-8 text-gray-700 leading-relaxed">
            Warm regards,
            <br />
            <span className="font-semibold">Management</span>
            <br />
            Little Orchids Preschool
          </p>
        </div>

        {/* ================= RIGHT SIDE — ADMISSION FORM ================= */}
        <div className="bg-gray-50 p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Admission Enquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-1">
                Parent / Guardian Name
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Child’s Name
              </label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Class Applying For
              </label>
              <select
                name="classApplying"
                value={formData.classApplying}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              >
                <option value="">Select Class</option>
                <option value="Playgroup">Playgroup</option>
                <option value="Pre-KG">Pre-KG</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Admission Enquiry"}
            </button>

            {success && (
              <p className="text-green-600 text-center font-medium mt-4">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admissions;

import Image from "next/image";
import { Monitor, Scan, Printer, Microscope, Zap } from "lucide-react";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  return (
    <section className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
        Transform Your Smile With<br />
        <span className="text-[#e30217]">My Family Dentists</span>
      </h1>

      <div className="md:flex md:items-center md:gap-8 md:mb-12">
        <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg">
          <div className="relative rounded-lg h-48 md:h-[400px] mb-6 md:mb-0 md:flex-1 overflow-hidden shadow-lg bg-black">
            <iframe
              className="w-full h-full object-cover rounded-lg"
              src="https://www.youtube.com/embed/PB7x3E181_E?si=QxQ78f9wBYhpDnhx"
              title="Smile Dental Hospital Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>







        </div>

        {/* Special Offer Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-xl text-center mb-6 md:mb-0 md:flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Special Offers
            <ul className="text-lg md:text-xl text-left list-disc pl-6 mt-4 space-y-2">
              <li>Dental Implants starting at ₹20,000</li>
              <li>Free Zirconia Crown worth ₹10,000</li>
              <li>Lifetime warranty on Implants</li>
              <li>15-year warranty on Crowns</li>
            </ul>
          </h2>
          <button
            onClick={onBookAppointment}
            className="bg-brandPrimary text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg hover:opacity-90 transition-colors pulse-element w-full md:w-auto"
          >
            📞 Book Consultation
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-center">
        <button onClick={onBookAppointment} className="bg-brandPrimary text-white py-4 px-8 rounded-lg font-bold text-lg hover:opacity-90 transition-colors md:min-w-[240px]">
          📞 Book Consultation
        </button>
        <a
          href="tel:+919415007106"
          className="bg-brandPrimary text-white py-4 px-8 rounded-lg font-bold text-lg text-center hover:opacity-90 transition-colors md:min-w-[240px]"
        >
          CALL NOW 9415007106
        </a>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-center text-gray-900 mb-6">
          Why choose <span className="text-[rgb(55,81,82)]
">My Family Dentists?</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-6">
          {[
            { icon: <Monitor className="w-12 h-12 text-brandPrimary mx-auto mb-2" />, title: "In-house Digital Lab", desc: "CAD/CAM Technology" },
            { icon: <Scan className="w-12 h-12 text-brandPrimary mx-auto mb-2" />, title: "In-house OPG", desc: "Full Mouth & Digital X-rays" },
            { icon: <Printer className="w-12 h-12 text-brandPrimary mx-auto mb-2" />, title: "3D Printing", desc: "Aligner Manufacturing Unit" },
            { icon: <Microscope className="w-12 h-12 text-brandPrimary mx-auto mb-2" />, title: "Microscopic RCT", desc: "Advanced magnification" },
            { icon: <Zap className="w-12 h-12 text-brandPrimary mx-auto mb-2" />, title: "Dental Laser", desc: "Advanced Laser Technology" }
          ].map((usp, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow md:p-6 border border-gray-100">
              {usp.icon}
              <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{usp.title}</h4>
              <p className="text-xs md:text-sm text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 md:p-8 rounded-lg md:max-w-3xl md:mx-auto">
        <h3 className="font-bold text-[#e30217] mb-3 md:text-xl">Why Choose Us?</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-[#e30217]">✔</span>
            <span className="text-sm md:text-base">In-house Digital Dental Laboratory (CAD/CAM)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e30217]">✔</span>
            <span className="text-sm md:text-base">In-house OPG (Full Mouth X-ray) & Digital X-rays</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e30217]">✔</span>
            <span className="text-sm md:text-base">3D Printing & Aligner Manufacturing Unit</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e30217]">✔</span>
            <span className="text-sm md:text-base">Microscopic Root Canal Treatment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e30217]">✔</span>
            <span className="text-sm md:text-base">Advanced Dental Laser Technology</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e30217]">✔</span>
            <span className="text-sm md:text-base">High-tech, hygiene-focused, patient-centric care</span>
          </li>
        </ul>
        <button onClick={onBookAppointment} className="bg-brandPrimary text-white py-3 px-6 rounded-lg font-bold w-full hover:opacity-90 transition-colors md:max-w-md md:mx-auto md:block">
          Request a Call back ➤
        </button>
        <small className="block text-center mt-2 text-gray-600 md:text-base">
          Professional Consultation & Digital scan
        </small>
      </div>
    </section>
  );
}
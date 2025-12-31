import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="bg-white p-4 md:p-8 lg:p-12">
      <h2 className="text-black md:text-3xl font-bold text-center mb-6">Meet Our Principal Dentist</h2>

      <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm max-w-6xl mx-auto">
        <div className="md:flex md:gap-8 md:items-start mb-8">
          <div className="text-center mb-6 md:mb-0 md:flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center overflow-hidden relative">
              <Image src="/images/doS.png" alt="Dr. Shikha Tripathi" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#e30217]">Dr. Shikha Tripathi</h3>
            <p className="text-gray-600 font-medium">MDS – Prosthodontist & Implantologist</p>
            <p className="text-sm text-gray-500">IFS Master, Germany | Award-Winning Implantologist</p>
          </div>

          <div className="space-y-4 text-gray-700 md:flex-grow">
            <p className="md:text-lg">
              Dr. Shikha Tripathi is a highly experienced dental professional known for delivering advanced, ethical, and patient-focused dental care. As an IFS Master (Germany) and Award-Winning Implantologist, she brings world-class expertise to Haridwar.
            </p>

            <p className="md:text-lg">
              Expert Dental Care Backed by 25+ Years of Clinical Excellence.
              Recipient of A.P.J. Abdul Kalam Award 2025 & Women Entrepreneur Award (IIM Bangalore Cohort).
            </p>



            <div className="md:grid md:grid-cols-2 md:gap-8 mt-6">
              <div>
                <h3 className="font-bold text-[#e30217] mb-3 md:text-lg">Expertise & Specializations</h3>
                <p className="md:text-lg mb-4">
                  With over 25+ years of clinical experience, Dr. Tripathi specializes in Prosthodontics and Implantology, providing comprehensive and ethical dental care using modern techniques.
                </p>
                <h4 className="font-bold text-gray-800 mb-2">Specializations</h4>
                <ul className="list-disc list-inside md:text-lg space-y-1">
                  <li>Dental Implants (IFS Master)</li>
                  <li>Prosthodontics</li>
                  <li>Smile Designing</li>
                  <li>Full Mouth Rehabilitation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#e30217] mt-6 mb-3 md:mt-0 md:text-lg">⭐ Why Choose Us</h3>
                <ul className="list-none md:text-lg space-y-2 mb-6">
                  <li className="flex items-start gap-2"><span>✅</span> <span>In-house Digital Dental Laboratory (CAD/CAM)</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>In-house OPG & Digital X-rays</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>3D Printing & Aligner Manufacturing</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Microscopic Root Canal Treatment</span></li>
                  <li className="flex items-start gap-2"><span>✅</span> <span>Advanced Dental Laser Technology</span></li>
                </ul>

                <h3 className="font-bold text-[#e30217] mb-3 md:text-lg">🏆 Awards & Recognition</h3>
                <ul className="list-none md:text-lg space-y-2">
                  <li className="flex items-start gap-2"><span>🏅</span> <span>A.P.J. Abdul Kalam Award 2025</span></li>
                  <li className="flex items-start gap-2"><span>🏅</span> <span>Women Entrepreneur Award (IIM Bangalore)</span></li>
                  <li className="flex items-start gap-2"><span>🏅</span> <span>IFS Master, Germany</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button onClick={onBookAppointment} className="bg-brandPrimary text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md md:mx-auto md:block">
          BOOK APPOINTMENT WITH DR. Shikha Tripathi
        </button>
      </div>
    </section>
  );
}
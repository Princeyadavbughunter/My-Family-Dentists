'use client';

import Image from 'next/image';

interface ClinicPhotosProps {
  onBookAppointment: () => void;
}

export default function ClinicPhotos({ onBookAppointment }: ClinicPhotosProps) {
  return (
    <section className="bg-lightCream p-4 md:p-8 lg:p-12">
      <h2 className="text-black md:text-3xl font-bold text-center mb-6">Our State-of-the-Art Clinic</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
        {[
          { src: "/images/clinic/f1.jpg", alt: "Clinic Photo 1", width: 252, height: 209 },
          { src: "/images/clinic/f15.jpg", alt: "Clinic Photo 2", width: 252, height: 209 },
          { src: "/images/clinic/mfdclinic.avif", alt: "Clinic Photo 3", width: 800, height: 600 }
        ].map((img, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white flex items-center justify-center">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
      <button onClick={onBookAppointment} className="bg-brandPrimary text-white py-3 px-6 rounded-lg font-bold w-full md:max-w-md mx-auto block 
      hover:text-white
      hover:opacity-90 transition-colors">
        BOOK APPOINTMENT
      </button>
    </section>
  );
} 
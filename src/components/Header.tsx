import Image from "next/image";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm p-4 md:py-6">
      <div className="text-center max-w-6xl mx-auto md:flex md:items-center md:justify-between md:text-left">
        <div className="md:flex md:items-center md:gap-8">
          <Image
            src="/images/MFD.png"
            alt="My Family Dentists Logo"
            width={192}
            height={48}
            className="h-auto mx-auto mb-4 md:mb-0 md:mx-0"
          />
          <a
            href="https://maps.app.goo.gl/Jux8aBSGfvgURQ5a9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 mb-4 md:mb-0 hover:text-[#e30217] transition-colors cursor-pointer block"
          >
            📍 My Family Dentists – Dental Implant Center<br />
            D-23, Shivalik Nagar, Near BSNL Office Chauraha,<br />
            Opposite OM Dhaba, Shiv Mandir Road, Haridwar – 249403
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:gap-4">
          <button onClick={onBookAppointment} className="bg-brandPrimary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-colors">
            BOOK APPOINTMENT
          </button>
          <a href="tel:+919415007106" className="bg-brandPrimary
 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-colors text-center">
            CALL NOW 9415007106
          </a>
        </div>
      </div>
    </header>
  );
}
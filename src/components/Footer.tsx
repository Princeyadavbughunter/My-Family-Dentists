import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-12">

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <Image
            src="/images/MFD.png"
            alt="My Family Dentist"
            width={192}
            height={48}
            className="mx-auto mb-4 h-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="font-bold text-[#e30217] mb-2 md:text-lg">Contact Us</h3>
            <a href="tel:+919415007106" className="block text-[#e30217] font-bold md:text-lg hover:text-black transition-colors">+91 9415007106</a>
            <a href="tel:+918279469499" className="block text-[#e30217] font-bold md:text-lg hover:text-black transition-colors">+91 8279469499</a>
            <a href="mailto:myfamilydentists@gmail.com" className="block text-[#e30217] font-bold md:text-lg hover:text-black transition-colors">E-Mail Id. : myfamilydentists@gmail.com</a>

            <p className="text-gray-700">https://www.myfamilydentist.org.in</p>
          </div>

          <div>
            <h3 className="font-bold text-[#e30217] mb-2 md:text-lg">Open Hours</h3>
            <p className="text-gray-700 md:text-lg">
              🕘 9:00 AM – 9:00 PM (All Days)<br />
              <strong>Doctor Availability:</strong><br />
              Morning: 11:00 AM – 1:30 PM<br />
              Evening: 6:00 PM – 9:00 PM<br />
              Sunday: 11:00 AM – 2:00 PM (Appt. basis)
            </p>
          </div>


          <div>
            <h3 className="font-bold text-[#e30217] mb-2 md:text-lg">Location</h3>
            <a
              href="https://maps.app.goo.gl/Jux8aBSGfvgURQ5a9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 font-bold hover:text-[#e30217] transition-colors cursor-pointer block"
            >
              📍 My Family Dentist<br />
              D-23, Shivalik Nagar, Near BSNL Office Chauraha,<br />
              Opposite OM Dhaba, Shiv Mandir Road, Haridwar – 249403
            </a>
            <p className="text-sm text-gray-500 mt-1">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-6 bg-gray-200 rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8671.219440327179!2d78.0660664!3d29.9310409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949a02b00006b%3A0x3abe0c21a3195919!2sMy%20family%20dentist%20dental%20clinic%20haridwar%2F%20Best%20Dental%20Clinic%20in%20Haridwar!5e1!3m2!1sen!2sin!4v1767214978639!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Family Dentist Location - Haridwar"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
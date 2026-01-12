'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Gift } from 'lucide-react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Prepare data for Apps Script
    const data = {
      name: formData.get('fullName') as string,
      phone: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      concern: formData.get('dentalConcern') as string,
    };

    console.log("Form Data to send:", data);

    const scriptURL = ""; // Your Apps Script URL here
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // keep for now, needed for Apps Script public endpoint
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Raw fetch response:", response);

      // With no-cors, you cannot read response body, so we log success directly
      try {
        const result = await response.json();
        console.log("Parsed response:", result);

        if (result.result === "success") {
          alert("✅ Appointment booked successfully!");
          onClose();
          router.push("/thank-you");
        } else {
          throw new Error("Form submission failed");
        }
      } catch (err) {
        console.log("No JSON response due to no-cors. Assuming success.", err);
        alert("✅ Appointment booked successfully!");
        onClose();
        router.push("/thank-you");
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again later.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#e30217]">Book Your Appointment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
        </div>

        {/* Offer info */}
        <div className="bg-gray-50 p-3 md:p-4 rounded-lg mb-4 border-l-4 border-[#e30217]">
          <p className="text-sm md:text-base text-gray-700 text-center">
            <strong>Includes:</strong> Professional Consultation & Digital Scan
            <span className="text-[#e30217] font-bold"> with Our Certified Implantologist</span>
          </p>
        </div>

        {/* Countdown */}
        {/* Surprise Box */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border-2 border-yellow-400 p-4 rounded-xl mb-6 text-center shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
          <div className="absolute top-0 right-0 -mt-2 -mr-2 w-12 h-12 bg-yellow-400 rotate-45 transform opacity-20"></div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="bg-white p-3 rounded-full shadow-inner ring-4 ring-yellow-200 animate-bounce">
              <Gift className="w-8 h-8 text-yellow-600" />
            </div>

            <div>
              <h3 className="text-gray-800 font-bold text-lg leading-tight mb-1">
                Surprise Offer Unlocked!
              </h3>
              <p className="text-gray-600 text-sm">
                Book now to reveal your <span className="font-semibold text-yellow-700">exclusive dental perk</span>
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              required
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Describe Your Dental Concern</label>
            <textarea
              name="dentalConcern"
              required
              rows={2}
              placeholder="Briefly describe your dental issue"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-brandPrimary text-white py-3 md:py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-colors"
          >
            Book Appointment
          </button>
        </form>

      </div>
    </div>
  );
}
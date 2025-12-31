import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "RAJ KUMAR SAINI",
      initials: "RK",
      date: "4 months ago",
      review: "Dr. Shikha ma'am had done my root canal treatment and capping so well. I'm so impressed by her work. I personally recommend her. Clinic is so well maintained and ambience is very good. Recent technologies are available here like intraoral scanner and in house cadcam. Do visit her.",
    },
    {
      name: "Krishna Dwivedi",
      initials: "KD",
      date: "1 months ago",
      review: "I had a great experience in MFD Clinic with Dr Shikha & all other doctors. Ma'am did an excellent work without any pain caused to me. Thanks MFD:)",
    },
    {
      name: "Honey Sharma",
      initials: "HS",
      date: "8 months ago",
      review: "Dr Shikha tripathi is very professional, she takes time to explain whats need to be done and provides valuable advice and painless treatment. I highly recommend My Family Dentist Dental Clinic to everyone who are facing dental problems. She is the best dentist i have ever had.",
    },
    {
      name: "Renu",
      initials: "R",
      date: "6 months ago",
      review: "The service that I receive from My Family Dentist dental clinic is excellent. Dr Shikha Tripathi is very friendly and ensured that I am properly informed about my health and care. I would have no qualms in recommending them to family and friends"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <Image
            src="/images/google.png"
            alt="Google Logo"
            width={128}
            height={48}
            className="mx-auto mb-4 object-contain"
          />
          <h2 className="text-xl md:text-3xl font-bold">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brandPrimary text-white rounded-full flex items-center justify-center font-bold">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold md:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
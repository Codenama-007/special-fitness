import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    achievement: "Lost 18kg in 5 Months",
    role: "Weight Loss Program",
    image: "/images/member1.jpg",
    review:
      "I never imagined I could lose this much weight. The trainers kept me accountable every single week.",
  },
  {
    name: "Susain Dsouza",
    achievement: "Built Lean Muscle",
    role: "Personal Training",
    image: "/images/member2.jpg",
    review:
      "The coaching and nutrition guidance completely changed my confidence and lifestyle.",
  },
  {
    name: "Arjun Patel",
    achievement: "Strength Transformation",
    role: "Strength Training",
    image: "/images/member3.jpg",
    review:
      "Professional trainers, amazing equipment, and an environment that keeps you motivated every day.",
  },
  {
    name: "Mike Jones",
    achievement: "Completed His First CrossFit Challenge",
    role: "CrossFit Program",
    image: "/images/member4.jpg",
    review:
      "The energy inside the gym is unmatched. Every workout feels like a challenge, and the supportive community kept me consistent throughout my journey.",
  },
    {
    name: "Priya Mehta",
    achievement: "Lost 12kg & Improved Endurance",
    role: "Cardio Transformation",
    image: "/images/member5.jpg",
    review:
      "I joined to lose weight but gained so much more—confidence, stamina, and a healthier lifestyle that I can actually maintain.",
  },
  {
    name: "David Wilson",
    achievement: "Body Fat Reduced from 28% to 16%",
    role: "Body Recomposition",
    image: "/images/member6.jpg",
    review:
      "The combination of expert coaching, disciplined training, and nutrition advice delivered results far beyond my expectations.",
  },
];

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="bg-[#090909] text-white py-24"
    >
      <div className="container mx-auto px-5">

        <div className="text-center mb-16">

          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm">
            Testimonials
          </span>

          <h2 className="font-oswald text-5xl md:text-7xl uppercase mt-4">
            Success Stories
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
            Real members. Real transformations. Real results.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="
                bg-[#111111]
                rounded-2xl
                border
                border-white/10
                p-8
                hover:border-orange-500/40
                transition
              "
            >

              <Image
                src={item.image}
                width={90}
                height={90}
                alt={item.name}
                className="rounded-full mx-auto mb-6 object-cover"
              />

              <div className="flex justify-center gap-1 text-orange-500 mb-5">

                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}

              </div>

              <p className="text-gray-300 text-center leading-relaxed">
                "{item.review}"
              </p>

              <div className="w-12 h-1 bg-orange-500 rounded-full mx-auto my-6" />

              <h3 className="text-center font-oswald text-2xl uppercase">
                {item.name}
              </h3>

              <p className="text-orange-500 text-center mt-2">
                {item.achievement}
              </p>

              <p className="text-gray-500 text-center text-sm mt-1">
                {item.role}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
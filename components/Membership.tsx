"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Gym Only",
    popular: false,
    pricing: {
      "3": "₹2,500",
      "6": "₹3,500",
      "12": "₹5,000",
    },
    features: [
      "Unlimited Gym Access",
      "Strength Training Area",
      "Premium Equipment",
      "Locker Facility",
    ],
  },
  {
    name: "All Access",
    popular: true,
    pricing: {
      "3": "₹3,500",
      "6": "₹4,500",
      "12": "₹6,500",
    },
    features: [
      "Unlimited Gym Access",
      "Cardio Zone",
      "CrossFit",
      "Steam Room",
      "Locker Facility",
    ],
  },
];

const durations = [
  { value: "3", label: "3 Months" },
  { value: "6", label: "6 Months" },
  { value: "12", label: "12 Months" },
];

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState("3");

  return (
    <section
      id="membership"
      className="bg-[#090909] py-24 text-white"
    >
      <div className="container mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm">
            Membership Plans
          </span>

          <h2 className="font-oswald text-5xl md:text-7xl uppercase mt-4">
            Choose Your Membership
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Flexible plans designed to help you achieve your fitness goals.
          </p>

        </div>

        {/* Duration Tabs */}

        <div className="flex justify-center gap-4 mb-16 flex-wrap">

          {durations.map((duration) => (

            <button
              key={duration.value}
              onClick={() => setSelectedPlan(duration.value)}
              className={`
                px-6 py-3 rounded-full border transition-all duration-300
                ${
                  selectedPlan === duration.value
                    ? "bg-orange-500 text-black border-orange-500"
                    : "border-white/20 text-white hover:border-orange-500"
                }
              `}
            >
              {duration.label}
            </button>

          ))}

        </div>

        {/* Pricing Cards */}

        <div className="grid lg:grid-cols-2 gap-10">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`
                relative rounded-3xl p-10 transition-all duration-300
                ${
                  plan.popular
                    ? "border-2 border-orange-500 bg-[#111111] lg:scale-105"
                    : "border border-white/10 bg-[#111111]"
                }
              `}
            >

              {plan.popular && (

                <span className="absolute top-5 right-5 bg-orange-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>

              )}

              {/* Title */}

              <h3 className="font-oswald uppercase text-4xl">
                {plan.name}
              </h3>

              {/* Price */}

              <div className="mt-8">

                <h1 className="text-6xl font-bold text-orange-500">
                  {plan.pricing[selectedPlan as keyof typeof plan.pricing]}
                </h1>

                <p className="text-gray-400 mt-2">
                  {selectedPlan} Month
                  {selectedPlan !== "12" ? "s" : ""}
                </p>

              </div>

              {/* Divider */}

              <div className="border-t border-white/10 my-8" />

              {/* Features */}

              <div className="space-y-5">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <Check
                      className="text-orange-500"
                      size={20}
                    />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>

              {/* Button */}

              <Button
                className={`
                  w-full mt-10 h-12 text-lg
                  ${
                    plan.popular
                      ? "bg-orange-500 hover:bg-orange-400 text-black"
                      : ""
                  }
                `}
                variant={plan.popular ? "default" : "outline"}
              >
                Start Training
              </Button>

            </div>

          ))}

        </div>

        {/* Bottom Strip */}

        <div className="grid md:grid-cols-4 gap-6 mt-20 text-center text-gray-400">

          <p>✅ No Registration Fee</p>

          <p>🏋 Certified Trainers</p>

          <p>🔥 Premium Equipment</p>

          <p>💪 Flexible Memberships</p>

        </div>

      </div>
    </section>
  );
}
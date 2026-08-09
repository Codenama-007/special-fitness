"use client"

import React from "react";
import { useState } from "react";
import { registerlead } from "../actions/registerlead";

const Page = () => {
  const [Fullname, setFullname] = useState("")
  const [Email, setEmail] = useState("")
  const [PhoneNo, setPhoneNo] = useState("")


  // handling Form submits
  const handle_submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const gym_owner_number = process.env.NEXT_PUBLIC_GYM_OWNER_NUMBER!

    console.log(gym_owner_number)


    const message = `
🏋️ NEW MEMBERSHIP ENQUIRY

Name: ${Fullname}
Email: ${Email}
Phone: ${PhoneNo}

A customer is interested in joining Special Fitness.
  `.trim();
  
  const whatsapp_url = `https://wa.me/${gym_owner_number}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsapp_url , "_blank")

  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090909] px-4">

      <div
        id="join-now"
        className="
          w-full max-w-md
          rounded-2xl
          border border-white/10
          bg-[#111111]
          p-8
        "
      >

        {/* Heading */}
        <div className="mb-8 text-center">

          <p className="font-inter text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
            Special Fitness
          </p>

          <h1 className="mt-3 font-oswald text-3xl sm:text-4xl uppercase tracking-wide text-white wrap-break-word">
            Start Your Transformation
          </h1>

          <p className="mt-3 font-inter text-sm leading-relaxed text-gray-400">
            Take the first step toward becoming stronger, healthier,
            and more confident.
          </p>

        </div>


        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={handle_submit}>

          {/* Name */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="name"
              className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gray-400"
            >
              Full Name
            </label>

            <input
              value={Fullname}
              onChange={(e) => { setFullname(e.target.value) }}
              required
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="
                w-full
                rounded-lg
                border border-white/10
                bg-[#090909]
                px-4 py-3
                font-inter
                text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-orange-500
                focus:ring-1
                focus:ring-orange-500/40
              "
            />

          </div>


          {/* Phone */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="phone"
              className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gray-400"
            >
              Phone Number
            </label>

            <input
              value={PhoneNo}
              onChange={(e) => { setPhoneNo(e.target.value) }}
              required
              maxLength={10}
              type="tel"
              name="phone"
              id="phone"
              placeholder="+91 XXXXX XXXXX"
              className="
                w-full
                rounded-lg
                border border-white/10
                bg-[#090909]
                px-4 py-3
                font-inter
                text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-orange-500
                focus:ring-1
                focus:ring-orange-500/40
              "
            />

          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">

            <label
              htmlFor="email"
              className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-gray-400"
            >
              Email
            </label>

            <input
              required
              value={Email}
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="
                w-full
                rounded-lg
                border border-white/10
                bg-[#090909]
                px-4 py-3
                font-inter
                text-white
                placeholder:text-gray-600
                outline-none
                transition
                focus:border-orange-500
                focus:ring-1
                focus:ring-orange-500/40
              "
            />

          </div>





          {/* Submit */}
          <button

            type="submit"
            className="
              mt-3
              w-full
              rounded-lg
              bg-orange-500
              px-6
              py-4
              font-inter
              font-bold
              uppercase
              tracking-wide
              text-black
              transition-all
              duration-300
              hover:bg-orange-400
              hover:shadow-lg
              hover:shadow-orange-500/20
              active:scale-[0.98]
            "

          >
            Start My Transformation →
          </button>

        </form>


        {/* Privacy note */}
        <p className="mt-5 text-center font-inter text-xs text-gray-600">
          Your information will only be used for your membership enquiry.
        </p>

      </div>

    </div>
  );
};

export default Page;
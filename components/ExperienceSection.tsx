import Image from "next/image";
import { Dumbbell, Trophy, Users, ShieldCheck } from "lucide-react";


const experienceCards = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description:
      "Train with modern machines and professional-grade equipment designed for maximum performance.",
    image: "/images/equipment.jpg",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description:
      "Thousands of transformations built through structured training and expert guidance.",
    image: "/images/results.jpg",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description:
      "Certified coaches who understand your goals and help you achieve sustainable progress.",
    image: "/images/trainers.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description:
      "A motivating and supportive fitness community where everyone can grow.",
    image: "/images/community.jpg",
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#090909] text-white body-font"
    >
      <div className="container mx-auto px-5 py-24">

        {/* Heading */}

        <div className="flex flex-col text-center w-full mb-16">

          <h1
            className="
            font-oswald 
            text-5xl
            md:text-7xl
            uppercase
            tracking-wide
            "
          >
            The Experience
          </h1>


          <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-gray-400
            text-lg
            "
          >
            More than a gym. A complete transformation experience
            built around expert coaching, premium facilities,
            and a community that pushes you forward.
          </p>

        </div>


        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >

          {experienceCards.map((item) => {

            const Icon = item.icon;


            return (

              <div
                key={item.title}
                className="
                group
                flex
                flex-col
                sm:flex-row
                gap-6
                rounded-2xl
                bg-[#111111]
                p-6
                border
                border-white/10
                hover:border-orange-500/50
                transition-all
                duration-300
                "
              >

                {/* Image */}

                <div
                  className="
                  relative
                  w-full
                  sm:w-48
                  h-48
                  shrink-0
                  overflow-hidden
                  rounded-xl
                  "
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="
                    object-cover
                    group-hover:scale-110
                    transition-transform
                    duration-500
                    "
                  />

                </div>



                {/* Content */}

                <div>

                  <Icon
                    className="
                    text-orange-500
                    mb-4
                    "
                    size={32}
                  />


                  <h2
                    className="
                    font-oswald
                    uppercase
                    text-2xl
                    tracking-wide
                    "
                  >
                    {item.title}
                  </h2>


                  <p
                    className="
                    mt-3
                    text-gray-400
                    leading-relaxed
                    "
                  >
                    {item.description}
                  </p>


                </div>


              </div>

            );

          })}


        </div>

      </div>

    </section>
  );
}
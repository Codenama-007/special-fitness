import {
  Dumbbell,
  Flame,
  HeartPulse,
  Trophy,
} from "lucide-react";


const programs = [
  {
    icon: Flame,
    title: "Weight Loss",
    description:
      "Burn fat, improve endurance, and build a healthier body with structured workouts and expert guidance.",
  },
  {
    icon: Dumbbell,
    title: "Muscle Building",
    description:
      "Build strength and muscle with progressive training plans designed for real results.",
  },
  {
    icon: Trophy,
    title: "Strength Training",
    description:
      "Improve power, performance, and confidence with professional strength programs.",
  },
  {
    icon: HeartPulse,
    title: "Personal Training",
    description:
      "Get one-on-one coaching with customized workouts and nutrition support.",
  },
];


export default function Programs() {
  return (
    <section
      id="programs"
      className="
      bg-[#090909]
      text-white
      "
    >

      <div
        className="
        container
        mx-auto
        px-5
        py-24
        "
      >

        {/* Header */}

        <div
          className="
          flex
          flex-col
          text-center
          mb-16
          "
        >

          <span
            className="
            text-orange-500
            uppercase
            tracking-[0.3em]
            text-sm
            font-inter
            "
          >
            Training Programs
          </span>


          <h1
            className="
            mt-4
            font-oswald
            uppercase
            text-5xl
            md:text-7xl
            tracking-wide
            "
          >
            Choose Your Goal
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
            Whether you want to lose weight, build muscle,
            or become stronger, our programs are designed
            to help you transform.
          </p>

        </div>



        {/* Program Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
          "
        >

          {
            programs.map((program)=>{

              const Icon = program.icon;


              return (

                <div
                  key={program.title}
                  className="
                  group
                  relative
                  rounded-2xl
                  bg-[#111111]
                  border
                  border-white/10
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-orange-500/50
                  "
                >


                  {/* Icon */}

                  <div
                    className="
                    w-14
                    h-14
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-500/10
                    text-orange-500
                    mb-6
                    "
                  >

                    <Icon size={32}/>

                  </div>



                  <h2
                    className="
                    font-oswald
                    uppercase
                    tracking-wide
                    text-2xl
                    "
                  >
                    {program.title}
                  </h2>



                  <p
                    className="
                    mt-4
                    text-gray-400
                    leading-relaxed
                    "
                  >
                    {program.description}
                  </p>



                  


                </div>

              )

            })
          }


        </div>



        {/* CTA */}

        <div
          className="
          flex
          justify-center
          mt-16
          "
        >

          <button
            className="
            px-8
            py-3
            rounded-full
            bg-orange-500
            text-black
            font-inter
            font-bold
            hover:bg-orange-400
            transition
            "
          >
            Start Your Transformation
          </button>

        </div>


      </div>

    </section>
  );
}
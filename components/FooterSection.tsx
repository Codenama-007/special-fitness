import Image from "next/image";
import {
  Phone,
  CameraIcon,
  BirdIcon,
  MapIcon
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black border-t border-white/10 text-white"
    >
      <div className="container mx-auto px-5 py-20">

        {/* Logo */}

        <div className="flex flex-col items-center">

          <Image
            src="/images/logo_1.png"
            alt="Special Fitness"
            width={140}
            height={140}
            className="object-contain"
          />

          <h2 className="mt-5 font-oswald text-4xl uppercase tracking-wide">
            Special Fitness
          </h2>

          <p className="mt-3 text-gray-400 max-w-md text-center">
            Transforming lives through expert coaching,
            premium equipment, and a supportive fitness community.
          </p>

        </div>

        {/* Contact Details */}

        <div className="mt-14 grid md:grid-cols-3 gap-8">

          {/* Phone */}

          <a
            href="tel:+919876543210"
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-[#111111]
              p-6
              flex
              items-center
              gap-5
              hover:border-orange-500
              transition
            "
          >

            <Phone
              className="text-orange-500 group-hover:scale-110 transition"
              size={28}
            />

            <div>

              <p className="text-sm text-gray-400">
                Call Us
              </p>

              <h3 className="font-semibold text-lg">
                +91 78209 86147
              </h3>

            </div>

          </a>

          {/* Instagram */}

          <a
            href="https://instagram.com/specialfitness"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-[#111111]
              p-6
              flex
              items-center
              gap-5
              hover:border-orange-500
              transition
            "
          >

            <CameraIcon
              className="text-orange-500 group-hover:scale-110 transition"
              size={28}
            />

            <div>

              <p className="text-sm text-gray-400">
                Instagram
              </p>

              <h3 className="font-semibold text-lg">
                @specialfitness
              </h3>

            </div>

          </a>

          {/* Twitter */}

          <a
            href="https://x.com/specialfitness"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              rounded-2xl
              border
              border-white/10
              bg-[#111111]
              p-6
              flex
              items-center
              gap-5
              hover:border-orange-500
              transition
            "
          >

            <BirdIcon
              className="text-orange-500 group-hover:scale-110 transition"
              size={28}
            />

            <div>

              <p className="text-sm text-gray-400">
                X (Twitter)
              </p>

              <h3 className="font-semibold text-lg">
                @specialfitness
              </h3>

            </div>

          </a>

        </div>

        {/* Address */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=SP+Fitness,+2nd+Floor,+Makwana+Complex,+Siddhivinayak+Arcade,+Shop+No+203,+Building+No+4,+Veer+Savarkar+Marg,+Vasai-Virar,+Maharashtra+401305"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div
            className="
      mt-10
      rounded-2xl
      border
      border-white/10
      bg-[#111111]
      p-6
      flex
      items-center
      gap-5
      hover:border-orange-500/50
      transition-colors
      cursor-pointer
    "
          >
            <MapIcon
              className="text-orange-500 shrink-0"
              size={28}
            />

            <div>
              <p className="text-sm text-gray-400">
                Visit Us
              </p>

              <h3 className="font-semibold">
                Virar East - 401305, Maharashtra, India
              </h3>
            </div>
          </div>
        </a>
      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div
          className="
            container
            mx-auto
            px-5
            py-6
            flex
            md:flex-row
            flex-col
            items-center
            justify-between
            gap-4
          "
        >

          <p className="text-gray-500 text-sm">
            © 2026 Special Fitness. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed by <span className="text-orange-500">Affan Shah</span>
          </p>

        </div>

      </div>

    </footer>
  );
}
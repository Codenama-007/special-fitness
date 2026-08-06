// components/HeroSection.tsx

import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export default function HeroSection({
  title,
  subtitle,
  image,
  buttonText,
  buttonLink,
}: HeroSectionProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt="Gym Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            {title}
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
            {subtitle}
          </p>

          <Link
            href={buttonLink}
            className="inline-block rounded-full bg-red-600 px-8 py-4 text-lg font-bold transition duration-300 hover:scale-105 hover:bg-red-500"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
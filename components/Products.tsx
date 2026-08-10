import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Gold Standard Whey",
    brand: "Optimum Nutrition",
    href: "#",
    imageSrc: "/images/Gold-Whey-Protein-isolate.jpg",
    imageAlt: "Gold Standard Whey Protein",
    price: "Starting ₹2,899",
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    brand: "MuscleBlaze",
    href: "#",
    imageSrc: "/products/creatine.png",
    imageAlt: "Creatine Monohydrate",
    price: "Starting ₹699",
  },
  {
    id: 3,
    name: "Nitraflex Pre Workout",
    brand: "GAT Sport",
    href: "#",
    imageSrc: "/products/preworkout.png",
    imageAlt: "Nitraflex Pre Workout",
    price: "Starting ₹1,499",
  },
  {
    id: 4,
    name: "Anabolic Mass",
    brand: "Kevin Levrone",
    href: "#",
    imageSrc: "/images/C_MassGain_1.jpg",
    imageAlt: "Anabolic Mass Gainer",
    price: "Starting ₹2,499",
  },
];

export default function Products() {
  return (
    <section
      id="supplements"
      className="bg-[#090909] text-white min-h-screen p-4 max-w-full"
    >
      <div className="container mx-auto px-5 py-24">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-medium">
            Nutrition Partners
          </span>

          <h2 className="mt-4 font-oswald text-5xl md:text-7xl uppercase tracking-wide text-center">
            Power Your Progress
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Build muscle, recover faster, and perform at your peak with
            premium supplements from trusted brands.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
            >

              {/* Product Image */}
              <div className="relative h-72 w-full overflow-hidden rounded-xl bg-[#111111] border border-white/10">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Hover Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/20
                    transition
                    duration-300
                  "
                />
              </div>

              {/* Product Details */}
              <div className="mt-5">

                {/* Brand */}
                <p className="text-orange-500 text-xs uppercase tracking-[0.2em] font-medium">
                  {product.brand}
                </p>

                {/* Product Name */}
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {product.name}
                </h3>

                {/* Price + CTA */}
                <div className="mt-3 flex items-center justify-between gap-4">

                  <p className="text-gray-300 text-sm">
                    {product.price}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}


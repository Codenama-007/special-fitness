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
    imageAlt: "Pre Workout",
    price: "Starting ₹1,499",
  },
  {
    id: 4,
    name: "Anabolic Mass",
    brand: "Kevin Levrone",
    href: "#",
    imageSrc: "/images/C_MassGain_1.jpg",
    imageAlt: "Mass Gainer",
    price: "Starting ₹2,499",
  },
];

export default function Products() {
  return (
    <section
      id="supplements"
      className="bg-[#090909] text-white py-24"
    >
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm">
            Nutrition Partners
          </span>

          <h2 className="mt-4 font-oswald text-5xl md:text-7xl uppercase">
            Fuel Your Transformation
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 text-lg">
            Build muscle, recover faster, and perform at your peak with
            premium supplements from trusted brands.
          </p>

        </div>

        {/* Products */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (

            <div
              key={product.id}
              className="
                group
                rounded-2xl
                overflow-hidden
                bg-[#111111]
                border
                border-white/10
                hover:border-orange-500/50
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >

              <div className="overflow-hidden">

                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={500}
                  height={500}
                  className="
                    aspect-square
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              <div className="p-5">

                <p className="text-sm text-orange-500">
                  {product.brand}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {product.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-lg font-bold text-white">
                    {product.price}
                  </span>

                  

                </div>
                <span className="text-orange-500">Sign In to buy Now</span>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
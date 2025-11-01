import Image from 'next/image';

const portfolioItems = [
  {
    id: 1,
    title: "Modern Exhibition Booth",
    category: "Exhibition",
    image: "/images/section1.png"
  },
  {
    id: 2,
    title: "Retail Store Design",
    category: "Commercial",
    image: "/images/section2.png"
  },
  {
    id: 3,
    title: "Trade Show Display",
    category: "Exhibition",
    image: "/images/section3.png"
  },
  {
    id: 4,
    title: "Brand Activation",
    category: "Event",
    image: "/images/service1.png"
  },
  {
    id: 5,
    title: "Corporate Office",
    category: "Commercial",
    image: "/images/service2.png"
  },
  {
    id: 6,
    title: "Pop-up Store",
    category: "Retail",
    image: "/images/service3.png"
  }
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest projects and see how we transform spaces into extraordinary experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';

export default function TrustedBrandsSection() {
  const brands = [
    { name: 'Brand 1' },
    { name: 'Brand 2' },
    { name: 'Brand 3' },
    { name: 'Brand 4' },
    { name: 'Brand 5' },
    { name: 'Brand 6' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Trusted by Leading Brands</h2>
          <p className="text-gray-600">From global names to local heroes — here are some of the partners who've trusted us</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="bg-white p-6 rounded flex items-center justify-center border border-gray-200">
              <span className="text-sm text-gray-400 font-medium">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function TrustedBrandsSection() {
  const brands = [
    'injourney', 'UNIQLO', 'VERSACE', 'DIOR', 'LANCÔME',
    'SOMETHINC', 'sociolla', 'SKINTIFIC', 'ARTISAN', 'smeg',
    'SKIN1004', 'harlette', 'HINT', 'azarine', 'kojie•san',
    'barenbliss', 'buttonscarves', 'Y.O.U', 'beauty haul', 'JUDYDOLL',
    'Good Day', 'PASSION', 'bridestory', 'CHAGEE', 'kibo'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h2>
          <p className="text-gray-600">From global names to local heroes — here are some of the partners who've trusted us:</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <span className="text-lg font-semibold text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 italic">And many more...</p>
        </div>
      </div>
    </section>
  );
}
const brands = [
  "injourney", "UNIQLO", "VERSACE", "DIOR", "LANCÔME",
  "SOMETHINC", "sociolla", "SKINTIFIC", "ARTISAN", "smeg",
  "SKIN1004", "harlette", "HINT", "azarine", "kojie.san",
  "barenbliss", "buttonscarves", "Y.O.U", "beauty haul", "JUDYDOLL",
  "Good Day", "PASSION", "bridestory", "CHAGEE", "kibo"
];

export default function Services() {
  return (
    <section id="jasa" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
            From global names to local heroes — here are some of the partners who've trusted us:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center justify-center h-16 w-32">
              <span className="text-gray-700 font-medium text-sm md:text-base text-center">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 italic font-sans">
            And many more
          </p>
        </div>
      </div>
    </section>
  );
}
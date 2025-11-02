const services = [
  "Exhibition Booth Design (Custom Design)",
  "Interior Contractor",
  "Rental Equipment",
  "Rental Backdrop",
  "Backdrop Photobooth",
  "Special System R8/Maxima Rental",
  "Stage Rental",
  "Custom CNC Cutting",
  "Custom Standing Character"
];

export default function OurServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <p className="text-gray-800 font-medium text-center">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/section1.png"
                alt="Save Decor Exhibition"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-500 text-sm mb-4 uppercase tracking-wide">
              COMMERCIAL CONTRACTOR & DESIGNER INDONESIA
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Save Decor
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Introducing Save Decor, a distinguished Commercial Designer and Contractor operating in Indonesia since 2021.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Trusted by numerous clients in Jakarta, Bali, Makassar, Surabaya, Yogyakarta, and other major cities across Indonesia, our expertise spans a variety of specialized services, including:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Exhibition Design & Build
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Booth Construction
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Island Mall Displays
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Retail Store Design
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Visual Merchandising
              </li>
            </ul>

            <p className="text-gray-600 mb-8 leading-relaxed">
              With a rich history of delivering exceptional design and construction solutions, Save Decor is your partner in bringing visionary concepts to life.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Download Company Profile</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
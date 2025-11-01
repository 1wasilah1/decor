import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              COMMERCIAL CONTRACTOR & DESIGNER INDONESIA
            </h2>

            <div className="space-y-6 text-base text-gray-600 leading-relaxed">
              <p>
                Introducing Save Decor, a distinguished Commercial Designer and Contractor operating in Indonesia since 2021.
              </p>

              <p>
                Trusted by numerous clients in Jakarta, Bali, Makassar, Surabaya, Yogyakarta, and other major cities across Indonesia, our expertise spans a variety of specialized services, including:
              </p>

              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Exhibition Design & Build
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Booth Construction
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Island Mall Displays
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Retail Store Design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Visual Merchandising
                </li>
              </ul>

              <p>
                With a rich history of delivering exceptional design and construction solutions, Save Decor is your partner in bringing visionary concepts to life.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/Save-Decor-Compro-2023.pdf"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Company Profile
              </Link>
            </div>
          </div>

          {/* Right Content - Stats and Image */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-lg text-center border border-gray-100">
                <div className="text-5xl font-bold text-blue-600 mb-3">36+</div>
                <div className="text-gray-900 font-semibold text-lg">Years of Experience</div>
                <div className="text-sm text-gray-500 mt-2">Building since 1986</div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center border border-gray-100">
                <div className="text-5xl font-bold text-green-600 mb-3">100%</div>
                <div className="text-gray-900 font-semibold text-lg">Quality Materials</div>
                <div className="text-sm text-gray-500 mt-2">Licensed suppliers</div>
              </div>
            </div>

            {/* Company Image */}
            <div className="relative h-80 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
              <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Mission Statement */}
            <div className="bg-blue-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Best. Resources. Possible.</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Quality over Quantity</h4>
                  <p className="text-blue-100">We build with high quality materials & licensed product suppliers.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">36+ Years of Experience</h4>
                  <p className="text-blue-100">Experienced since 1986 building and designing residential, hotel, and commercial buildings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
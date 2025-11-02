'use client';
import { useLanguage } from '@/contexts/LanguageContext';

const processes = [
  {
    number: '01.',
    title: 'SURVEY/SITE VISIT',
    description: 'Before designing a project, PT. Multi Tritama Persada guarantee accuracy in the making, thus each project will be carefully reviewed in detail.'
  },
  {
    number: '02.',
    title: 'CONSULTATION',
    description: 'In order to fulfill client\'s needs, PT. Multi Tritama Persada teams will do a regular consultation to know clients preferences and needs.'
  },
  {
    number: '03.',
    title: 'PLANNING, MODELING, AND SHOP DRAWING',
    description: 'This is where the needs turn into a design and detailed concept, including budgeting, timeline, manpower, and material.'
  },
  {
    number: '04.',
    title: 'FINAL CHECK AND HANDOVER',
    description: 'PT. Multi Tritama Persadawill ensure that all the items and works planned has been carried out well and customer satisfaction is achieved before handing over.'
  },
  {
    number: '05.',
    title: 'PRODUCTION, EXECUTION, & SUPERVISION',
    description: 'PT. Multi Tritama Persada handles all aspects of procurement service and design and build starting from Civil works, MEP, Fabrication, and IT.'
  },
  {
    number: '06.',
    title: 'GUARANTEE',
    description: 'PT. Multi Tritama Persada provide a guarantee for the quality and results of our work. This is to create a sense of comfort and trust from clients in us.'
  }
];

export default function WorkingProcess() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.5) 2px, rgba(255,255,255,.5) 4px)',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {process.number} {process.title}
                    </h3>
                    <div className="w-full h-px bg-gradient-to-r from-blue-600 to-purple-600 mb-4 relative">
                      <div className="absolute right-0 -top-2 w-4 h-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-600"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-end justify-end">
            <div className="text-right">
              <h2 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                Working Process
              </h2>
              <div className="w-64 h-2 bg-gradient-to-l from-orange-500 to-red-500 ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

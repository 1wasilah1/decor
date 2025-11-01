'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'SKINTIFIC 2025',
      category: 'booth',
      image: '/portfolio-skintific-2025.jpg',
      description: 'Modern skincare brand booth design',
      year: '2025'
    },
    {
      id: 2,
      title: 'MUAQ @JXB 23',
      category: 'booth',
      image: '/portfolio-muaq-jxb-23.jpg',
      description: 'Makeup artist showcase booth',
      year: '2023'
    },
    {
      id: 3,
      title: 'For Skin Sake',
      category: 'booth',
      image: '/portfolio-for-skin-sake.jpg',
      description: 'Skincare product exhibition',
      year: '2024'
    },
    {
      id: 4,
      title: 'Mad For Make Up',
      category: 'booth',
      image: '/portfolio-mad-for-makeup.jpg',
      description: 'Cosmetics brand presentation',
      year: '2024'
    },
    {
      id: 5,
      title: 'Y.O.U @MXB 23',
      category: 'booth',
      image: '/portfolio-you-mxb-23.jpg',
      description: 'Fashion brand showcase',
      year: '2023'
    },
    {
      id: 6,
      title: 'Skin1004 @SBW 23',
      category: 'booth',
      image: '/portfolio-skin1004-sbw-23.jpg',
      description: 'Skincare brand exhibition',
      year: '2023'
    },
    {
      id: 7,
      title: 'MYKONOS @JXB 23',
      category: 'booth',
      image: '/portfolio-mykonos-jxb-23.jpg',
      description: 'Fashion retail booth',
      year: '2023'
    },
    {
      id: 8,
      title: 'Roona Senayan City',
      category: 'store',
      image: '/portfolio-roona-senayan.jpg',
      description: 'Commercial store design',
      year: '2024'
    },
    {
      id: 9,
      title: 'Barenbliss BFA SBY',
      category: 'booth',
      image: '/portfolio-barenbliss-bfa.jpg',
      description: 'Beauty brand exhibition',
      year: '2024'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'booth', label: 'Booth' },
    { id: 'store', label: 'Store' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600">
            Discover our latest projects and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-600 transition-all">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'booth'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>


              </div>
            </div>
          ))}
        </div>

        {/* Download Portfolio Button */}
        <div className="text-center mt-16">
          <a
            href="/SaveDecor-Portfolio.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
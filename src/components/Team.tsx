'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const team = [
  {
    name: 'CHRIS YUN SU JANG',
    position: 'Director',
    image: '/images/team1.jpg'
  },
  {
    name: 'RIANI FIRMANSYAH LIANURY',
    position: 'Operational Director',
    image: '/images/team2.jpg'
  },
  {
    name: 'JOHANN LEO',
    position: 'S. Project Manager',
    image: '/images/team3.jpg'
  },
  {
    name: 'RONALD SETUBAL SABANDO',
    position: 'Technical Manager',
    image: '/images/team4.jpg'
  }
];

export default function Team() {
  const { t } = useLanguage();
  
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet The Team
          </h2>
          <p className="text-lg text-gray-600">
            Our dedicated team of professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamOld() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Meet<br />the Team
            </h2>
            <div className="w-64 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>

          <div className="space-y-8">
            {team.map((member, index) => (
              <div key={index} className="flex items-center space-x-6 relative">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white/20">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-300">{member.position}</p>
                </div>
                <div className="absolute right-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500"></div>
                <div className="absolute right-0 top-1/2 w-full h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

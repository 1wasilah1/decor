'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function OnlineOrder() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    order: [] as string[],
    deliveryDate: '',
    file: null as File | null
  });

  const orderOptions = [
    'Backdrop Rental',
    'Custom CNC Cutting',
    'Custom Standing Character',
    'Custom Booth Design'
  ];

  const handleCheckbox = (option: string) => {
    setFormData(prev => ({
      ...prev,
      order: prev.order.includes(option)
        ? prev.order.filter(o => o !== option)
        : [...prev.order, option]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}%0APhone: ${formData.phone}%0AOrder: ${formData.order.join(', ')}%0ADelivery Date: ${formData.deliveryDate}`;
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <section id="order" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Online Order
        </h2>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Order</label>
            {orderOptions.map((option) => (
              <label key={option} className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.order.includes(option)}
                  onChange={() => handleCheckbox(option)}
                  className="mr-3 w-5 h-5"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Delivery Date</label>
            <input
              type="date"
              required
              value={formData.deliveryDate}
              onChange={(e) => setFormData({...formData, deliveryDate: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Upload File/Design (if any)</label>
            <input
              type="file"
              onChange={(e) => setFormData({...formData, file: e.target.files?.[0] || null})}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            Submit Order via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

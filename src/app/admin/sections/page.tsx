'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8700/api';

export default function SectionSettingsPage() {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [activeSection, setActiveSection] = useState('hero');
  const [settings, setSettings] = useState<Record<string, unknown>>({});

  const loadSettings = async (section: string) => {
    try {
      const res = await fetch(`${API_URL}/section-settings/${section}`);
      const data = await res.json();
      setSettings(data);
    } catch {
      console.error('Failed to load settings');
    }
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    if (!savedToken) {
      router.push('/admin');
    } else if (savedToken !== token) {
      setToken(savedToken);
      loadSettings('hero');
    }
  }, [router, token]);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    loadSettings(section);
  };

  const getStringValue = (key: string): string => {
    const value = settings[key];
    return typeof value === 'string' ? value : '';
  };

  const getArrayValue = (key: string): unknown[] => {
    const value = settings[key];
    return Array.isArray(value) ? value : [];
  };

  const handleChange = (field: string, value: unknown) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    const current = settings[field];
    const arr = Array.isArray(current) ? [...current] : [];
    arr[index] = value;
    setSettings({ ...settings, [field]: arr });
  };

  const addArrayItem = (field: string) => {
    const current = settings[field];
    const arr = Array.isArray(current) ? [...current, ''] : [''];
    setSettings({ ...settings, [field]: arr });
  };

  const removeArrayItem = (field: string, index: number) => {
    const current = settings[field];
    const arr = Array.isArray(current) ? [...current] : [];
    arr.splice(index, 1);
    setSettings({ ...settings, [field]: arr });
  };

  const saveSettings = async () => {
    try {
      const res = await fetch(`${API_URL}/section-settings/${activeSection}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(settings)
      });
      if (res.ok) {
        alert('Settings saved!');
      }
    } catch {
      alert('Failed to save');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-black">Section Settings</h1>
          <button onClick={() => router.push('/admin')} className="text-blue-600 hover:underline">
            Back to Admin
          </button>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          {['hero', 'services', 'workingProcess', 'about', 'popUpStore', 'contactForm', 'portfolio', 'instagram', 'onlineOrder', 'consultation', 'footer', 'whatsappButton'].map(section => (
            <button
              key={section}
              onClick={() => handleSectionChange(section)}
              className={`px-4 py-2 rounded ${activeSection === section ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {activeSection === 'hero' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input
                  type="text"
                  value={getStringValue('title')}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Subtitle</label>
                <textarea
                  value={getStringValue('subtitle')}
                  onChange={(e) => handleChange('subtitle', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Button Text</label>
                <input
                  type="text"
                  value={getStringValue('buttonText')}
                  onChange={(e) => handleChange('buttonText', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Image Path</label>
                <input
                  type="text"
                  value={getStringValue('image')}
                  onChange={(e) => handleChange('image', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Video URL (Google Drive)</label>
                <input
                  type="text"
                  value={getStringValue('videoUrl')}
                  onChange={(e) => handleChange('videoUrl', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                  placeholder="https://drive.google.com/file/d/FILE_ID/view"
                />
                <p className="text-sm text-gray-600 mt-1">Paste Google Drive video link. Video akan digunakan sebagai background jika diisi.</p>
              </div>
            </>
          )}

          {activeSection === 'services' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input
                  type="text"
                  value={getStringValue('title')}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Description</label>
                <textarea
                  value={getStringValue('description')}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Brands</label>
                {getArrayValue('brands').map((brand, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={String(brand)}
                      onChange={(e) => handleArrayChange('brands', index, e.target.value)}
                      className="flex-1 p-2 border rounded text-black"
                    />
                    <button onClick={() => removeArrayItem('brands', index)} className="px-3 py-2 bg-red-500 text-white rounded">
                      Remove
                    </button>
                  </div>
                ))}
                <button onClick={() => addArrayItem('brands')} className="px-4 py-2 bg-green-500 text-white rounded">
                  Add Brand
                </button>
              </div>
            </>
          )}

          {activeSection === 'about' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Subtitle</label>
                <input
                  type="text"
                  value={getStringValue('subtitle')}
                  onChange={(e) => handleChange('subtitle', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input
                  type="text"
                  value={getStringValue('title')}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Description</label>
                <textarea
                  value={getStringValue('description')}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Why Us Items</label>
                {getArrayValue('whyUs').map((item, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={String(item)}
                      onChange={(e) => handleArrayChange('whyUs', index, e.target.value)}
                      className="flex-1 p-2 border rounded text-black"
                    />
                    <button onClick={() => removeArrayItem('whyUs', index)} className="px-3 py-2 bg-red-500 text-white rounded">
                      Remove
                    </button>
                  </div>
                ))}
                <button onClick={() => addArrayItem('whyUs')} className="px-4 py-2 bg-green-500 text-white rounded">
                  Add Item
                </button>
              </div>
            </>
          )}

          {activeSection === 'popUpStore' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input
                  type="text"
                  value={getStringValue('title')}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Description</label>
                <textarea
                  value={getStringValue('description')}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                  rows={4}
                />
              </div>
            </>
          )}

          {activeSection === 'workingProcess' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input
                  type="text"
                  value={getStringValue('title')}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="w-full p-3 border rounded text-black"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Processes (JSON)</label>
                <textarea
                  value={JSON.stringify(settings.processes || [], null, 2)}
                  onChange={(e) => {
                    try {
                      handleChange('processes', JSON.parse(e.target.value));
                    } catch {}
                  }}
                  className="w-full p-3 border rounded text-black font-mono text-sm"
                  rows={15}
                />
              </div>
            </>
          )}

          {activeSection === 'contactForm' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input type="text" value={getStringValue('title')} onChange={(e) => handleChange('title', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Services (JSON)</label>
                <textarea value={JSON.stringify(settings.services || [], null, 2)} onChange={(e) => { try { handleChange('services', JSON.parse(e.target.value)); } catch {} }} className="w-full p-3 border rounded text-black font-mono text-sm" rows={10} />
              </div>
            </>
          )}

          {activeSection === 'portfolio' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input type="text" value={getStringValue('title')} onChange={(e) => handleChange('title', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Description</label>
                <textarea value={getStringValue('description')} onChange={(e) => handleChange('description', e.target.value)} className="w-full p-3 border rounded text-black" rows={3} />
              </div>
            </>
          )}

          {activeSection === 'instagram' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input type="text" value={getStringValue('title')} onChange={(e) => handleChange('title', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Description</label>
                <textarea value={getStringValue('description')} onChange={(e) => handleChange('description', e.target.value)} className="w-full p-3 border rounded text-black" rows={2} />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Instagram URL</label>
                <input type="text" value={getStringValue('url')} onChange={(e) => handleChange('url', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Posts (JSON)</label>
                <textarea value={JSON.stringify(settings.posts || [], null, 2)} onChange={(e) => { try { handleChange('posts', JSON.parse(e.target.value)); } catch {} }} className="w-full p-3 border rounded text-black font-mono text-sm" rows={10} />
              </div>
            </>
          )}

          {activeSection === 'onlineOrder' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input type="text" value={getStringValue('title')} onChange={(e) => handleChange('title', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Description</label>
                <textarea value={getStringValue('description')} onChange={(e) => handleChange('description', e.target.value)} className="w-full p-3 border rounded text-black" rows={3} />
              </div>
            </>
          )}

          {activeSection === 'consultation' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Subtitle</label>
                <input type="text" value={getStringValue('subtitle')} onChange={(e) => handleChange('subtitle', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Title</label>
                <input type="text" value={getStringValue('title')} onChange={(e) => handleChange('title', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">WhatsApp Number</label>
                <input type="text" value={getStringValue('whatsappNumber')} onChange={(e) => handleChange('whatsappNumber', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">WhatsApp Message</label>
                <textarea value={getStringValue('whatsappMessage')} onChange={(e) => handleChange('whatsappMessage', e.target.value)} className="w-full p-3 border rounded text-black" rows={2} />
              </div>
            </>
          )}

          {activeSection === 'footer' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Company Name</label>
                <input type="text" value={getStringValue('companyName')} onChange={(e) => handleChange('companyName', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Description</label>
                <textarea value={getStringValue('description')} onChange={(e) => handleChange('description', e.target.value)} className="w-full p-3 border rounded text-black" rows={2} />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Address</label>
                <textarea value={getStringValue('address')} onChange={(e) => handleChange('address', e.target.value)} className="w-full p-3 border rounded text-black" rows={3} />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Instagram URL</label>
                <input type="text" value={getStringValue('instagram')} onChange={(e) => handleChange('instagram', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
            </>
          )}

          {activeSection === 'whatsappButton' && (
            <>
              <div>
                <label className="block text-black font-semibold mb-2">Phone Number</label>
                <input type="text" value={getStringValue('phoneNumber')} onChange={(e) => handleChange('phoneNumber', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Default Message</label>
                <textarea value={getStringValue('message')} onChange={(e) => handleChange('message', e.target.value)} className="w-full p-3 border rounded text-black" rows={2} />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Button Text</label>
                <input type="text" value={getStringValue('buttonText')} onChange={(e) => handleChange('buttonText', e.target.value)} className="w-full p-3 border rounded text-black" />
              </div>
            </>
          )}
        </div>

        <button onClick={saveSettings} className="w-full mt-6 bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Save Settings
        </button>
      </div>
    </div>
  );
}

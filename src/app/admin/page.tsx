'use client';

import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8700/api';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sections, setSections] = useState<any[]>([]);
  const [menus, setMenus] = useState<any[]>([]);
  const [token, setToken] = useState('');
  const [activeTab, setActiveTab] = useState<'sections' | 'menus'>('sections');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('authToken');
      if (savedToken) {
        setToken(savedToken);
        setIsLoggedIn(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) loadSections();
  }, [isLoggedIn]);

  const login = async () => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('authToken', data.token);
        setToken(data.token);
        setIsLoggedIn(true);
      } else {
        alert('Username atau password salah!');
      }
    } catch (error) {
      alert('Gagal login');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken('');
    setIsLoggedIn(false);
  };

  const loadSections = async () => {
    try {
      const res = await fetch(`${API_URL}/sections`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setSections(data.sections.sort((a: any, b: any) => a.order - b.order));
        setMenus(data.menus.sort((a: any, b: any) => a.order - b.order));
      } else {
        logout();
      }
    } catch (error) {
      alert('Gagal memuat data');
    }
  };

  const toggleVisible = (index: number) => {
    if (activeTab === 'sections') {
      const updated = [...sections];
      updated[index].visible = !updated[index].visible;
      setSections(updated);
    } else {
      const updated = [...menus];
      updated[index].visible = !updated[index].visible;
      setMenus(updated);
    }
  };

  const updateOrder = (index: number, value: number) => {
    if (activeTab === 'sections') {
      const updated = [...sections];
      updated[index].order = value;
      setSections(updated);
    } else {
      const updated = [...menus];
      updated[index].order = value;
      setMenus(updated);
    }
  };

  const saveSections = async () => {
    try {
      const res = await fetch(`${API_URL}/sections`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ sections, menus })
      });
      if (res.ok) {
        alert('Perubahan berhasil disimpan!');
        loadSections();
      } else {
        logout();
      }
    } catch (error) {
      alert('Gagal menyimpan');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-6 text-black">Login Admin</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 border rounded text-black"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border rounded text-black"
          />
          <button onClick={login} className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-black">Admin Settings</h1>
        
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('sections')}
            className={`px-4 py-2 rounded ${activeTab === 'sections' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            Sections
          </button>
          <button
            onClick={() => setActiveTab('menus')}
            className={`px-4 py-2 rounded ${activeTab === 'menus' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            Menu Navbar
          </button>
        </div>
        
        <div className="space-y-3 mb-6">
          {(activeTab === 'sections' ? sections : menus).map((section, index) => (
            <div key={section.id} className="flex items-center justify-between p-4 bg-gray-50 rounded border">
              <div className="font-semibold text-black">{section.name || section.label}</div>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={section.order}
                  onChange={(e) => updateOrder(index, parseInt(e.target.value))}
                  className="w-16 p-2 border rounded text-center text-black"
                />
                <button
                  onClick={() => toggleVisible(index)}
                  className={`w-12 h-6 rounded-full transition ${
                    section.visible ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition transform ${
                    section.visible ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={saveSections} className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 mb-3">
          Simpan Perubahan
        </button>
        <button onClick={() => window.location.href = '/admin/sections'} className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 mb-3">
          Edit Section Content
        </button>
        <button onClick={logout} className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700">
          Logout
        </button>
      </div>
    </div>
  );
}

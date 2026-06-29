import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('cms_token', data.token);
        onLogin();
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg w-96 flex flex-col gap-4 border border-zinc-800">
        <h1 className="text-2xl font-semibold text-center mb-4">PitchBrands CMS</h1>
        {error && <div className="text-red-400 text-sm bg-red-400/10 p-3 rounded">{error}</div>}
        <input 
          type="text" 
          placeholder="Username" 
          className="bg-zinc-800 p-3 rounded outline-none border border-zinc-700 focus:border-zinc-500"
          value={username} onChange={e => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="bg-zinc-800 p-3 rounded outline-none border border-zinc-700 focus:border-zinc-500"
          value={password} onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-white text-black p-3 rounded font-medium mt-2 hover:bg-zinc-200 transition-colors">
          Log in
        </button>
      </form>
    </div>
  );
};

const AdminDashboard = () => {
  const [schema, setSchema] = useState(null);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Load schema
    fetch('/api/schema')
      .then(r => {
        if (!r.ok) throw new Error('Failed to load schema');
        return r.json();
      })
      .then(setSchema)
      .catch(console.error);

    // Load drafts
    const token = localStorage.getItem('cms_token');
    fetch('/api/content/drafts', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(r => {
        if (!r.ok) throw new Error('Failed to load drafts');
        return r.json();
      })
      .then(setContent)
      .catch(console.error);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('cms_token');
    window.location.reload();
  };

  if (!schema || !content) return <div className="p-8 text-white">Loading CMS...</div>;

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white font-sans">
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
        <div className="p-6 font-semibold text-lg border-b border-zinc-800">CMS Admin</div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {schema.pages.map(page => (
            <div key={page.name} className="py-2 px-3 rounded hover:bg-zinc-800 cursor-pointer transition-colors">
              {page.name}
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-zinc-800">
          <button onClick={handleLogout} className="text-zinc-400 hover:text-white transition-colors w-full text-left px-3 py-2">Log out</button>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-y-auto bg-zinc-950">
        <h2 className="text-3xl font-light mb-8">Dashboard Overview</h2>
        <p className="text-zinc-400">Select a page from the sidebar to start editing.</p>
      </div>
    </div>
  );
};

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('cms_token'));

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

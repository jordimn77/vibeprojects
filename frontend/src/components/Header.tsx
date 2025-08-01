import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  return (
    <header className="p-4 flex justify-between items-center bg-white/20 backdrop-blur text-white">
      <Link to="/" className="text-2xl font-bold">GeniusReplica</Link>
      <nav className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <button
          className="ml-4 px-2 py-1 border rounded hover:bg-white/10"
          onClick={() => setDark(!dark)}
        >
          {dark ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  );
}

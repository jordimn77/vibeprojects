import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center bg-white/20 backdrop-blur text-white">
      <Link to="/" className="text-2xl font-bold">GeniusReplica</Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </nav>
    </header>
  );
}

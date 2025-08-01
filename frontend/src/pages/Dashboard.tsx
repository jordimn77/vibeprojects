import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from '../components/Chat';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Chat with your Avatar</h2>
        <Chat />
      </main>
      <Footer />
    </div>
  );
}

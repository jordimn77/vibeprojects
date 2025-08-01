import { useState } from 'react';

interface Message { text: string; from: 'user' | 'bot'; }

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;
    const userMsg = { text: input, from: 'user' } as Message;
    setMessages([...messages, userMsg]);
    setInput('');
    const res = await fetch(`/api/respond?message=${encodeURIComponent(input)}`);
    const data = await res.json();
    setMessages(m => [...m, { text: data.reply, from: 'bot' }]);
  };

  return (
    <div className="p-4">
      <div className="h-64 overflow-y-auto mb-4 space-y-2 bg-white/10 p-2 rounded">
        {messages.map((m, idx) => (
          <div key={idx} className={m.from === 'user' ? 'text-right' : 'text-left'}>
            <span
              className={`px-3 py-2 rounded inline-block max-w-xs break-words ${
                m.from === 'user'
                  ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white'
                  : 'bg-white text-gray-800'
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 p-2 rounded text-gray-800"
          placeholder="Escribe tu mensaje..."
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 text-white px-4 rounded hover:bg-indigo-500"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

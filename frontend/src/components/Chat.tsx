import { useState } from 'react';

interface Message { text: string; from: 'user' | 'bot'; }

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, from: 'user' }, { text: 'Respuesta de ejemplo en Español.', from: 'bot' }]);
    setInput('');
  };

  return (
    <div className="p-4">
      <div className="h-64 overflow-y-auto mb-4 space-y-2 bg-white/10 p-2 rounded">
        {messages.map((m, idx) => (
          <div key={idx} className={m.from === 'user' ? 'text-right' : 'text-left'}>
            <span className="px-2 py-1 rounded bg-white/20 text-white inline-block">{m.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 p-2 rounded" placeholder="Escribe tu mensaje..." />
        <button onClick={sendMessage} className="bg-indigo-600 text-white px-4 rounded">Enviar</button>
      </div>
    </div>
  );
}

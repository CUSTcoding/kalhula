'use client';

import { useState } from 'react';
import { Bot, X, Send, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function AIAssistantButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Olá! Como posso ajudar você hoje?' }
  ]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      // Substitua '/api/agent' pelo seu endpoint real da IA
      const res = await fetch('/api/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await res.json();
      
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply || 'Resposta recebida do agente!' }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Desculpe, ocorreu um erro ao conectar ao agente.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-15 right-6 z-50 flex flex-col items-end">
      {/* Janela de Chat (Aberto) */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl bg-white p-4 shadow-2xl border border-gray-200 flex flex-col h-[450px] transition-all duration-300">
          {/* Cabeçalho */}
          <div className="flex items-center justify-between border-b pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-black text-blue-600 rounded-lg">
                
                         <Image 
                          src="/imgs/logo.png" 
                          alt="Logo da empresa" 
                          width={40} 
                          height={40} 
                        />
              </div>
              <span className="font-semibold text-gray-800">Assistente IA</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-gray-600 p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Histórico de Mensagens */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-2xl max-w-[85%] ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white ml-auto rounded-br-none'
                    : 'bg-gray-100 text-gray-800 mr-auto rounded-bl-none'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="flex items-center gap-2 text-gray-500 bg-gray-100 p-3 rounded-2xl rounded-bl-none w-max text-xs">
                <Loader2 className="w-4 h-4 animate-spin" /> Pensando...
              </div>
            )}
          </div>

          {/* Input de Envio */}
          <div className="mt-3 flex items-center gap-2 border-t pt-3">
            <input
              type="text"
              placeholder="Digite sua pergunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl disabled:opacity-50 transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Botão Flutuante Fixo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
        aria-label="Abrir assistente de IA"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>
    </div>
  );
}
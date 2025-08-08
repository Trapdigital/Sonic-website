import React, { useState, useRef, useEffect } from 'react';

const FAQ = [
  {
    question: 'What services do you offer?',
    answer: 'We offer mobile app development, web development, UI/UX design, and software consultancy.'
  },
  {
    question: 'How can I contact TrapDigital Software Solutions?',
    answer: 'You can use the contact form on our website or email contact@trapdigitalsoftware.com.'
  },
  {
    question: 'Can I get a quote for my project?',
    answer: 'Yes! Please provide your project details in the chat or contact form, and we will get back to you.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Absolutely. We offer ongoing support and maintenance for all our solutions.'
  }
];

function getBotResponse(input: string): string {
  const text = input.toLowerCase();
  // Direct FAQ fuzzy match
  for (const faq of FAQ) {
    const questionWords = faq.question.toLowerCase().split(' ');
    let matchCount = 0;
    for (const word of questionWords) {
      if (text.includes(word)) matchCount++;
    }
    if (matchCount >= Math.max(2, Math.floor(questionWords.length / 2))) {
      return faq.answer;
    }
  }
  // Enhanced phrase and keyword matching
  if (/\b(mobile app|android|ios|react native|flutter|app development)\b/.test(text)) {
    return 'We build mobile apps for Android and iOS using modern frameworks like React Native and Flutter. Let us know your requirements for a tailored solution.';
  }
  if (/\b(web development|website|frontend|backend|full stack|web app|web application)\b/.test(text)) {
    return 'We offer full-stack web development, including frontend and backend solutions. Share your project details for a free consultation.';
  }
  if (/\b(ui|ux|design|user experience|interface|prototype|wireframe)\b/.test(text)) {
    return 'Our UI/UX design team creates intuitive, beautiful interfaces and prototypes for your users.';
  }
  if (/\b(consultancy|advice|strategy|planning|project management|software consulting)\b/.test(text)) {
    return 'We provide software consultancy, project planning, and strategic advice. Ask us about your business goals!';
  }
  if (/\b(support|maintenance|update|bug|issue|fix|troubleshoot|problem)\b/.test(text)) {
    return 'We offer ongoing support, maintenance, troubleshooting, and updates for all our solutions.';
  }
  if (/\b(price|cost|quote|estimate|budget|how much|fee|charge)\b/.test(text)) {
    return 'Please share your project details and we will provide a tailored quote or estimate.';
  }
  if (/\b(contact|email|phone|reach|call|connect|address)\b/.test(text)) {
    return 'You can contact us via the website form or email contact@trapdigitalsoftware.com.';
  }
  if (/\b(human|agent|real person|talk to someone|help|support team|customer service)\b/.test(text)) {
    return 'Connecting you to a human agent. Please wait...';
  }
  // Fallback: suggest possible topics
  if (text.length > 10) {
    return "I'm not sure I understood your question. You can ask about our services, pricing, support, or how to contact us. For complex queries, please provide more details or request a human agent.";
  }
  return "I'm here to help! Please ask about our services, support, pricing, or how to contact us.";
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: input }]);
    setTimeout(() => {
      const botReply = getBotResponse(input);
      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
    setInput('');
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000, background: '#0a2540', color: '#fff', border: 'none', borderRadius: 24, padding: '0.75rem 1.5rem 0.75rem 1.1rem', fontWeight: 600, fontSize: '1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
          aria-label="Open chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 6 }}>
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <path d="M7 12c0-2.21 2.02-4 4.5-4s4.5 1.79 4.5 4c0 2.21-2.02 4-4.5 4s-4.5-1.79-4.5-4zm4.5-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#0a2540" />
          </svg>
          Chat with us
        </button>
      )}
      {open && (
        <div style={{ position: 'fixed', bottom: 24, right: 24, width: 340, background: '#f4f6fa', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.12)', zIndex: 1000, fontFamily: 'inherit', border: '1px solid #e0e0e0' }}>
          <div style={{ background: '#0a2540', color: '#fff', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '1rem', fontWeight: 700, fontSize: '1.1rem', letterSpacing: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            TrapDigital Chatbot
            <button onClick={() => setOpen(false)} aria-label="Close chat" style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.3rem', cursor: 'pointer', marginLeft: 8 }}>&times;</button>
          </div>
          <div style={{ maxHeight: 320, overflowY: 'auto', padding: '1rem' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ textAlign: msg.sender === 'bot' ? 'left' : 'right', marginBottom: 8 }}>
                <span style={{ display: 'inline-block', background: msg.sender === 'bot' ? '#e0f7fa' : '#b2ebf2', color: '#222', borderRadius: 8, padding: '0.5rem 1rem', maxWidth: '80%' }}>
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSend} style={{ display: 'flex', borderTop: '1px solid #e0e0e0', padding: '0.75rem', background: '#fafcff' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, borderRadius: 8, border: '1px solid #b2ebf2', padding: '0.5rem', fontSize: '1rem', background: '#fff' }}
              aria-label="Chatbot message input"
            />
            <button type="submit" style={{ marginLeft: 8, background: '#0a2540', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.25rem', fontWeight: 600, cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;

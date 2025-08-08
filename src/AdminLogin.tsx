import React, { useState } from 'react';

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === 'admin123') {
      onLogin();
    } else {
      setError('Invalid password');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '2rem auto', padding: '2rem', background: 'var(--card-bg)', borderRadius: 8 }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ width: '100%', padding: '0.75rem', borderRadius: 6, border: '1px solid #ccc', marginBottom: '1rem' }}
        aria-label="Admin Password"
      />
      <button type="submit" style={{ width: '100%', padding: '0.75rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Login</button>
      {error && <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{error}</p>}
    </form>
  );
}

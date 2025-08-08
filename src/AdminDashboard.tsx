import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import { useGA4Stats } from './useGA4Stats';

export default function AdminDashboard() {
  const { stats: gaStats, loading: gaLoading, error: gaError } = useGA4Stats();
  const [loggedIn, setLoggedIn] = useState(false);
  // Local state for blog posts with persistence
  const [blog, setBlog] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('td_blog');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogDate, setNewBlogDate] = useState('');
  const [newBlogImage, setNewBlogImage] = useState('');
  const [newBlogBody, setNewBlogBody] = useState('');
  // Local state for case studies with persistence
  const [caseStudies, setCaseStudies] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('td_caseStudies');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  // Save blog and case studies to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('td_blog', JSON.stringify(blog));
  }, [blog]);
  React.useEffect(() => {
    localStorage.setItem('td_caseStudies', JSON.stringify(caseStudies));
  }, [caseStudies]);
  const [newCaseTitle, setNewCaseTitle] = useState('');
  const [newCaseDate, setNewCaseDate] = useState('');
  const [newCaseImage, setNewCaseImage] = useState('');
  const [newCaseBody, setNewCaseBody] = useState('');
  // Google Analytics stats are viewed in the GA dashboard. No direct API widget is provided here.

  if (!loggedIn) return <AdminLogin onLogin={() => setLoggedIn(true)} />;

  // Removed direct image upload. Images should be uploaded via Sanity Studio. Admins can select from existing images.
  // Google Analytics: Add your GA4 Measurement ID to index.html or main App component.

  function handleAddBlog(e: React.FormEvent) {
    e.preventDefault();
    if (!newBlogTitle.trim() || !newBlogDate.trim() || !newBlogBody.trim()) return;
    setBlog(prev => [
      ...prev,
      {
        _id: Date.now().toString(),
        title: newBlogTitle,
        publishedAt: newBlogDate,
        image: newBlogImage,
        body: newBlogBody,
        editing: false,
      },
    ]);
    setNewBlogTitle('');
    setNewBlogDate('');
    setNewBlogImage('');
    setNewBlogBody('');
  }
  function handleDeleteBlog(id: string) {
    setBlog(prev => prev.filter(b => b._id !== id));
  }
  function handleEditBlog(id: string) {
    setBlog(prev => prev.map(b => b._id === id ? { ...b, editing: true } : b));
  }
  function handleSaveBlog(id: string, title: string, date: string, image: string, body: string) {
    setBlog(prev => prev.map(b => b._id === id ? { ...b, title, publishedAt: date, image, body, editing: false } : b));
  }
  function handleCancelEditBlog(id: string) {
    setBlog(prev => prev.map(b => b._id === id ? { ...b, editing: false } : b));
  }
  function handleAddCase(e: React.FormEvent) {
    e.preventDefault();
    if (!newCaseTitle.trim() || !newCaseDate.trim() || !newCaseBody.trim()) return;
    setCaseStudies(prev => [
      ...prev,
      {
        _id: Date.now().toString(),
        title: newCaseTitle,
        publishedAt: newCaseDate,
        image: newCaseImage,
        body: newCaseBody,
        editing: false,
      },
    ]);
    setNewCaseTitle('');
    setNewCaseDate('');
    setNewCaseImage('');
    setNewCaseBody('');
  }
  function handleDeleteCase(id: string) {
    setCaseStudies(prev => prev.filter(c => c._id !== id));
  }
  function handleEditCase(id: string) {
    setCaseStudies(prev => prev.map(c => c._id === id ? { ...c, editing: true } : c));
  }
  function handleSaveCase(id: string, title: string, date: string, image: string, body: string) {
    setCaseStudies(prev => prev.map(c => c._id === id ? { ...c, title, publishedAt: date, image, body, editing: false } : c));
  }
  function handleCancelEditCase(id: string) {
    setCaseStudies(prev => prev.map(c => c._id === id ? { ...c, editing: false } : c));
  }

  return (
    <section style={{ maxWidth: 1000, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--econet-blue)', fontWeight: 800 }}>Admin Dashboard</h2>
      <div className="econet-cards" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="econet-card" style={{ flex: '1 1 320px', background: 'var(--econet-white)', borderRadius: '20px', padding: '2rem 1.5rem', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <h3 style={{ color: 'var(--econet-blue)', fontWeight: 700 }}>Website Analytics (Google Analytics 4)</h3>
          <p>
            <em>Stats below are fetched from Google Analytics Data API.<br />
            You must set your GA4 Property ID and API key in <code>src/useGA4Stats.ts</code>.</em>
          </p>
          {gaLoading && <p>Loading analytics...</p>}
          {gaError && <p style={{ color: 'red' }}>Error: {gaError}</p>}
          {gaStats && (
            <div>
              <p><strong>Visitors (30d):</strong> {gaStats.users}</p>
              <p><strong>Pageviews (30d):</strong> {gaStats.pageviews}</p>
            </div>
          )}
          <p style={{ fontSize: '0.9em', marginTop: 12 }}>
            For full analytics, visit your <a href="https://analytics.google.com/analytics/web/" target="_blank" rel="noopener noreferrer">Google Analytics Dashboard</a>.
          </p>
        </div>
        <div className="econet-card" style={{ flex: '1 1 320px', background: 'var(--econet-white)', borderRadius: '20px', padding: '2rem 1.5rem', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <h3 style={{ color: 'var(--econet-blue)', fontWeight: 700 }}>Blog Management</h3>
          <form onSubmit={handleAddBlog} style={{ marginBottom: 16 }}>
            <input type="text" value={newBlogTitle} onChange={e => setNewBlogTitle(e.target.value)} placeholder="Title" style={{ width: '100%', padding: '0.75rem', borderRadius: 10, border: '1px solid #cce', marginBottom: 8, fontSize: '1rem' }} required />
            <input type="datetime-local" onChange={e => setNewBlogDate(e.target.value)} placeholder="Published At" style={{ width: '100%', padding: '0.75rem', borderRadius: 10, border: '1px solid #cce', marginBottom: 8, fontSize: '1rem' }} required />
            <input type="text" value={newBlogImage} onChange={e => setNewBlogImage(e.target.value)} placeholder="Image URL (optional)" style={{ width: '100%', marginBottom: 8, padding: '0.75rem', borderRadius: 10, border: '1px solid #cce', fontSize: '1rem' }} />
            <textarea onChange={e => setNewBlogBody(e.target.value)} placeholder="Body" style={{ width: '100%', padding: '0.75rem', borderRadius: 10, border: '1px solid #cce', marginBottom: 8, minHeight: 80, fontSize: '1rem' }} required />
            <button type="submit" style={{ padding: '0.75rem 1.5rem', background: 'var(--econet-green)', color: 'var(--econet-white)', border: 'none', borderRadius: '32px', cursor: 'pointer', fontWeight: 700, boxShadow: 'var(--econet-shadow)' }}>Add</button>
          </form>
          <ul>{blog.map((b: any) => (
            <li key={b._id} style={{ marginBottom: 8 }}>
              {b.editing ? (
                <form onSubmit={e => { e.preventDefault(); handleSaveBlog(b._id, b.title, b.publishedAt, b.image, b.body); }} style={{ marginBottom: 8 }}>
                  <input type="text" value={b.title} onChange={e => handleSaveBlog(b._id, e.target.value, b.publishedAt, b.image, b.body)} placeholder="Title" style={{ width: '100%', marginBottom: 4 }} required />
                  <input type="datetime-local" value={b.publishedAt} onChange={e => handleSaveBlog(b._id, b.title, e.target.value, b.image, b.body)} style={{ width: '100%', marginBottom: 4 }} required />
                  <input type="text" value={b.image} onChange={e => handleSaveBlog(b._id, b.title, b.publishedAt, e.target.value, b.body)} placeholder="Image URL" style={{ width: '100%', marginBottom: 4 }} />
                  <textarea value={b.body} onChange={e => handleSaveBlog(b._id, b.title, b.publishedAt, b.image, e.target.value)} placeholder="Body" style={{ width: '100%', marginBottom: 4 }} required />
                  <button type="submit" style={{ marginRight: 8 }}>Save</button>
                  <button type="button" onClick={() => handleCancelEditBlog(b._id)}>Cancel</button>
                </form>
              ) : (
                <>
                  <strong>{b.title}</strong> <br />
                  {b.publishedAt && <span>Published: {new Date(b.publishedAt).toLocaleString()}</span>}<br />
                  {b.image && <img src={b.image} alt={b.title} style={{ maxWidth: 100, margin: '8px 0', borderRadius: 8 }} />}<br />
                  {b.body && <span>{typeof b.body === 'string' ? b.body : ''}</span>}<br />
                  <button style={{ marginLeft: 8 }} onClick={() => handleEditBlog(b._id)}>Edit</button>
                  <button style={{ marginLeft: 8, background: 'red', color: '#fff', border: 'none', borderRadius: 8, padding: '0.25rem 0.75rem', cursor: 'pointer', fontWeight: 600 }} onClick={() => handleDeleteBlog(b._id)}>Delete</button>
                </>
              )}
            </li>
          ))}</ul>
        </div>
        <div className="econet-card" style={{ flex: '1 1 320px', background: 'var(--econet-white)', borderRadius: '20px', padding: '2rem 1.5rem', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <h3 style={{ color: 'var(--econet-blue)', fontWeight: 700 }}>Case Studies Management</h3>
          <form onSubmit={handleAddCase} style={{ marginBottom: 16 }}>
            <input type="text" value={newCaseTitle} onChange={e => setNewCaseTitle(e.target.value)} placeholder="Title" style={{ width: '100%', padding: '0.75rem', borderRadius: 10, border: '1px solid #cce', marginBottom: 8, fontSize: '1rem' }} required />
            <input type="datetime-local" onChange={e => setNewCaseDate(e.target.value)} placeholder="Published At" style={{ width: '100%', padding: '0.75rem', borderRadius: 10, border: '1px solid #cce', marginBottom: 8, fontSize: '1rem' }} required />
            <input type="text" value={newCaseImage} onChange={e => setNewCaseImage(e.target.value)} placeholder="Image URL (optional)" style={{ width: '100%', marginBottom: 8, padding: '0.75rem', borderRadius: 10, border: '1px solid #cce', fontSize: '1rem' }} />
            <textarea onChange={e => setNewCaseBody(e.target.value)} placeholder="Body" style={{ width: '100%', padding: '0.75rem', borderRadius: 10, border: '1px solid #cce', marginBottom: 8, minHeight: 80, fontSize: '1rem' }} required />
            <button type="submit" style={{ padding: '0.75rem 1.5rem', background: 'var(--econet-green)', color: 'var(--econet-white)', border: 'none', borderRadius: '32px', cursor: 'pointer', fontWeight: 700, boxShadow: 'var(--econet-shadow)' }}>Add</button>
          </form>
          <ul>{caseStudies.map((c: any) => (
            <li key={c._id} style={{ marginBottom: 8 }}>
              {c.editing ? (
                <form onSubmit={e => { e.preventDefault(); handleSaveCase(c._id, c.title, c.publishedAt, c.image, c.body); }} style={{ marginBottom: 8 }}>
                  <input type="text" value={c.title} onChange={e => handleSaveCase(c._id, e.target.value, c.publishedAt, c.image, c.body)} placeholder="Title" style={{ width: '100%', marginBottom: 4 }} required />
                  <input type="datetime-local" value={c.publishedAt} onChange={e => handleSaveCase(c._id, c.title, e.target.value, c.image, c.body)} style={{ width: '100%', marginBottom: 4 }} required />
                  <input type="text" value={c.image} onChange={e => handleSaveCase(c._id, c.title, c.publishedAt, e.target.value, c.body)} placeholder="Image URL" style={{ width: '100%', marginBottom: 4 }} />
                  <textarea value={c.body} onChange={e => handleSaveCase(c._id, c.title, c.publishedAt, c.image, e.target.value)} placeholder="Body" style={{ width: '100%', marginBottom: 4 }} required />
                  <button type="submit" style={{ marginRight: 8 }}>Save</button>
                  <button type="button" onClick={() => handleCancelEditCase(c._id)}>Cancel</button>
                </form>
              ) : (
                <>
                  <strong>{c.title}</strong> <br />
                  {c.publishedAt && <span>Published: {new Date(c.publishedAt).toLocaleString()}</span>}<br />
                  {c.image && <img src={c.image} alt={c.title} style={{ maxWidth: 100, margin: '8px 0', borderRadius: 8 }} />}<br />
                  {c.body && <span>{typeof c.body === 'string' ? c.body : ''}</span>}<br />
                  <button style={{ marginLeft: 8 }} onClick={() => handleEditCase(c._id)}>Edit</button>
                  <button style={{ marginLeft: 8, background: 'red', color: '#fff', border: 'none', borderRadius: 8, padding: '0.25rem 0.75rem', cursor: 'pointer', fontWeight: 600 }} onClick={() => handleDeleteCase(c._id)}>Delete</button>
                </>
              )}
            </li>
          ))}</ul>
        </div>
      </div>
    </section>
  );
}

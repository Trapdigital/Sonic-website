import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import { useBlogPosts, useCaseStudies } from './useCMSContent';
// import Google Analytics script in your main index.html or App component
import sanityClient from './cmsClient';
import { useGA4Stats } from './useGA4Stats';

export default function AdminDashboard() {
  const { stats: gaStats, loading: gaLoading, error: gaError } = useGA4Stats();
  const [loggedIn, setLoggedIn] = useState(false);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogDate, setNewBlogDate] = useState('');
  const [newBlogImageId, setNewBlogImageId] = useState('');
  const [newBlogBody, setNewBlogBody] = useState('');
  const [newCaseTitle, setNewCaseTitle] = useState('');
  const [newCaseDate, setNewCaseDate] = useState('');
  const [newCaseImageId, setNewCaseImageId] = useState('');
  const [newCaseBody, setNewCaseBody] = useState('');

  const blog = useBlogPosts();
  const caseStudies = useCaseStudies();
  // Google Analytics stats are viewed in the GA dashboard. No direct API widget is provided here.

  if (!loggedIn) return <AdminLogin onLogin={() => setLoggedIn(true)} />;

  // Removed direct image upload. Images should be uploaded via Sanity Studio. Admins can select from existing images.
  // Google Analytics: Add your GA4 Measurement ID to index.html or main App component.

  async function handleAddBlog(e: React.FormEvent) {
    e.preventDefault();
    let imageRef = newBlogImageId ? newBlogImageId : undefined;
    if (!newBlogTitle.trim() || !newBlogDate.trim() || !newBlogBody.trim()) return;
    await sanityClient.create({
      _type: 'post',
      title: newBlogTitle,
      publishedAt: newBlogDate,
      image: imageRef ? { asset: { _type: 'reference', _ref: imageRef } } : undefined,
      body: [{ _type: 'block', children: [{ _type: 'span', text: newBlogBody }] }],
    });
    setNewBlogTitle('');
    setNewBlogDate('');
    setNewBlogImageId('');
    setNewBlogBody('');
  }
  async function handleDeleteBlog(id: string) {
    await sanityClient.delete(id);
  }
  async function handleAddCase(e: React.FormEvent) {
    e.preventDefault();
    let imageRef = newCaseImageId ? newCaseImageId : undefined;
    if (!newCaseTitle.trim() || !newCaseDate.trim() || !newCaseBody.trim()) return;
    await sanityClient.create({
      _type: 'caseStudy',
      title: newCaseTitle,
      publishedAt: newCaseDate,
      image: imageRef ? { asset: { _type: 'reference', _ref: imageRef } } : undefined,
      body: [{ _type: 'block', children: [{ _type: 'span', text: newCaseBody }] }],
    });
    setNewCaseTitle('');
    setNewCaseDate('');
    setNewCaseImageId('');
    setNewCaseBody('');
  }
  async function handleDeleteCase(id: string) {
    await sanityClient.delete(id);
  }

  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Admin Dashboard</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 400px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3>Website Analytics (Google Analytics 4)</h3>
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
        <div style={{ flex: '1 1 400px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3>Blog Management</h3>
          <form onSubmit={handleAddBlog} style={{ marginBottom: 16 }}>
            <input type="text" value={newBlogTitle} onChange={e => setNewBlogTitle(e.target.value)} placeholder="Title" style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc', marginBottom: 8 }} required />
            <input type="datetime-local" onChange={e => setNewBlogDate(e.target.value)} placeholder="Published At" style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc', marginBottom: 8 }} required />
            <input type="text" value={newBlogImageId} onChange={e => setNewBlogImageId(e.target.value)} placeholder="Sanity Image Asset ID (from Studio)" style={{ width: '100%', marginBottom: 8 }} />
            <textarea onChange={e => setNewBlogBody(e.target.value)} placeholder="Body" style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc', marginBottom: 8, minHeight: 80 }} required />
            <button type="submit" style={{ padding: '0.5rem 1rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Add</button>
          </form>
          <ul>{blog.map((b: any) => (
            <li key={b._id} style={{ marginBottom: 8 }}>
              <strong>{b.title}</strong> <br />
              {b.publishedAt && <span>Published: {new Date(b.publishedAt).toLocaleString()}</span>}<br />
              {b.image && <img src={b.image} alt={b.title} style={{ maxWidth: 100, margin: '8px 0' }} />}<br />
              {b.body && <span>{typeof b.body === 'string' ? b.body : ''}</span>}<br />
              <button style={{ marginLeft: 8, background: 'red', color: '#fff', border: 'none', borderRadius: 4, padding: '0.25rem 0.5rem', cursor: 'pointer' }} onClick={() => handleDeleteBlog(b._id)}>Delete</button>
            </li>
          ))}</ul>
        </div>
        <div style={{ flex: '1 1 400px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3>Case Studies Management</h3>
          <form onSubmit={handleAddCase} style={{ marginBottom: 16 }}>
            <input type="text" value={newCaseTitle} onChange={e => setNewCaseTitle(e.target.value)} placeholder="Title" style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc', marginBottom: 8 }} required />
            <input type="datetime-local" onChange={e => setNewCaseDate(e.target.value)} placeholder="Published At" style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc', marginBottom: 8 }} required />
            <input type="text" value={newCaseImageId} onChange={e => setNewCaseImageId(e.target.value)} placeholder="Sanity Image Asset ID (from Studio)" style={{ width: '100%', marginBottom: 8 }} />
            <textarea onChange={e => setNewCaseBody(e.target.value)} placeholder="Body" style={{ width: '100%', padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc', marginBottom: 8, minHeight: 80 }} required />
            <button type="submit" style={{ padding: '0.5rem 1rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Add</button>
          </form>
          <ul>{caseStudies.map((c: any) => (
            <li key={c._id} style={{ marginBottom: 8 }}>
              <strong>{c.title}</strong> <br />
              {c.publishedAt && <span>Published: {new Date(c.publishedAt).toLocaleString()}</span>}<br />
              {c.image && <img src={c.image} alt={c.title} style={{ maxWidth: 100, margin: '8px 0' }} />}<br />
              {c.body && <span>{typeof c.body === 'string' ? c.body : ''}</span>}<br />
              <button style={{ marginLeft: 8, background: 'red', color: '#fff', border: 'none', borderRadius: 4, padding: '0.25rem 0.5rem', cursor: 'pointer' }} onClick={() => handleDeleteCase(c._id)}>Delete</button>
            </li>
          ))}</ul>
        </div>
      </div>
    </section>
  );
}

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AdminDashboard from './AdminDashboard';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/case-studies">Case Studies</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin" style={{ fontWeight: 'bold', color: '#646cff' }}>Admin</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}

function Homepage() {
  return (
    <section style={{ textAlign: 'center', padding: '2rem 0' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Sonic Software Solutions</h1>
        <p style={{ fontSize: '1.25rem', color: '#555', margin: '1rem 0' }}>
          Building trust, intuition, and human-oriented software.
        </p>
        <button style={{ fontSize: '1rem', padding: '0.75rem 2rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Get Started
        </button>
      </header>
      <section aria-label="Core Services" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Core Services</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ minWidth: 180, padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Mobile App Development</h3>
            <p style={{ margin: 0, color: '#666' }}>iOS, Android, cross-platform solutions.</p>
          </div>
          <div style={{ minWidth: 180, padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Web Development</h3>
            <p style={{ margin: 0, color: '#666' }}>Modern, scalable, and secure web apps.</p>
          </div>
          <div style={{ minWidth: 180, padding: '1rem', background: 'var(--card-bg)', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>UI/UX Design</h3>
            <p style={{ margin: 0, color: '#666' }}>Intuitive, accessible, and beautiful interfaces.</p>
          </div>
        </div>
      </section>
      <section aria-label="Trust Section" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Trusted by Leading Clients</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Placeholder logos, replace with real client logos */}
          <span style={{ fontWeight: 'bold', color: '#646cff' }}>Client A</span>
          <span style={{ fontWeight: 'bold', color: '#646cff' }}>Client B</span>
          <span style={{ fontWeight: 'bold', color: '#646cff' }}>Client C</span>
        </div>
        <p style={{ marginTop: '1rem', color: '#888' }}>See our case studies for real-world results.</p>
      </section>
      <section aria-label="Human-Oriented Philosophy" style={{ maxWidth: 600, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Our Human-Oriented Philosophy</h2>
        <p style={{ color: '#555' }}>
          We solve human problems, not just technical ones. Our approach is empathetic, accessible, and focused on real-world impact. Discover how we build software that makes a difference.
        </p>
      </section>
    </section>
  );
}

function Services() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Our Services</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ flex: '1 1 250px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ marginTop: 0 }}>Mobile App Development</h3>
          <p>We build robust, scalable mobile apps for iOS, Android, and cross-platform. Our process includes ideation, prototyping, development, and launch, focusing on user experience and business goals.</p>
          <ul style={{ color: '#666' }}>
            <li>Native & cross-platform solutions</li>
            <li>App store deployment</li>
            <li>Ongoing support</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 250px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ marginTop: 0 }}>Web Development</h3>
          <p>Modern, scalable web applications using the latest technologies. We focus on performance, security, and maintainability, delivering solutions that grow with your business.</p>
          <ul style={{ color: '#666' }}>
            <li>Custom web apps</li>
            <li>API integration</li>
            <li>SEO & accessibility</li>
          </ul>
        </div>
        <div style={{ flex: '1 1 250px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ marginTop: 0 }}>UI/UX Design</h3>
          <p>Intuitive, accessible, and beautiful interfaces. We design with empathy, ensuring every user feels included and every interaction is meaningful.</p>
          <ul style={{ color: '#666' }}>
            <li>User research & personas</li>
            <li>Wireframes & prototypes</li>
            <li>Accessibility-first design</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
        <p>Contact us to discuss your project and see how we can help.</p>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Case Studies / Portfolio</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Example case study card, replace with real data */}
        <div style={{ flex: '1 1 250px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ marginTop: 0 }}>Client A: Healthcare App</h3>
          <p><strong>Problem:</strong> Inefficient patient communication.</p>
          <p><strong>Solution:</strong> Built a secure, intuitive mobile app for real-time messaging and appointment management.</p>
          <p><strong>Impact:</strong> Increased patient satisfaction and reduced missed appointments by 30%.</p>
        </div>
        <div style={{ flex: '1 1 250px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ marginTop: 0 }}>Client B: E-Commerce Platform</h3>
          <p><strong>Problem:</strong> Low conversion rates and poor mobile experience.</p>
          <p><strong>Solution:</strong> Redesigned the UI/UX and optimized performance for mobile users.</p>
          <p><strong>Impact:</strong> Boosted sales by 25% and improved user reviews.</p>
        </div>
        <div style={{ flex: '1 1 250px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h3 style={{ marginTop: 0 }}>Client C: SaaS Dashboard</h3>
          <p><strong>Problem:</strong> Complex data, hard to use for non-technical users.</p>
          <p><strong>Solution:</strong> Created a clean, accessible dashboard with guided onboarding.</p>
          <p><strong>Impact:</strong> Enabled all team members to make data-driven decisions, increasing engagement.</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
        <p>Read more about our process and results in each case study.</p>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>About Us</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
        {/* Example team bios, replace with real photos and bios */}
        <div style={{ flex: '1 1 200px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#646cff', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem' }}>A</div>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Alex Kim</h3>
          <p style={{ color: '#666' }}>Lead Developer. Passionate about human-centered design and scalable systems.</p>
        </div>
        <div style={{ flex: '1 1 200px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#646cff', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem' }}>J</div>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Jamie Lee</h3>
          <p style={{ color: '#666' }}>UI/UX Designer. Focused on accessibility and intuitive user experiences.</p>
        </div>
        <div style={{ flex: '1 1 200px', background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#646cff', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem' }}>S</div>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>Sam Patel</h3>
          <p style={{ color: '#666' }}>Project Manager. Dedicated to transparency and client success.</p>
        </div>
      </div>
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3>Our History</h3>
        <p style={{ color: '#555' }}>Founded in 2015, Sonic Software Solutions has delivered impactful software for clients worldwide, always prioritizing human needs and business outcomes.</p>
      </section>
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3>Our Values</h3>
        <ul style={{ display: 'inline-block', textAlign: 'left', color: '#555' }}>
          <li>Trust & Transparency</li>
          <li>Empathy & Accessibility</li>
          <li>Quality & Innovation</li>
        </ul>
      </section>
      <section style={{ textAlign: 'center' }}>
        <h3>Our Process</h3>
        <p style={{ color: '#555' }}>We work closely with clients, communicate openly, and deliver solutions that solve real problems. Our process is transparent, collaborative, and focused on results.</p>
      </section>
    </section>
  );
}

function Blog() {
  return (
    <section style={{ maxWidth: 700, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Blog / Insights</h2>
      <article style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h3 style={{ marginTop: 0 }}>Why Human-Oriented Development Matters</h3>
        <p style={{ color: '#555' }}>Discover how focusing on people leads to better software and business outcomes.</p>
        <a href="#" style={{ color: '#646cff' }}>Read more</a>
      </article>
      <article style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h3 style={{ marginTop: 0 }}>Accessibility in Modern Web Apps</h3>
        <p style={{ color: '#555' }}>Tips and strategies for building inclusive, WCAG 2.1-compliant interfaces.</p>
        <a href="#" style={{ color: '#646cff' }}>Read more</a>
      </article>
      <article style={{ background: 'var(--card-bg)', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <h3 style={{ marginTop: 0 }}>Optimizing Core Web Vitals</h3>
        <p style={{ color: '#555' }}>How we ensure fast, responsive, and stable experiences for every user.</p>
        <a href="#" style={{ color: '#646cff' }}>Read more</a>
      </article>
      <div style={{ textAlign: 'center', color: '#888' }}>
        <p>Check back for more insights and updates from our team.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section style={{ maxWidth: 500, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Contact Us</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }} aria-label="Contact Form">
        <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name</label>
        <input id="name" type="text" placeholder="Your Name" required aria-required="true" aria-label="Name" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }} />
        <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
        <input id="email" type="email" placeholder="Your Email" required aria-required="true" aria-label="Email" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc' }} />
        <label htmlFor="message" style={{ fontWeight: 'bold' }}>Message</label>
        <textarea id="message" placeholder="Your Message" required aria-required="true" aria-label="Message" style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #ccc', minHeight: 100 }} />
        <button type="submit" style={{ fontSize: '1rem', padding: '0.75rem 2rem', background: '#646cff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Send Message</button>
      </form>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ color: '#555' }}>We respect your privacy. Your information will never be shared.</p>
      </div>
      <div style={{ textAlign: 'center', color: '#888' }}>
        <p><strong>Email:</strong> contact@sonicsoftwaresolutions.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Innovation Drive, Suite 100, Tech City</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
        <p>We'll get back to you as soon as possible. Thank you for reaching out!</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App

import React from 'react';
import logo from './assets/trapdigital-logo.png';
import Chatbot from './components/Chatbot';
import './App.css';
import AdminDashboard from './AdminDashboard';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#0a2540',
          color: 'var(--econet-white)',
          padding: '0.5rem 2rem',
          boxShadow: 'var(--econet-shadow)',
          borderRadius: 0,
          marginBottom: '2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logo} alt="TrapDigital Software Solutions Logo" style={{ height: 48, marginRight: 12 }} />
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1, color: 'var(--econet-white)' }}>
            <span style={{ color: 'var(--econet-accent)' }}>TrapDigital</span> Software Solutions
          </span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#home" style={{ color: 'var(--econet-white)', fontWeight: 500 }}>Home</a>
          <a href="#services" style={{ color: 'var(--econet-white)', fontWeight: 500 }}>Services</a>
          <a href="#case-studies" style={{ color: 'var(--econet-white)', fontWeight: 500 }}>Case Studies</a>
          <a href="#about" style={{ color: 'var(--econet-white)', fontWeight: 500 }}>About Us</a>
          <a href="#blog" style={{ color: 'var(--econet-white)', fontWeight: 500 }}>Blog</a>
          <a href="#contact" style={{ color: 'var(--econet-white)', fontWeight: 500 }}>Contact</a>
          <a href="#admin" style={{
            fontWeight: 700,
            color: 'var(--econet-blue)',
            background: 'var(--econet-white)',
            borderRadius: '24px',
            padding: '0.5rem 1.25rem',
            marginLeft: 8,
            boxShadow: 'var(--econet-shadow)',
            border: 'none',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s',
          }}>Admin</a>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

function Homepage() {
  return (
    <section style={{ textAlign: 'center', padding: 0, background: '#0a2540', color: 'var(--econet-white)' }}>
      <header className="econet-hero" style={{ padding: '3rem 0 2rem 0', background: 'linear-gradient(90deg, #0a2540 70%, var(--econet-accent) 100%)', borderBottomLeftRadius: 32, borderBottomRightRadius: 32, boxShadow: 'var(--econet-shadow)' }}>
        <img src={logo} alt="TrapDigital Software Solutions Logo" style={{ height: 80, marginBottom: 24 }} />
        <h1 style={{ fontSize: '2.8rem', margin: 0, fontWeight: 800, letterSpacing: 1 }}>Live the Digital Difference</h1>
        <p style={{ fontSize: '1.35rem', color: 'var(--econet-white)', margin: '1.5rem 0 2rem 0', fontWeight: 500, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          Smarter, faster, and more fun software for your business and life. Experience the future with TrapDigital Software Consultancy.
        </p>
        <button style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', background: 'var(--econet-green)', color: 'var(--econet-white)', border: 'none', borderRadius: '32px', cursor: 'pointer', fontWeight: 700, boxShadow: 'var(--econet-shadow)' }}>
          Get Started
        </button>
      </header>
      <section aria-label="Core Services" style={{ margin: '0 auto', marginTop: '-2rem', marginBottom: '2.5rem', maxWidth: 1100, background: 'var(--econet-white)', borderRadius: '32px', boxShadow: 'var(--econet-shadow)', padding: '2.5rem 1.5rem 2rem 1.5rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--econet-blue)', fontWeight: 700 }}>Our Core Services</h2>
        <div className="econet-cards" style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
          <div className="econet-card" style={{ minWidth: 220, flex: '1 1 220px', padding: '2rem 1.5rem', background: 'var(--econet-light-gray)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
            <h3 style={{ margin: '0 0 0.75rem 0', color: 'var(--econet-blue)', fontWeight: 700 }}>Mobile App Development</h3>
            <p style={{ margin: 0, color: 'var(--econet-dark)', fontWeight: 500 }}>iOS, Android, cross-platform solutions.</p>
          </div>
          <div className="econet-card" style={{ minWidth: 220, flex: '1 1 220px', padding: '2rem 1.5rem', background: 'var(--econet-light-gray)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
            <h3 style={{ margin: '0 0 0.75rem 0', color: 'var(--econet-blue)', fontWeight: 700 }}>Web Development</h3>
            <p style={{ margin: 0, color: 'var(--econet-dark)', fontWeight: 500 }}>Modern, scalable, and secure web apps.</p>
          </div>
          <div className="econet-card" style={{ minWidth: 220, flex: '1 1 220px', padding: '2rem 1.5rem', background: 'var(--econet-light-gray)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
            <h3 style={{ margin: '0 0 0.75rem 0', color: 'var(--econet-blue)', fontWeight: 700 }}>UI/UX Design</h3>
            <p style={{ margin: 0, color: 'var(--econet-dark)', fontWeight: 500 }}>Intuitive, accessible, and beautiful interfaces.</p>
          </div>
        </div>
      </section>
      <section aria-label="Trust Section" style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Trusted by Leading Clients</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Placeholder logos, replace with real client logos */}
          <span style={{ fontWeight: 'bold', color: '#646cff' }}>Ray James Medical Care</span>
          <span style={{ fontWeight: 'bold', color: '#646cff' }}>Seraph Blush & Beauty</span>
          <span style={{ fontWeight: 'bold', color: '#646cff' }}>Tatenda Nashe</span>
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
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 0 2rem 0' }}>
      <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--econet-blue)', fontWeight: 800 }}>Our Services</h2>
      <div className="econet-cards" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="econet-card" style={{ minWidth: 220, flex: '1 1 280px', padding: '2rem 1.5rem', background: 'var(--econet-white)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <h3 style={{ marginTop: 0, color: 'var(--econet-blue)', fontWeight: 700 }}>Mobile App Development</h3>
          <p style={{ color: 'var(--econet-dark)' }}>We build robust, scalable mobile apps for iOS, Android, and cross-platform. Our process includes ideation, prototyping, development, and launch, focusing on user experience and business goals.</p>
          <ul style={{ color: 'var(--econet-accent)', fontWeight: 500, margin: '1rem 0 0 0' }}>
            <li>Native & cross-platform solutions</li>
            <li>App store deployment</li>
            <li>Ongoing support</li>
          </ul>
        </div>
        <div className="econet-card" style={{ minWidth: 220, flex: '1 1 280px', padding: '2rem 1.5rem', background: 'var(--econet-white)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <h3 style={{ marginTop: 0, color: 'var(--econet-blue)', fontWeight: 700 }}>Web Development</h3>
          <p style={{ color: 'var(--econet-dark)' }}>Modern, scalable web applications using the latest technologies. We focus on performance, security, and maintainability, delivering solutions that grow with your business.</p>
          <ul style={{ color: 'var(--econet-accent)', fontWeight: 500, margin: '1rem 0 0 0' }}>
            <li>Custom web apps</li>
            <li>API integration</li>
            <li>SEO & accessibility</li>
          </ul>
        </div>
        <div className="econet-card" style={{ minWidth: 220, flex: '1 1 280px', padding: '2rem 1.5rem', background: 'var(--econet-white)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <h3 style={{ marginTop: 0, color: 'var(--econet-blue)', fontWeight: 700 }}>UI/UX Design</h3>
          <p style={{ color: 'var(--econet-dark)' }}>Intuitive, accessible, and beautiful interfaces. We design with empathy, ensuring every user feels included and every interaction is meaningful.</p>
          <ul style={{ color: 'var(--econet-accent)', fontWeight: 500, margin: '1rem 0 0 0' }}>
            <li>User research & personas</li>
            <li>Wireframes & prototypes</li>
            <li>Accessibility-first design</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--econet-blue)', fontWeight: 600 }}>
        <p>Contact us to discuss your project and see how we can help.</p>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2.5rem 0 2rem 0' }}>
      <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--econet-blue)', fontWeight: 800 }}>Case Studies / Portfolio</h2>
      <div className="econet-cards" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Example case study card, replace with real data */}
        <div className="econet-card" style={{ minWidth: 220, flex: '1 1 280px', padding: '2rem 1.5rem', background: 'var(--econet-white)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <h3 style={{ marginTop: 0, color: 'var(--econet-blue)', fontWeight: 700 }}>Ray James Medical Care: Healthcare App</h3>
          <p style={{ color: 'var(--econet-dark)' }}><strong>Problem:</strong> Inefficient patient communication.</p>
          <p style={{ color: 'var(--econet-dark)' }}><strong>Solution:</strong> Built a secure, intuitive mobile app for real-time messaging and appointment management.</p>
          <p style={{ color: 'var(--econet-dark)' }}><strong>Impact:</strong> Increased patient satisfaction and reduced missed appointments by 30%.</p>
        </div>
        <div className="econet-card" style={{ minWidth: 220, flex: '1 1 280px', padding: '2rem 1.5rem', background: 'var(--econet-white)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <h3 style={{ marginTop: 0, color: 'var(--econet-blue)', fontWeight: 700 }}>Seraph Blush & Beauty: E-Commerce Platform</h3>
          <p style={{ color: 'var(--econet-dark)' }}><strong>Problem:</strong> Low conversion rates and poor mobile experience.</p>
          <p style={{ color: 'var(--econet-dark)' }}><strong>Solution:</strong> Redesigned the UI/UX and optimized performance for mobile users.</p>
          <p style={{ color: 'var(--econet-dark)' }}><strong>Impact:</strong> Boosted sales by 25% and improved user reviews.</p>
        </div>
        <div className="econet-card" style={{ minWidth: 220, flex: '1 1 280px', padding: '2rem 1.5rem', background: 'var(--econet-white)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <h3 style={{ marginTop: 0, color: 'var(--econet-blue)', fontWeight: 700 }}>Tatenda Nashe: SaaS Dashboard</h3>
          <p style={{ color: 'var(--econet-dark)' }}><strong>Problem:</strong> Complex data, hard to use for non-technical users.</p>
          <p style={{ color: 'var(--econet-dark)' }}><strong>Solution:</strong> Created a clean, accessible dashboard with guided onboarding.</p>
          <p style={{ color: 'var(--econet-dark)' }}><strong>Impact:</strong> Enabled all team members to make data-driven decisions, increasing engagement.</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--econet-blue)', fontWeight: 600 }}>
        <p>Read more about our process and results in each case study.</p>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--econet-blue)', fontWeight: 800 }}>About Us</h2>
      <div className="econet-cards" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
        {/* Example team bios, replace with real photos and bios */}
        <div className="econet-card" style={{ flex: '1 1 220px', background: 'var(--econet-white)', borderRadius: '20px', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#0a2540', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem', fontWeight: 700 }}>A</div>
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--econet-blue)', fontWeight: 700 }}>Tanya Kayz</h3>
          <p style={{ color: 'var(--econet-dark)' }}>Lead Developer. Passionate about human-centered design and scalable systems.</p>
        </div>
        <div className="econet-card" style={{ flex: '1 1 220px', background: 'var(--econet-white)', borderRadius: '20px', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#0a2540', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem', fontWeight: 700 }}>J</div>
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--econet-blue)', fontWeight: 700 }}>Ngonie Garry</h3>
          <p style={{ color: 'var(--econet-dark)' }}>UI/UX Designer. Focused on accessibility and intuitive user experiences.</p>
        </div>
        <div className="econet-card" style={{ flex: '1 1 220px', background: 'var(--econet-white)', borderRadius: '20px', padding: '2rem 1.5rem', textAlign: 'center', boxShadow: 'var(--econet-shadow)', marginBottom: 16 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#0a2540', margin: '0 auto 1rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem', fontWeight: 700 }}>S</div>
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--econet-blue)', fontWeight: 700 }}> Prince Dakarai Bingo</h3>
          <p style={{ color: 'var(--econet-dark)' }}>Project Manager. Dedicated to transparency and client success.</p>
        </div>
      </div>
      <section style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h3 style={{ color: 'var(--econet-blue)', fontWeight: 700 }}>Our History</h3>
        <p style={{ color: 'var(--econet-dark)' }}>Founded in 2024, TrapDigital Software Solutions has delivered impactful software for clients worldwide, always prioritizing human needs and business outcomes.</p>
      </section>
      <section style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h3 style={{ color: 'var(--econet-blue)', fontWeight: 700 }}>Our Values</h3>
        <ul style={{ display: 'inline-block', textAlign: 'left', color: 'var(--econet-dark)', fontWeight: 500 }}>
          <li>Trust & Transparency</li>
          <li>Empathy & Accessibility</li>
          <li>Quality & Innovation</li>
        </ul>
      </section>
      <section style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'var(--econet-blue)', fontWeight: 700 }}>Our Process</h3>
        <p style={{ color: 'var(--econet-dark)' }}>We work closely with clients, communicate openly, and deliver solutions that solve real problems. Our process is transparent, collaborative, and focused on results.</p>
      </section>
    </section>
  );
}

function Blog() {
  const [expanded, setExpanded] = React.useState([false, false, false]);
  const handleExpand = (idx: number) => {
    setExpanded(expanded => expanded.map((v, i) => i === idx ? !v : v));
  };
  return (
    <section style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--econet-blue)', fontWeight: 800 }}>Blog / Insights</h2>
      <div className="econet-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        <article className="econet-card" style={{ flex: '1 1 240px', background: 'var(--econet-white)', borderRadius: '20px', padding: '2rem 1.5rem', marginBottom: 16, boxShadow: 'var(--econet-shadow)' }}>
          <h3 style={{ marginTop: 0, color: 'var(--econet-blue)', fontWeight: 700 }}>Why Human-Oriented Development Matters</h3>
          <p style={{ color: 'var(--econet-dark)' }}>Discover how focusing on people leads to better software and business outcomes.</p>
          <button onClick={() => handleExpand(0)} style={{ color: 'var(--econet-accent)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: 8 }}>Read more</button>
          {expanded[0] && (
            <div style={{ marginTop: 12, color: 'var(--econet-dark)', fontSize: '0.98rem', background: 'var(--econet-light-gray)', borderRadius: 12, padding: '1rem' }}>
              <p>Human-oriented development puts people at the center of every decision. We interview users, map their journeys, and design solutions that solve real problems. This approach leads to higher adoption, better business outcomes, and happier clients.</p>
              <ul>
                <li>Empathy-driven design</li>
                <li>Continuous feedback loops</li>
                <li>Measurable impact</li>
              </ul>
            </div>
          )}
        </article>
        <article className="econet-card" style={{ flex: '1 1 240px', background: 'var(--econet-white)', borderRadius: '20px', padding: '2rem 1.5rem', marginBottom: 16, boxShadow: 'var(--econet-shadow)' }}>
          <h3 style={{ marginTop: 0, color: 'var(--econet-blue)', fontWeight: 700 }}>Accessibility in Modern Web Apps</h3>
          <p style={{ color: 'var(--econet-dark)' }}>Tips and strategies for building inclusive, WCAG 2.1-compliant interfaces.</p>
          <button onClick={() => handleExpand(1)} style={{ color: 'var(--econet-accent)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: 8 }}>Read more</button>
          {expanded[1] && (
            <div style={{ marginTop: 12, color: 'var(--econet-dark)', fontSize: '0.98rem', background: 'var(--econet-light-gray)', borderRadius: 12, padding: '1rem' }}>
              <p>Accessibility is not optional. We use semantic HTML, ARIA roles, and color contrast checks to ensure everyone can use our apps. Our team tests with screen readers and keyboard navigation to meet WCAG 2.1 standards.</p>
              <ul>
                <li>Semantic HTML</li>
                <li>Keyboard navigation</li>
                <li>Color contrast & focus states</li>
              </ul>
            </div>
          )}
        </article>
        <article className="econet-card" style={{ flex: '1 1 240px', background: 'var(--econet-white)', borderRadius: '20px', padding: '2rem 1.5rem', marginBottom: 16, boxShadow: 'var(--econet-shadow)' }}>
          <h3 style={{ marginTop: 0, color: 'var(--econet-blue)', fontWeight: 700 }}>Optimizing Core Web Vitals</h3>
          <p style={{ color: 'var(--econet-dark)' }}>How we ensure fast, responsive, and stable experiences for every user.</p>
          <button onClick={() => handleExpand(2)} style={{ color: 'var(--econet-accent)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginTop: 8 }}>Read more</button>
          {expanded[2] && (
            <div style={{ marginTop: 12, color: 'var(--econet-dark)', fontSize: '0.98rem', background: 'var(--econet-light-gray)', borderRadius: 12, padding: '1rem' }}>
              <p>Core Web Vitals are Google’s metrics for user experience. We optimize for fast load times, interactivity, and visual stability using code splitting, image optimization, and performance budgets.</p>
              <ul>
                <li>Largest Contentful Paint (LCP)</li>
                <li>First Input Delay (FID)</li>
                <li>Cumulative Layout Shift (CLS)</li>
              </ul>
            </div>
          )}
        </article>
      </div>
      <div style={{ textAlign: 'center', color: '#888', marginTop: '2rem' }}>
        <p>Check back for more insights and updates from our team.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section style={{ maxWidth: 600, margin: '0 auto', padding: '2rem 0' }}>
      <h2 style={{ fontSize: '2.2rem', textAlign: 'center', marginBottom: '2.5rem', color: 'var(--econet-blue)', fontWeight: 800 }}>Contact Us</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem', background: 'var(--econet-white)', borderRadius: '20px', boxShadow: 'var(--econet-shadow)', padding: '2rem 1.5rem' }} aria-label="Contact Form">
        <label htmlFor="name" style={{ fontWeight: 700, color: 'var(--econet-blue)' }}>Name</label>
        <input id="name" type="text" placeholder="Your Name" required aria-required="true" aria-label="Name" style={{ padding: '0.9rem', borderRadius: '10px', border: '1px solid #cce', fontSize: '1rem' }} />
        <label htmlFor="email" style={{ fontWeight: 700, color: 'var(--econet-blue)' }}>Email</label>
        <input id="email" type="email" placeholder="Your Email" required aria-required="true" aria-label="Email" style={{ padding: '0.9rem', borderRadius: '10px', border: '1px solid #cce', fontSize: '1rem' }} />
        <label htmlFor="message" style={{ fontWeight: 700, color: 'var(--econet-blue)' }}>Message</label>
        <textarea id="message" placeholder="Your Message" required aria-required="true" aria-label="Message" style={{ padding: '0.9rem', borderRadius: '10px', border: '1px solid #cce', minHeight: 120, fontSize: '1rem' }} />
        <button type="submit" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem', background: 'var(--econet-green)', color: 'var(--econet-white)', border: 'none', borderRadius: '32px', cursor: 'pointer', fontWeight: 700, boxShadow: 'var(--econet-shadow)' }}>Send Message</button>
      </form>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ color: 'var(--econet-dark)' }}>We respect your privacy. Your information will never be shared.</p>
      </div>
      <div style={{ textAlign: 'center', color: 'var(--econet-blue)', fontWeight: 600 }}>
        <p><strong>Email:</strong> boolop263@gmail.com</p>
        <p><strong>Phone:</strong> +263 783 914 316</p>
        <p><strong>Address:</strong> 55th St, Kuwadzana 5, Harare</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem', color: '#888' }}>
        <p>We'll get back to you as soon as possible. Thank you for reaching out!</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <Layout>
      <div id="home"><Homepage /></div>
      <div id="services"><Services /></div>
      <div id="case-studies"><CaseStudies /></div>
      <div id="about"><AboutUs /></div>
      <div id="blog"><Blog /></div>
      <div id="contact"><Contact /></div>
      <div id="admin"><AdminDashboard /></div>
      <Chatbot />
    </Layout>
  );
}

export default App

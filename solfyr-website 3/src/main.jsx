import React from 'react';
import { createRoot } from 'react-dom/client';
import { Bell, BookOpen, CheckCircle2, FileText, Lock, MessageCircle, Scale, ShieldCheck, Sparkles, Users, Zap } from 'lucide-react';
import './styles.css';

const plans = [
  { name: 'Essential', price: '$99', subtitle: 'For single-license operators getting organized.', features: ['SOP & document access', 'Forms and logs library', 'Recall and embargo alerts', 'Government resource links', 'Blog and community access'] },
  { name: 'Professional', price: '$199', subtitle: 'For active operators who need ongoing support.', featured: true, features: ['Everything in Essential', 'Legal question access', 'AI-assisted alert monitoring', 'Downloadable packets', 'Priority update notifications'] },
  { name: 'Enterprise', price: 'Custom', subtitle: 'For multi-license and multi-state operators.', features: ['Multiple locations and users', 'Audit readiness dashboard', 'Team training resources', 'Custom workflows', 'Expanded support options'] }
];

const features = [
  { icon: FileText, title: 'SOPs & Documents', body: 'License-specific SOPs, packets, forms, logs, and supporting materials designed to stay current.' },
  { icon: Bell, title: 'Real-Time Alerts', body: 'Track recalls, embargoes, agency notices, rule changes, and compliance updates.' },
  { icon: Scale, title: 'Legal Support', body: 'Member legal question workflow with structured intake and review timelines.' },
  { icon: BookOpen, title: 'Blogs & Education', body: 'Professional updates, guides, articles, and industry education built into the platform.' },
  { icon: MessageCircle, title: 'Member Chat', body: 'A support and community channel for member questions, guidance, and platform help.' },
  { icon: Lock, title: 'Member Portal', body: 'Protected access for subscribers with dashboard, account, resources, and future document tools.' }
];

const blogPosts = [
  'How to Prepare for an OMMA Inspection',
  'Why Static SOPs Become Dangerous Over Time',
  'Recall and Embargo Monitoring: What Operators Need to Know'
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand">
          <img src="/solfyr-logo.png" alt="SOLFYR LLC logo" />
          <span>SOLFYR</span>
        </a>
        <nav>
          <a href="#platform">Platform</a>
          <a href="#pricing">Pricing</a>
          <a href="#blogs">Blogs</a>
          <a href="#member-portal">Member Portal</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="login" href="#member-portal">Member Login</a>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={18} /> Compliance. Confidence. Community.</p>
          <h1>Compliance. Simplified.</h1>
          <p className="lead">SOLFYR LLC is building an all-in-one compliance and operational support platform for cannabis businesses with SOPs, regulatory updates, recall and embargo alerts, legal support access, blogs, chat, and member resources.</p>
          <div className="hero-actions">
            <a className="btn primary" href="#pricing">Become a Member</a>
            <a className="btn secondary" href="#platform">Explore Platform</a>
          </div>
          <div className="trust-row">
            <span><ShieldCheck size={17} /> Built for licensed operators</span>
            <span><Zap size={17} /> Alerts and updates</span>
            <span><Users size={17} /> Professional community</span>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="orbit"></div>
          <img className="hero-logo" src="/solfyr-logo.png" alt="SOLFYR glowing emblem" />
          <div className="mini-dashboard">
            <div><strong>3</strong><span>Active Alerts</span></div>
            <div><strong>7</strong><span>Document Updates</span></div>
            <div><strong>92%</strong><span>Audit Ready</span></div>
          </div>
        </div>
      </section>

      <section id="platform" className="section">
        <p className="section-kicker">Everything in one place</p>
        <h2>Designed to become the daily compliance hub for operators.</h2>
        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return <article className="feature-card" key={feature.title}><Icon /><h3>{feature.title}</h3><p>{feature.body}</p></article>;
          })}
        </div>
      </section>

      <section className="alert-banner">
        <div>
          <h2>Stay informed. Stay protected.</h2>
          <p>Planned monitoring for recalls, embargoes, regulatory updates, registration portals, and agency notices.</p>
        </div>
        <a className="btn primary" href="#member-portal">View Member Portal</a>
      </section>

      <section id="pricing" className="section pricing-section">
        <p className="section-kicker">Simple pricing. Powerful value.</p>
        <h2>Launch pricing structure for SOLFYR memberships.</h2>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={plan.featured ? 'price-card featured' : 'price-card'} key={plan.name}>
              {plan.featured && <span className="badge">Recommended</span>}
              <h3>{plan.name}</h3>
              <p>{plan.subtitle}</p>
              <div className="price"><span>{plan.price}</span>{plan.price !== 'Custom' && <small>/mo</small>}</div>
              <ul>{plan.features.map((f) => <li key={f}><CheckCircle2 size={18} /> {f}</li>)}</ul>
              <a className="btn primary" href="#contact">Become a Member</a>
            </article>
          ))}
        </div>
      </section>

      <section id="member-portal" className="portal-section">
        <div>
          <p className="section-kicker">Member login placeholder</p>
          <h2>Your member portal will live here.</h2>
          <p>Next build phase: real authentication, Stripe subscriptions, document library, legal question form, chat, alerts, and admin controls.</p>
        </div>
        <form className="login-card" onSubmit={(e) => e.preventDefault()}>
          <h3>Member Login</h3>
          <label>Email<input type="email" placeholder="member@company.com" /></label>
          <label>Password<input type="password" placeholder="••••••••" /></label>
          <button className="btn primary" type="submit">Login Coming Soon</button>
          <small>This is a visual placeholder until authentication is connected.</small>
        </form>
      </section>

      <section id="blogs" className="section blog-section">
        <p className="section-kicker">Blogs & professional resources</p>
        <h2>Industry updates, compliance guidance, and expert support.</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => <article className="blog-card" key={post}><span>Article 0{index + 1}</span><h3>{post}</h3><p>Professional content placeholder for SOLFYR blogs and member education.</p></article>)}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Ready to build the SOLFYR member platform?</h2>
        <p>Next steps: connect Stripe, authentication, Supabase storage, blog CMS, legal question intake, and alert monitoring.</p>
        <a className="btn primary" href="mailto:info@solfyrllc.com">Contact SOLFYR</a>
      </section>

      <footer>
        <img src="/solfyr-logo.png" alt="SOLFYR logo" />
        <p>© 2026 SOLFYR LLC. Guiding Growth • Cultivating Excellence • Built on Trust</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

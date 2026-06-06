import React from 'react';
import { createRoot } from 'react-dom/client';
import { ShieldCheck, Bell, FileText, Scale, Search, Lock, Users, Flame, ArrowRight, CheckCircle2, AlertTriangle, Building2, MessageCircle, BookOpen, CreditCard } from 'lucide-react';
import './styles.css';

const plans = [
  { name: 'Essential', price: '$99', desc: 'For single-license operators who need current SOPs, forms, logs, and compliance alerts.', features: ['SOP library', 'Forms & logs', 'Recall/embargo alerts', 'Blog & resource access', 'Government links'] },
  { name: 'Professional', price: '$199', desc: 'For active operators who need legal question access and deeper compliance support.', features: ['Everything in Essential', 'Legal question access', 'AI-assisted alerts', 'Downloadable packets', 'Priority updates'] },
  { name: 'Enterprise', price: 'Custom', desc: 'For multi-license, multi-location, or multi-state operators needing advanced support.', features: ['Multi-user accounts', 'Multiple licenses', 'Audit readiness tools', 'Team tracking', 'Custom workflows'] },
];

const features = [
  { icon: FileText, title: 'SOPs & Documents', body: 'License-specific SOP packets, forms, logs, and compliance materials designed to stay current.' },
  { icon: Bell, title: 'Real-Time Alerts', body: 'Monitor recalls, embargoes, regulatory updates, deadlines, and enforcement notices.' },
  { icon: Scale, title: 'Legal Support', body: 'Structured legal question intake with a 72-hour response window for attorney review.' },
  { icon: Search, title: 'Resource Hub', body: 'Centralized agency links, rules, laws, portals, applications, and instructions.' },
  { icon: Lock, title: 'Protected Downloads', body: 'Watermarked documents with business name, license number, version, and timestamp.' },
  { icon: Users, title: 'Community & Blogs', body: 'Professional articles, industry updates, sponsors, and a long-term operator support network.' },
];

function App() {
  return (
    <main>
      <header className="nav">
        <div className="brand">
          <div className="brandMark"><Flame size={24} /></div>
          <div><div className="brandName">SOLFYR</div><div className="brandSub">LLC</div></div>
        </div>
        <nav>
          <a href="#platform">Platform</a><a href="#pricing">Pricing</a><a href="#alerts">Alerts</a><a href="#blogs">Blogs</a><a href="#contact">Contact</a>
        </nav>
        <div className="navActions"><button className="btn ghost">Login</button><button className="btn gold">Get Started</button></div>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Compliance. Confidence. Community.</p>
          <h1>Your Compliance. <span>Our Priority.</span></h1>
          <p className="lead">SOLFYR LLC is an all-in-one compliance and operational support platform built for cannabis businesses. Stay audit-ready, informed, and protected every step of the way.</p>
          <div className="cta"><button className="btn gold large">Start Your Free Trial <ArrowRight size={18}/></button><button className="btn outline large">View Plans</button></div>
          <div className="miniFeatures"><span>Real-time updates</span><span>SOPs always current</span><span>Legal support</span><span>Built for operators</span></div>
        </div>
        <div className="dashboardCard">
          <div className="dashTop"><strong>Dashboard</strong><span>Audit Ready</span></div>
          <div className="stats"><div><b>3</b><small>Active Alerts</small></div><div><b>7</b><small>Doc Updates</small></div><div><b>92%</b><small>Compliance Score</small></div></div>
          <div className="alertList"><p>Recent Alerts</p><div>OMMA Rule Update <span>Review</span></div><div>Product Recall Notice <span>Urgent</span></div><div>DEA Advisory Update <span>New</span></div></div>
        </div>
      </section>

      <section id="platform" className="section boxSection">
        <p className="eyebrow center">Everything you need. All in one place.</p>
        <div className="featureGrid">{features.map((f) => <div className="feature" key={f.title}><f.icon size={34}/><h3>{f.title}</h3><p>{f.body}</p></div>)}</div>
      </section>

      <section id="alerts" className="alertBanner"><AlertTriangle/><div><h3>Stay informed. Stay protected.</h3><p>Real-time monitoring of recalls, embargoes, regulatory changes, and critical compliance updates.</p></div><button className="btn gold">View Current Alerts</button></section>

      <section id="pricing" className="section"><p className="eyebrow center">Simple pricing. Powerful value.</p><div className="pricingGrid">{plans.map((p) => <div className="priceCard" key={p.name}><Building2/><h3>{p.name}</h3><div className="price">{p.price}<small>{p.price !== 'Custom' ? '/mo' : ''}</small></div><p>{p.desc}</p>{p.features.map(x => <div className="check" key={x}><CheckCircle2 size={17}/>{x}</div>)}<button className="btn gold full">{p.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}</button></div>)}</div></section>

      <section className="section tools"><div className="tool"><MessageCircle/><h3>Chat with our team</h3><p>Support chat for subscribers, compliance help, and legal intake routing.</p></div><div className="tool"><CreditCard/><h3>Secure payments</h3><p>Stripe-ready monthly subscriptions by plan, license, or enterprise account.</p></div><div className="tool" id="blogs"><BookOpen/><h3>Blogs & updates</h3><p>Publish professional articles, regulatory updates, FAQs, and industry insights.</p></div></section>

      <footer id="contact"><div><h2>SOLFYR LLC</h2><p>Guiding growth. Cultivating excellence. Built on trust.</p></div><form><input placeholder="Enter your email"/><button className="btn gold">Join Updates</button></form></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

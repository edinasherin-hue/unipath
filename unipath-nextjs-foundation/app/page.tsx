const destinations = [
  "Germany",
  "Finland",
  "Sweden",
  "Italy",
  "United Kingdom",
  "Australia",
  "Canada",
  "Norway",
  "Netherlands",
  "Denmark",
  "France",
  "South Korea",
  "Japan",
  "United States",
];

const features = [
  {
    number: "01",
    title: "Find programmes",
    description:
      "Explore degree programmes by country, subject, tuition, entry requirements and intake.",
  },
  {
    number: "02",
    title: "Explore funding",
    description:
      "Research scholarships, tuition waivers and other funding options with clear coverage details.",
  },
  {
    number: "03",
    title: "Understand your fit",
    description:
      "Build an academic profile and identify requirements you may still need to meet.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="UniPath home">
          <span className="brand-mark">U</span>
          <span>UniPath</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#discover">Discover</a>
          <a href="#funding">Funding</a>
          <a href="#destinations">Destinations</a>
        </nav>
        <a className="header-link" href="#start">Get started <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR GLOBAL EDUCATION JOURNEY</p>
          <h1>Make your next chapter <em>an informed one.</em></h1>
          <p className="hero-description">
            Explore international study options, understand funding and plan your next steps with one clear starting point.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#discover">Explore opportunities <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="#how-it-works">How UniPath works</a>
          </div>
          <p className="hero-note">Research first. Compare clearly. Plan confidently.</p>
        </div>
        <div className="hero-panel" aria-label="UniPath planning overview">
          <div className="panel-top"><span>YOUR STUDY PLAN</span><span className="panel-status">Getting started</span></div>
          <div className="panel-orbit"><div className="orbit-core">U</div><span className="orbit-tag tag-one">Discover</span><span className="orbit-tag tag-two">Compare</span><span className="orbit-tag tag-three">Prepare</span></div>
          <div className="panel-bottom"><span>One journey, clearer decisions.</span><span aria-hidden="true">✳</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="UniPath principles">
        <span>Built for international students</span><span>Source-aware information</span><span>Funding-focused discovery</span>
      </section>

      <section className="section" id="discover">
        <div className="section-heading"><div><p className="eyebrow">A CLEARER WAY TO EXPLORE</p><h2>Start with what matters to you.</h2></div><p>From your preferred destination to your funding needs, organise your search around your goals.</p></div>
        <div className="feature-grid" id="how-it-works">
          {features.map((feature) => <article className="feature-card" key={feature.number}><span className="feature-number">{feature.number}</span><h3>{feature.title}</h3><p>{feature.description}</p><span className="feature-arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </section>

      <section className="destination-section" id="destinations">
        <div className="section-heading"><div><p className="eyebrow">EXPLORE THE WORLD</p><h2>14 destinations. Many possibilities.</h2></div><p>Begin exploring study destinations. Programme and scholarship details will be added with source and verification information.</p></div>
        <div className="destination-grid">{destinations.map((country, index) => <div className="destination-item" key={country}><span>{String(index + 1).padStart(2, "0")}</span><strong>{country}</strong><span aria-hidden="true">↗</span></div>)}</div>
      </section>

      <section className="closing-section" id="funding">
        <p className="eyebrow">PLAN WITH PURPOSE</p>
        <h2>Your study-abroad journey deserves more than guesswork.</h2>
        <p>UniPath is being built to help you research opportunities, understand requirements and make decisions with reliable information.</p>
        <a className="button button-light" href="mailto:hello@unipath.example">Get project updates <span aria-hidden="true">→</span></a>
        <small>Demo foundation · Programme and scholarship data are not yet connected.</small>
      </section>

      <footer className="site-footer" id="start"><a className="brand" href="#home"><span className="brand-mark">U</span><span>UniPath</span></a><span>Explore thoughtfully. Plan confidently.</span><span>© {new Date().getFullYear()} UniPath</span></footer>
    </main>
  );
}
